const { Transaction, Blockchain } = require('../src/blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const signingKey = ec.keyFromPrivate('3d6f54430830d388052865b95c10b4aeb1bbe33c01334cf2cfa8b520062a0ce3');

function createSignedTx(amount = 10) {
  const txObject = new Transaction(signingKey.getPublic('hex'), 'wallet2', amount);
  txObject.timestamp = 1;
  txObject.signTransaction(signingKey);

  return txObject;
}

function createBCWithMined() {
  const blockchain = new Blockchain();
  blockchain.minePendingTransactions(signingKey.getPublic('hex'));

  return blockchain;
}

function createBlockchainWithTx() {
  const blockchain = new Blockchain();
  blockchain.minePendingTransactions(signingKey.getPublic('hex'));

  const validTx = new Transaction(signingKey.getPublic('hex'), 'b2', 10);
  validTx.signTransaction(signingKey);

  blockchain.addTransaction(validTx);
  blockchain.addTransaction(validTx);
  blockchain.minePendingTransactions(1);

  return blockchain;
}

function standartDeviation(values) {
  var avg = averageOfList(values);

  var squareDiffs = values.map(function(value) {
    var diff = value - avg;
    var sqrDiff = diff * diff;
    return sqrDiff;
  });

  var avgSquareDiff = averageOfSquare(squareDiffs);

  return Math.sqrt(avgSquareDiff);
}

function averageOfSquare(data) {
  var sum = data.reduce(function(sum, value) {
    return sum + value;
  }, 0);

  var avg = sum / (data.length - 1);
  return avg;
}

function averageOfList(data) {
  var sum = data.reduce(function(sum, value) {
    return sum + value;
  }, 0);

  var avg = sum / data.length;
  return avg;
}

module.exports.signingKey = signingKey;
module.exports.createSignedTx = createSignedTx;
module.exports.createBlockchainWithTx = createBlockchainWithTx;
module.exports.createBCWithMined = createBCWithMined;
module.exports.standartDeviation = standartDeviation;
module.exports.averageOfList = averageOfList;

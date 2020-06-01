const { HashBlock } = require('../src/blockchain');
const { createSignedTx, averageOfList, standartDeviation } = require('./helpers');

/**
 THESE PERFORMANCE METRICS ARE USED IN THIS TEST:

    - Length of the hash output.

    - Time to hash a block.

 */

let blockObj = null;
let blockTime = [];
const numberOfTests = 10;

describe('BlockHash class', function() {
  this.timeout(10000); // this test can take up to 5 seconds

  describe('Hash test', function(params) {
    it('should give average  time->', function() {
      for (let i = 0; i < numberOfTests; i++) {
        var start = new Date();
        blockObj = new HashBlock(1000, [createSignedTx()], 'a1', 'MD5-RSA');
        var time = new Date() - start;

        blockTime.push(time);
      }

      console.log('MD5-RSA:');
      console.log('key->', blockObj.hash);
      console.log('length->', blockObj.hash.length);
      console.log('Average Block Hash Time->', averageOfList(blockTime), ' ms');
      console.log('Standart Devation->', standartDeviation(blockTime));
      
      blockTime = [];
    });

    it('should give average sha1-rsa time->', function() {
      for (let i = 0; i < numberOfTests; i++) {
        var start = new Date();
        blockObj = new HashBlock(1000, [createSignedTx()], 'a1', 'SHA1-RSA');
        var time = new Date() - start;

        blockTime.push(time);
      }

      console.log('SHA1-RSA:');
      console.log('key->', blockObj.hash);
      console.log('length->', blockObj.hash.length);
      console.log('Average Block Hash Time->', averageOfList(blockTime), ' ms');
      console.log('Standart Devation->', standartDeviation(blockTime));

      blockTime = [];
    });
    it('should give average sha2 time->', function() {
      for (let i = 0; i < numberOfTests; i++) {
        var start = new Date();
        blockObj = new HashBlock(1000, [createSignedTx()], 'a1', 'SHA2');
        var time = new Date() - start;

        blockTime.push(time);
      }

      console.log('SHA2:');
      console.log('key->', blockObj.hash);
      console.log('length->', blockObj.hash.length);
      console.log('Average Block Hash Time->', averageOfList(blockTime), ' ms');
      console.log('Standart Devation->', standartDeviation(blockTime));

      blockTime = [];
    });
    it('should give average sha3 time->', function() {
      for (let i = 0; i < numberOfTests; i++) {
        var start = new Date();
        blockObj = new HashBlock(1000, [createSignedTx()], 'a1', 'SHA3');
        var time = new Date() - start;

        blockTime.push(time);
      }

      console.log('SHA384');
      console.log('key->', blockObj.hash);
      console.log('length->', blockObj.hash.length);
      console.log('Average Block Hash Time->', averageOfList(blockTime), ' ms');
      console.log('Standart Devation->', standartDeviation(blockTime));

      blockTime = [];
    });
    it('should give average sha512 time->', function() {
      for (let i = 0; i < numberOfTests; i++) {
        var start = new Date();
        blockObj = new HashBlock(1000, [createSignedTx()], 'a1', 'SHA512');
        var time = new Date() - start;

        blockTime.push(time);
      }

      console.log('SHA512');
      console.log('key->', blockObj.hash);
      console.log('length->', blockObj.hash.length);
      console.log('Average Block Hash Time->', averageOfList(blockTime), ' ms');
      console.log('Standart Devation->', standartDeviation(blockTime));

      blockTime = [];
    });
    it('should give average blake2b512 time->', function() {
      for (let i = 0; i < numberOfTests; i++) {
        var start = new Date();
        blockObj = new HashBlock(1000, [createSignedTx()], 'a1', 'BLAKE2B512');
        var time = new Date() - start;

        blockTime.push(time);
      }

      console.log('Blake2b512');
      console.log('key->', blockObj.hash);
      console.log('length->', blockObj.hash.length);
      console.log('Average Block Hash Time->', averageOfList(blockTime), ' ms');
      console.log('Standart Devation->', standartDeviation(blockTime));

      blockTime = [];
    });
    it('should give average ripemd160-rsa time', function() {
      for (let i = 0; i < numberOfTests; i++) {
        var start = new Date();
        blockObj = new HashBlock(1000, [createSignedTx()], 'a1', 'RIPEMD160-RSA');
        var time = new Date() - start;

        blockTime.push(time);
      }

      console.log('Ripemd160-RSA');
      console.log('key->', blockObj.hash);
      console.log('length->', blockObj.hash.length);
      console.log('Average Block Hash Time->', averageOfList(blockTime), ' ms');
      console.log('Standart Devation->', standartDeviation(blockTime));

      blockTime = [];
    });
    it('should give average mdc2-rsa time->', function() {
      for (let i = 0; i < numberOfTests; i++) {
        var start = new Date();
        blockObj = new HashBlock(1000, [createSignedTx()], 'a1', 'MDC2-RSA');
        var time = new Date() - start;

        blockTime.push(time);
      }

      console.log('MDC2-RSA');
      console.log('key->', blockObj.hash);
      console.log('length->', blockObj.hash.length);
      console.log('Average Block Hash Time->', averageOfList(blockTime), ' ms');
      console.log('Standart Devation->', standartDeviation(blockTime));

      blockTime = [];
    });
    it('should give average ssl3-sha1 time->', function() {
      for (let i = 0; i < numberOfTests; i++) {
        var start = new Date();
        blockObj = new HashBlock(1000, [createSignedTx()], 'a1', 'SSL3-SHA1');
        var time = new Date() - start;

        blockTime.push(time);
      }

      console.log('SSL3-SHA1');
      console.log('key->', blockObj.hash);
      console.log('length->', blockObj.hash.length);
      console.log('Average Block Hash Time->', averageOfList(blockTime), ' ms');
      console.log('Standart Devation->', standartDeviation(blockTime));

      blockTime = [];
    });
    it('should give average whirlpool time->', function() {
      for (let i = 0; i < numberOfTests; i++) {
        var start = new Date();
        blockObj = new HashBlock(1000, [createSignedTx()], 'a1', 'WHIRLPOOL');
        var time = new Date() - start;

        blockTime.push(time);
      }

      console.log('Whirpool');
      console.log('key->', blockObj.hash);
      console.log('length->', blockObj.hash.length);
      console.log('Average Block Hash Time->', averageOfList(blockTime), ' ms');
      console.log('Standart Devation->', standartDeviation(blockTime));

      blockTime = [];
    });
  });
});

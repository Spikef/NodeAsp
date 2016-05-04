/**
 * Usage:
 * Author: Spikef < Spikef@Foxmail.com >
 * Copyright: Envirs Team < http://envirs.com >
 */

var buf = new Buffer('hello world', 'ascii');
console.log(buf);
// prints: <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
console.log(buf.toString('hex'));
// prints: 68656c6c6f20776f726c64
console.log(buf.toString('base64'));
// prints: aGVsbG8gd29ybGQ=
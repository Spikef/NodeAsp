/**
 * Usage: fs module test
 * Author: Spikef < Spikef@Foxmail.com >
 * Copyright: Envirs Team < http://envirs.com >
 */

var fs = require('fs-extra');
console.log(fs.readdirSync('C:\\Disk\\projects\\NodeAsp\\node_modules\\util'));
console.log(fs.readdirsSync('C:\\Disk\\projects\\NodeAsp\\node_modules\\util'));
console.log(fs.readTreeSync('C:\\Disk\\projects\\NodeAsp\\node_modules\\util'));
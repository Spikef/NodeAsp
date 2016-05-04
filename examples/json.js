/**
 * Usage: json test
 * Author: Spikef < Spikef@Foxmail.com >
 * Copyright: Envirs Team < http://envirs.com >
 */

var err;

try{
    var b = 1 / c;
} catch(e) {
    err = e;
}

function m() {
    var a = "";
}

var obj = {};
var json = {
    a: [1, 2, 3, true, 'asdf', 'yes'],
    b: Date.now(),
    c: 12,
    d: /asdf\b\d{2,}/,
    e: null,
    f: obj.f,
    g: '爱你一万年',
    h: Math,
    i: function() {},
    j: {anything: 2016},
    k: err,
    l: new function(){}(),
    m: m,
    n: false
};

//console.log(JSON.stringify(true));
//console.log(JSON.stringify('yes'));
//console.log(JSON.stringify(Date.now()));
//console.log(JSON.stringify([123]));
//console.log(JSON.stringify(json, null, 2));
//console.log(JSON.format(json));
console.log(json);
console.log();
for (var i in json) {
    console.log(json[i]);
}
//console.log("asdf");
//console.log(12);
//console.log(true);
//console.log(err);
//console.log(json.a);
//console.log(json.i);

//try{
//    JSON.parse(JSON.format(json));
//} catch(e) {
//    console.warn(e);
//}
//
//try{
//    JSON.parse(JSON.format(json, {compatible: false}));
//} catch(e) {
//    console.error(e);
//}
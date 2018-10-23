let hexToString = function(_hex) {
    var hex = _hex.substr(2);
    var str = '';
    for (var n = 0; n < hex.length; n += 2) {
        str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return str;
}
let stringToHex = function(_str) {
    var hex, i;
    var result = "";
    for (i=0; i<_str.length; i++) {
        hex = _str.charCodeAt(i).toString(16);
        result += ("000"+hex).slice(-4);
    }
    return "0x" + result;
}

var utilities = {
    hexToString: hexToString,
    stringToHex: stringToHex
}
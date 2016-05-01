exports.printLCDDigits = function (input) {
    var LCDTotalDigits = require('../test/fixtures.js');
    var LCDTotalDigit = LCDTotalDigits.loadLCDTotalDigits();
    var main = require('./main.js');
    var LCDArray = main.buildLCDArray(input);
    var expectDigits = main.showLCDDigits(LCDArray,LCDTotalDigit);
    main.printLCDDigits(expectDigits);
};

exports.buildLCDArray = function (input) {

    return input.toString().split('');
};

exports.showLCDDigits = function (LCDArray, LCDTotalDigit) {
    var expectDigits = '';
    for (var i = 0; i < LCDArray.length; i++) {

        expectDigits += '\n' + LCDTotalDigit[i][LCDArray[0]] +
                               LCDTotalDigit[i][LCDArray[1]] +
                               LCDTotalDigit[i][LCDArray[2]];
    }

    return expectDigits;
};
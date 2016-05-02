exports.printLCDDigits = function(input) {
    var LCDTotalDigit = require('../test/fixtures.js');
    var LCDTotalDigits = LCDTotalDigit.loadTotalDigits();
    var main = require('./main.js');
    var LCDArray = main.buildLCDArray(input);
    var expectPrint = main.generateLCDDigits(LCDArray, LCDTotalDigits);
    main.print(expectPrint);
};

exports.buildLCDArray = function (input) {

    return input.toString().split('');
};

exports.generateLCDDigits = function (LCDArray, LCDTotalDigits) {
    var expectLCDDigits = [];
    for (var i = 0; i < LCDArray.length; i++) {
        var LCDDigits = findSameDigits(LCDArray[i], LCDTotalDigits);
        expectLCDDigits.push(LCDDigits);
    }
    return expectLCDDigits;
};

exports.findSameDigits = function (LCDArray, LCDTotalDigits) {
    var sameDigits;

    for (var j = 0; j < LCDTotalDigits.length; j++) {
        if (LCDTotalDigits[j].key === LCDArray) {
            sameDigits = LCDTotalDigits[j];
        }
    }

    return sameDigits;
};

exports.print = function (expectDigits) {
    var firstRow = '\n';
    var secondRow = '\n';
    var thirdRow = '\n';
    for (var i = 0; i < expectDigits.length; i++) {
        firstRow += expectDigits[i].value[0] + ' ';
        secondRow += expectDigits[i].value[1] + ' ';
        thirdRow += expectDigits[i].value[2] + ' ';
    }

    console.log(firstRow + secondRow + thirdRow);
};
module.exports = function toReadable (number) {
    let numArr = [];
    let numArrContainer;
    numberStr = String(number);
    numberArr = numberStr.split('');
    const oneLit = function (unitName) {
        numberArr.join('');
        numberArr = unitName;
    }
    const arrLooper = function (indexArr) {
        switch (numberArr[indexArr]) {
            case '1': 
                oneLit('one');
                return numberArr;
            case '2':
                oneLit('two');
                return numberArr;
            case '3':
                oneLit('three');
                return numberArr;
            case '4':
                oneLit('four');
                return numberArr;
            case '5': 
                oneLit('five');
                return numberArr;
            case '6': 
                oneLit('six');
                return numberArr;
            case '7':
                oneLit('seven');
                return numberArr;
            case '8':
                oneLit('eight');
                return numberArr;
            case '9':
                oneLit('nine');
                return numberArr;
            case '0':
                oneLit('zero');
                return numberArr;
        } 
    }
    const unitAdder = function(y) {
        numArr.push(y);
        numArrContainer = numArr.join(' ');
        return numArrContainer;
    }
    const unitCounter = function (i) {
        switch (number[i]) {
            case '1':
                unitAdder('one')
            case '2':
                unitAdder('two')
            case '3':
                unitAdder('three')
            case '4':
                unitAdder('four')
            case '5':
                unitAdder('five')
            case '6':
                unitAdder('six')
            case '7':
                unitAdder('seven')
            case '8':
                unitAdder('eight')
            case '9':
                unitAdder('nine')
        }
    }
    const decimCouter = function (j) {
        switch (number[j]) {
            case '2':
                numArr.unshift('twenty');
                unitCounter(1);
            case '3':
                numArr.unshift('therty');
                unitCounter(1);
            case '4':
                numArr.unshift('fourty');
                unitCounter(1);
            case '5':
                numArr.unshift('fifthy');
                unitCounter(1);
            case '6':
                numArr.unshift('sixty');
                 unitCounter(1);
            case '7':
                numArr.unshift('seventy');
                unitCounter(1); 
            case '8':
                numArr.unshift('eighty');
                unitCounter(1);
            case '9':
                numArr.unshift('ninety');
                unitCounter(1);
        }
    }
    if (numberArr.length === 1) {
        arrLooper(0);
        return numberArr;
    }
    else if (number.length === 2) {
            switch (number[0]) {
                case '1' && '0':
                    oneLit('ten');
                case '1' && '1':
                    oneLit('eleven');
                case '1' && '2':
                    oneLit('twelve'); 
                case '1' && '3':
                    oneLit('thirteen');
                case '1' && '5':
                    oneLit('fifteen');
                case '2' && '0':
                    oneLit('twenty');
                case '3' && '0':
                    oneLit('thirty');
                }
            decimCouter(0);   
            }
    else if (number.length === 3) {
        if (number[0] === '1' && number[1] === '0' && number[2] === '0') {
            oneLit('one hundered')
        }  
        if (number[0] === '2' && number[1] === '0' && number[2] === '0') {
            oneLit('rwo hundered')
        }  
        if (number[0] === '3' && number[1] === '0' && number[2] === '0') {
            oneLit('three hundered')
        }   
        if (number[0] === '4' && number[1] === '0' && number[2] === '0') {
            oneLit('four hundered')
        }  
        if (number[0] === '5' && number[1] === '0' && number[2] === '0') {
            oneLit('five hundered')
        }  
        if (number[0] === '6' && number[1] === '0' && number[2] === '0') {
            oneLit('six hundered')
        }  
        if (number[0] === '7' && number[1] === '0' && number[2] === '0') {
            oneLit('seven hundered')
        }  
        if (number[0] === '8' && number[1] === '0' && number[2] === '0') {
            oneLit('eight hundered')
        }  
        if (number[0] === '9' && number[1] === '0' && number[2] === '0') {
            oneLit('nine hundered')
        }  
        switch (number[0]) {
            case '1':
                numArr.unshift('one hundered and');
                decimCouter(1);
            case '2':
                numArr.unshift('two hundered and');
                decimCouter(1);
            case '3':
                numArr.unshift('three hundered and');
                decimCouter(1);
            case '4':
                numArr.unshift('four hundered and');
                decimCouter(1);    
            case '5':
                numArr.unshift('five hundered and');
                decimCouter(1);
            case '6':
                numArr.unshift('six hundered and');
                decimCouter(1);
            case '7':
                numArr.unshift('seven hundered and');
                decimCouter(1);
            case '8':
                numArr.unshift('eight hundered and');
                decimCouter(1);    
            case '9':
                numArr.unshift('nine hundered and');
                decimCouter(1);     
            }
        }
    }

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
    }
    const unitCounter = function (i) {
        switch (numberArr[i]) {
            case '1':
                unitAdder('one')
                break;
            case '2':
                unitAdder('two')
                break;
            case '3':
                unitAdder('three')
                break;
            case '4':
                unitAdder('four')
                break;
            case '5':
                unitAdder('five')
                break;
            case '6':
                unitAdder('six')
                break;
            case '7':
                unitAdder('seven');
                break;
            case '8':
                unitAdder('eight');
                break;
            case '9':
                unitAdder('nine')
                break;
        }
    }
    const decimCouter = function (j) {
        if (numberArr[j] === '1' && numberArr[j+1] === '0') {
            numArr.push('ten');
        }else if (numberArr[j] === '1' && numberArr[j+1] === '1') {
            numArr.push('eleven');
        }else if (numberArr[j] === '1' && numberArr[j+1] === '2') {
            numArr.push('twelve');
        }else if (numberArr[j] === '1' && numberArr[j+1] === '3') {
            numArr.push('thirteen');
        }else if (numberArr[j] === '1' && numberArr[j+1] === '4') {
            numArr.push('fourteen');
        }else if (numberArr[j] === '1' && numberArr[j+1] === '5') {
            numArr.push('fifteen');
        }else if (numberArr[j] === '1' && numberArr[j+1] === '6') {
            numArr.push('sixteen');
        }else if (numberArr[j] === '1' && numberArr[j+1] === '7') {
            numArr.push('seventeen');
        }else if (numberArr[j] === '1' && numberArr[j+1] === '8') {
            numArr.push('eighteen');
        }else if (numberArr[j] === '1' && numberArr[j+1] === '9') {
            numArr.push('nineteen');
        }else {
        switch (numberArr[j]) {
            case '2':
                numArr.push('twenty');
                unitCounter(j+1);
                break
            case '3':
                numArr.push('thirty');
                unitCounter(j+1);
                break;
            case '4':
                numArr.push('forty');
                unitCounter(j+1);
                break;
            case '5':
                numArr.push('fifty');
                unitCounter(j+1);
                break;
            case '6':
                numArr.push('sixty');
                 unitCounter(j+1);
                break;
            case '7':
                numArr.push('seventy');
                unitCounter(j+1); 
                break;
            case '8':
                numArr.push('eighty');
                unitCounter(j+1);
                break;
            case '9':
                numArr.push('ninety');
                unitCounter(j+1);
                break;
            case '0':
                unitCounter(2);
                break;
        }
    }
    }
    if (numberArr.length === 1) {
        arrLooper(0);
        return numberArr;
    }
    else if (numberArr.length === 2) {
            decimCouter(0);
            numArrContainer = numArr.join(' ');
            return numArrContainer;   
            }
    else if (numberArr.length === 3) {
        if (numberArr[0] === '1' && numberArr[1] === '0' && numberArr[2] === '0') {
            oneLit('one hundred')
            return numberArr;
        }  
        if (numberArr[0] === '2' && numberArr[1] === '0' && numberArr[2] === '0') {
            oneLit('two hundred')
            return numberArr;
        }  
        if (numberArr[0] === '3' && numberArr[1] === '0' && numberArr[2] === '0') {
            oneLit('three hundred')
            return numberArr;
        }   
        if (numberArr[0] === '4' && numberArr[1] === '0' && numberArr[2] === '0') {
            oneLit('four hundred')
            return numberArr;
        }  
        if (numberArr[0] === '5' && numberArr[1] === '0' && numberArr[2] === '0') {
            oneLit('five hundred')
            return numberArr;
        }  
        if (numberArr[0] === '6' && numberArr[1] === '0' && numberArr[2] === '0') {
            oneLit('six hundred')
            return numberArr;
        }  
        if (numberArr[0] === '7' && numberArr[1] === '0' && numberArr[2] === '0') {
            oneLit('seven hundred')
            return numberArr;
        }  
        if (numberArr[0] === '8' && numberArr[1] === '0' && numberArr[2] === '0') {
            oneLit('eight hundred')
            return numberArr;
        }  
        if (numberArr[0] === '9' && numberArr[1] === '0' && numberArr[2] === '0') {
            oneLit('nine hundred')
            return numberArr;
        }  else switch (numberArr[0]) {
            case '1':
                numArr.push('one hundred');
                decimCouter(1);
                break;
            case '2':
                numArr.unshift('two hundred');
                decimCouter(1);
                break;
            case '3':
                numArr.unshift('three hundred');
                decimCouter(1);
                break;
            case '4':
                numArr.unshift('four hundred');
                decimCouter(1);
                break;    
            case '5':
                numArr.unshift('five hundred');
                decimCouter(1);
                break;
            case '6':
                numArr.unshift('six hundred');
                decimCouter(1);
                break;
            case '7':
                numArr.unshift('seven hundred');
                decimCouter(1);
                break;
            case '8':
                numArr.unshift('eight hundred');
                decimCouter(1);
                break;    
            case '9':
                numArr.unshift('nine hundred');
                decimCouter(1);
                break;     
            }
        numArrContainer = numArr.join(' ')
        return numArrContainer;
    }
}
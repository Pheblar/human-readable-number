module.exports = function toReadable (number) {
    number = String(number);
    number = number.split('');
    if (number.length === 1) {
        if (number[0] === '1') {
            number.join('');
            number = 'one';
            return number;
        }
        if (number[0] === '2') {
            number.join('');
            number = 'two';
            return number;
        }
        if (number[0] === '3') {
            number.join('');
            number = 'tree';
            return number;
        }
        if (number[0] === '4') {
            number.join('');
            number = 'four';
            return number;
        }
        if (number[0] === '5') {
            number.join('');
            number = 'five';
            return number;
        }
        if (number[0] === '6') {
            number.join('');
            number = 'six';
            return number;
        }
        if (number[0] === '7') {
            number.join('');
            number = 'seven';
            return number;
        }
        if (number[0] === '8') {
            number.join('');
            number = 'eight';
            return number;
        }
        if (number[0] === '9') {
            number.join('');
            number = 'nine';
            return number;
        }
        if (number[0] === '0') {
            number.join('');
            number = 'zero';
            return number;
        }
    }
    else if (number.length === 2) {
        let twenty = [];
        if (number[0] === '2') {
               twenty.unshift('twenty');
               if (number[1] === '1') {
                    twenty.push('one');
                    twenty.join('');
                    return twenty;
            }
                if (number[1] === '2') {
                    twenty.push('two');
                    twenty.join('');
                    return twenty;
            }
                if (number[1] === '3') {
                    twenty.push('three');
                    twenty.join('');
                    return twenty;
            }
                if (number[1] === '4') {
                    twenty.push('four');
                    twenty.join('');
                    return twenty;
            }
                if (number[1] === '5') {
                    twenty.push('five');
                    twenty.join('');
                    return twenty;
            }
                if (number[1] === '6') {
                    twenty.push('six');
                    twenty.join('');
                    return twenty;
            }
                if (number[1] === '7') {
                    twenty.push('seven');
                    twenty.join('');
                    return twenty;
            }
                if (number[1] === '8') {
                    twenty.push('eight');
                    twenty.join('');
                    return twenty;
            }
                if (number[1] === '9') {
                    twenty.push('nine');
                    twenty.join('');
                    return twenty;
            }
            } 
        }
    if (number.length === 3) {

    }
}

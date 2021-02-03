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
            number = 'three';
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
        let a;
        if (number[0] === '1' && number[1] === '0') {
            number = 'ten';
            return number;
        }
        if (number[0] === '1' && number[1] === '1') {
            number = 'eleven';
            return number;
        }
        if (number[0] === '1' && number[1] === '2') {
            number = 'twelve';
            return number;
        }
        if (number[0] === '1' && number[1] === '3') {
            number = 'thirteen';
            return number;
        }
        if (number[0] === '1' && number[1] === '5') {
            number = 'fifteen';
            return number;
        }
        if (number[0] === '2' && number[1] === '0') {
            number = 'twenty';
            return number;
        }
        if (number[0] === '3' && number[1] === '0') {
            number = 'thirty';
            return number;
        }
        if (number[0] === '2') {
               twenty.unshift('twenty');
               if (number[1] === '1') {
                    twenty.push('one');
                    a = twenty.join(' ');
                    return a;
            }
                if (number[1] === '2') {
                    twenty.push('two');
                    a = twenty.join(' ');
                    return a;
            }
                if (number[1] === '3') {
                    twenty.push('three');
                    a = twenty.join(' ');
                    return a;
            }
                if (number[1] === '4') {
                    twenty.push('four');
                    a = twenty.join(' ');
                    return a;
            }
                if (number[1] === '5') {
                    twenty.push('five');
                    a = twenty.join(' ');
                    return a;
            }
                if (number[1] === '6') {
                    twenty.push('six');
                    a = twenty.join(' ');
                    return a;
            }
                if (number[1] === '7') {
                    twenty.push('seven');
                    a = twenty.join(' ');
                    return a;
            }
                if (number[1] === '8') {
                    twenty.push('eight');
                    a = twenty.join(' ');
                    return a;
            }
                if (number[1] === '9') {
                    twenty.push('nine');
                    a = twenty.join(' ');
                    return a;
            }
            }
        if (number[0] === '3') {
            twenty.unshift('therty');
                if (number[1] === '1') {
                     twenty.push('one');
                     a = twenty.join(' ');
                     return a;
            }
               if (number[1] === '2') {
                     twenty.push('two');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '3') {
                     twenty.push('three');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '4') {
                     twenty.push('four');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '5') {
                     twenty.push('five');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '6') {
                     twenty.push('six');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '7') {
                     twenty.push('seven');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '8') {
                     twenty.push('eight');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '9') {
                     twenty.push('nine');
                     a = twenty.join(' ');
                     return a;
            }
            }
        if (number[0] === '4') {
            twenty.unshift('fourty');
                if (number[1] === '1') {
                     twenty.push('one');
                     a = twenty.join(' ');
                     return a;
            }
               if (number[1] === '2') {
                     twenty.push('two');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '3') {
                     twenty.push('three');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '4') {
                     twenty.push('four');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '5') {
                     twenty.push('five');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '6') {
                     twenty.push('six');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '7') {
                     twenty.push('seven');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '8') {
                     twenty.push('eight');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '9') {
                     twenty.push('nine');
                     a = twenty.join(' ');
                     return a;
            }
            }
        if (number[0] === '5') {
            twenty.unshift('fifty');
                if (number[1] === '1') {
                     twenty.push('one');
                     a = twenty.join(' ');
                     return a;
            }
               if (number[1] === '2') {
                     twenty.push('two');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '3') {
                     twenty.push('three');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '4') {
                     twenty.push('four');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '5') {
                     twenty.push('five');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '6') {
                     twenty.push('six');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '7') {
                     twenty.push('seven');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '8') {
                     twenty.push('eight');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '9') {
                     twenty.push('nine');
                     a = twenty.join(' ');
                     return a;
            }
            }
        if (number[0] === '6') {
            twenty.unshift('sixty');
                if (number[1] === '1') {
                     twenty.push('one');
                     a = twenty.join(' ');
                     return a;
            }
               if (number[1] === '2') {
                     twenty.push('two');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '3') {
                     twenty.push('three');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '4') {
                     twenty.push('four');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '5') {
                     twenty.push('five');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '6') {
                     twenty.push('six');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '7') {
                     twenty.push('seven');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '8') {
                     twenty.push('eight');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '9') {
                     twenty.push('nine');
                     a = twenty.join(' ');
                     return a;
            }
            } 
        if (number[0] === '7') {
            twenty.unshift('seventy');
                if (number[1] === '1') {
                     twenty.push('one');
                     a = twenty.join(' ');
                     return a;
            }
               if (number[1] === '2') {
                     twenty.push('two');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '3') {
                     twenty.push('three');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '4') {
                     twenty.push('four');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '5') {
                     twenty.push('five');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '6') {
                     twenty.push('six');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '7') {
                     twenty.push('seven');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '8') {
                     twenty.push('eight');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '9') {
                     twenty.push('nine');
                     a = twenty.join(' ');
                     return a;
            }
            }
        if (number[0] === '8') {
            twenty.unshift('eighty');
                if (number[1] === '1') {
                     twenty.push('one');
                     a = twenty.join(' ');
                     return a;
            }
               if (number[1] === '2') {
                     twenty.push('two');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '3') {
                     twenty.push('three');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '4') {
                     twenty.push('four');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '5') {
                     twenty.push('five');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '6') {
                     twenty.push('six');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '7') {
                     twenty.push('seven');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '8') {
                     twenty.push('eight');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '9') {
                     twenty.push('nine');
                     a = twenty.join(' ');
                     return a;
            }
            }
        if (number[0] === '9') {
            twenty.unshift('ninety');
                if (number[1] === '1') {
                     twenty.push('one');
                     a = twenty.join(' ');
                     return a;
            }
               if (number[1] === '2') {
                     twenty.push('two');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '3') {
                     twenty.push('three');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '4') {
                     twenty.push('four');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '5') {
                     twenty.push('five');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '6') {
                     twenty.push('six');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '7') {
                     twenty.push('seven');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '8') {
                     twenty.push('eight');
                     a = twenty.join(' ');
                     return a;
            }
                 if (number[1] === '9') {
                     twenty.push('nine');
                     a = twenty.join(' ');
                     return a;
            }
            }
        }
    if (number.length === 3) {
        let hundered = [];
        let b;
        if (number[0] === '1' && number[1] === '0' && number[2] === '0') {
            number = 'one hundered';
            return number;
        }  
        if (number[0] === '2' && number[1] === '0' && number[2] === '0') {
            number = 'two hundered';
            return number;
        }  
        if (number[0] === '3' && number[1] === '0' && number[2] === '0') {
            number = 'three hundered';
            return number;
        }   
        if (number[0] === '4' && number[1] === '0' && number[2] === '0') {
            number = 'four hundered';
            return number;
        }  
        if (number[0] === '5' && number[1] === '0' && number[2] === '0') {
            number = 'five hundered';
            return number;
        }  
        if (number[0] === '6' && number[1] === '0' && number[2] === '0') {
            number = 'six hundered';
            return number;
        }  
        if (number[0] === '7' && number[1] === '0' && number[2] === '0') {
            number = 'seven hundered';
            return number;
        }  
        if (number[0] === '8' && number[1] === '0' && number[2] === '0') {
            number = 'eight hundered';
            return number;
        }  
        if (number[0] === '9' && number[1] === '0' && number[2] === '0') {
            number = 'nine hundered';
            return number;
        }  
        if (number[0] === '1') {
            hundered.push('one hundered and');
            if (number[1] === '0') {
                
            }
        }
    }
}

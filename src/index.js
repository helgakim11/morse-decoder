const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let morseEncodedChars = [];
    for(let i = 0; i < expr.length; i += 10) {
        let str = expr.slice(i, i + 10); //string
        if (!str.includes("*")) {
            str = Number(str).toString();
            let morseCode = '';
            for (let j = 0; j < str.length; j += 2) {
                let code = str.slice(j, j + 2);
                if(code === '10') {
                    morseCode += '.';
                } else if (code === '11') {
                    morseCode += '-';
                }
            }
            str = MORSE_TABLE[morseCode];
        } else {
            str = ' ';
        }
        morseEncodedChars.push(str);

    }
    return morseEncodedChars.join('');
}

module.exports = {
    decode
}
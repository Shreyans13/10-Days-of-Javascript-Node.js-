'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function vowelsAndConsonants(s) {
    for (var i = 0; i < s.length; i++) {
        var ch = s.charAt(i);
        if (ch == 'u' || ch == 'o' || ch == 'i' || ch == 'e' || ch == 'a') {
            process.stdout.write(ch + "\n");
        }
    }
    for (var j = 0; j < s.length; j++) {
        var c = s.charAt(j);
        if (c != 'u' && c != 'o' && c != 'i' && c != 'e' && c != 'a') {
            process.stdout.write(c + "\n");
        }
    }   
}

function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}

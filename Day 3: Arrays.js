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
function getSecondLargest(nums)
{
    var max = 0;
    var smax = 0; 
    for (var i = 0; i <=nums.length; i++) {
        if (max < nums[i])
            max = nums[i];
    }
    for (var i = 0; i <=nums.length; i++) {
        if (smax < nums[i] && smax < max && nums[i]!=max)
            smax = nums[i]; 
    }
    return smax;
}

function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}

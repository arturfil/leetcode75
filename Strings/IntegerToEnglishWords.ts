const belowTen = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
const belowTwenty = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
const belowHundred = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

export function numberToWords(num: number): string {
    if (num === 0) return 'Zero';
    return helper(num);
}

function helper(num:number):string {
    let result = "";
    
    if(num < 10) result = belowTen[num];
    else if(num < 20) result = belowTwenty[num-10];
    else if(num < 100) result = belowHundred[Math.floor(num/10)] + ' ' + helper(num%10);
    else if(num < 1000) result = belowTen[Math.floor(num/100)] + ' Hundred ' + helper(num % 100);
    else if(num < 10000) result = belowTen[Math.floor(num/1000)] + ' Thousand ' + helper(num % 1000);
    else if(num < 1000000) result = helper(Math.floor(num/1000)) + ' Thousand ' + helper(num%1000);
    else if(num < 1000000000) result = helper(Math.floor(num/1000000)) + ' Million ' + helper(num%1000000);
    else if(num < 1000000000000) result = helper(Math.floor(num/1000000000)) + ' Billion ' + helper(num%1000000000);
         
    return result.trim();    
}

/*
    - I'm going to create a mapping for each number so 1-9
    - A mappin of 10's so 11...12...
    - A mapping of 20-90 twenty...thirty
    - A mappin of 10^n hundred thousand million billion?
    
    We are going to have to get the number by it self and the position that it is at.
    So if it's in the 4th position it's in the thousands, 3 hundreds etc...
*/
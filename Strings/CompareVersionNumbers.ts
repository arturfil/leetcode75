export function compareVersion(version1: string, version2: string): number {
    let verOne = version1.split(".");
    let verTwo = version2.split(".");
    let len = Math.max(verOne.length, verTwo.length);
    
    for(let i = 0; i < len; i++) {
        let num1 = parseInt(verOne[i]) || 0;
        let num2 = parseInt(verTwo[i]) || 0;

        if (num1 === num2) continue;

        return num1 < num2 ? -1 : 1;
    }
    
    return 0;
}
function countBitsDPII(n: number): number[] {
    const dp = new Array(n + 1).fill(0);
    for(let i = 1; i <= n; i++) {
        dp[i] = dp[i & (i - 1) ] + 1
    }
    return dp;
};

export function countBits(n: number): number[] {
    let output = [0];
    for(let i = 1; i <= n; i++) {
        output.push(output[i >> 1] + (i & 1));
    }
    return output;
};

function countBitsAtl(n: number): number[] {
    let ans = [0];
    let i = 1
    while (i <= n) {
        let num = i;
        let count = 0;
        while (num != 0) {
            num = num & (num -1);
            count++;
        }
        ans.push(count);
        i++;
    }
    return ans;
}

function countBitsDP(n: number): number[] {
    const dp = new Array(n + 1).fill(0);
    let offset = 1;

    for(let i = 1; i <= n; i++) {
        if (offset * 2 === i) offset = i;
        dp[i] = 1 + dp[i - offset];
    }
    return dp;
};
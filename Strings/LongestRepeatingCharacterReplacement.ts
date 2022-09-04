export function characterReplacement(s: string, k: number): number {
    let left = 0, max = 0, mostFrequent = 0;
    let freq = new Map<string, number>();

    for (let right = 0; right < s.length; right++) {
        if (freq.has(s[right])) {
            freq.set(s[right], freq.get(s[right])! + 1);
        } else {
            freq.set(s[right], 1);
        }
        mostFrequent = Math.max(mostFrequent, freq.get(s[right])!);
        
        while (right - left + 1 - mostFrequent > k) {
            freq.set(s[left], freq.get(s[left])! - 1);
            left += 1;
        }
        max = Math.max(max, right - left + 1);
    }
    return max;
}

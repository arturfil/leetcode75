function minWindow(s: string, t: string): string {
    const need = new Map<string, number>();
    const window = new Map<string, number>();

    t.split("").forEach(char => need.set(char, need.get(char)! + 1 || 1));
    let left = 0, right = 0, valid = 0, start = 0, len = Number.MAX_VALUE;

    while (right < s.length) {
        const char = s[right++];

        if (need.has(char)) {
            window.set(char, window.get(char)! + 1 || 1);
            if (window.get(char) === need.get(char)) valid += 1;
        }

        while (valid === need.size) {
            if (right - left < len) {
                start = left;
                len = right - left;
            }

            const d = s[left++];
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) valid--;
                window.set(d, window.get(d)! - 1);
            }
        }
    }

    return len === Number.MAX_VALUE ? "" : s.substring(start, start + len);
}
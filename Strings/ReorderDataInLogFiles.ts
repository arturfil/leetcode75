function reorderLogFiles(logs: string[]): string[] {
    const letterLogs:string[] = [];
    const digitLogs:string[] = [];
    
    for (let log of logs) {
        if (/ \d/.test(log)) {
          digitLogs.push(log);
        } else {
          letterLogs.push(log);
        }
    }

    letterLogs.sort((a, b) => {
        const aBody = a.slice(a.indexOf(' ') + 1);
        const bBody = b.slice(b.indexOf(' ') + 1);
        const c = aBody.localeCompare(bBody);
        if (c) return c;
        return a.localeCompare(b);
    });

    return [...letterLogs, ...digitLogs];
  };
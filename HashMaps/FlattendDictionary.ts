function flatten(dict: Object) {
    let res = {}
    helper(dict, "", res);
    return res;
  }
  
function helper(obj:any, suffix: string, ans: any) {
    for (let k in obj) {
        let key;
        if (suffix !== '' && k !== '') {
            key = `${suffix}.${k}`;
        } else if (suffix !== '' && k === '') {
            key = suffix;
        } else {
            key = k;
        }
        
        if (typeof obj[k] === 'object') { 
            helper(obj[k], key, ans);
        } else {
            ans[key] = obj[k];
        }
    }
}

export default flatten;
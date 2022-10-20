/**
 * Time Complexity: O(N * log(N)) where N is the length of P
 * Space Complexity: O(1) excluding output space required for ans
 */

function suggestedProducts(products: string[], searchWord: string): string[][] {
    products.sort()
    let ans = [], left = 0, right = products.length - 1
    for (let i = 0; i < searchWord.length; i++) {
        let c = searchWord.charAt(i), res = []
        while (products[left]?.charAt(i) < c) left++
        while (products[right]?.charAt(i) > c) right--
        for (let j = 0; j < 3 && left + j <= right; j++)
            res.push(products[left+j])
        ans.push(res)
    }
    return ans
};
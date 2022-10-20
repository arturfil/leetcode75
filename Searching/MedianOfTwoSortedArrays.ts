function findMedianSortedArrays(nums1:number[], nums2:number[]) {
    let len = nums1.length + nums2.length;
    let halfFloorPlusOne = Math.floor(len / 2) + 1;
    let even = len % 2 === 0,
        y = 0,
        x = 0,
        last:number | undefined,
        previous:number;
    while(x + y < halfFloorPlusOne) {
        if(typeof last !== 'undefined')  {
            previous = last;
        }
        if(nums1[x] < nums2[y] || y === nums2.length) {
            last = nums1[x];
            x += 1;
        } else {
            last = nums2[y];
            y += 1;
        }
    }
    return even ? (previous! + last!) / 2 : last;
};
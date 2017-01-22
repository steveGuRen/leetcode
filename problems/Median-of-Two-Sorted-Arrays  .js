

/**
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 * 
 * link: https://leetcode.com/problems/longest-palindromic-substring
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var nums3 = [];
    var nums1Length = nums1.length;
    var nums2Length = nums2.length;
    var i =0, j = 0;
    for(; i < nums1Length && j <nums2Length;) {
        if(nums1[i] > nums2[j]) {
            nums3.push(nums2[j]);
            j++;
        } else {
            nums3.push(nums1[i]);
            i++;
        }
    }
    if(i == nums1Length) {
       while(j < nums2Length) {
           nums3.push(nums2[j]);
           j++;
       }
    }
    if(j == nums2Length) {
        while(i < nums1Length) {
            nums3.push(nums1[i]);
            i++;
        }
    }
    if(nums3.length % 2 === 0) {        
        return ((nums3[parseInt(nums3.length / 2)] + nums3[parseInt(nums3.length / 2) - 1])) / 2;
    } else {
        return (nums3[parseInt(nums3.length / 2)]);
    }
};

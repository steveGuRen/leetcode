console.log("test");
var test = "aab";
console.log(test.includes("ac"));
console.log(test.charAt(0));
console.log(test.indexOf("k"));

var str = "";
console.log(str.length);
var lengthOfLongestSubstring = function(s) {
    if(!s || s.length == 0) {
        return "";
    }
    var maxStr = s.charAt(0);
    var long = 1;
    var j = 0;
    for(var i = 1, length = s.length, temLong = 1, tem = maxStr; i <= length - 1;) {
        var index = tem.indexOf(s.charAt(i));        
        if(index == -1) {
            tem = tem + s.charAt(i);
            temLong++;
            i++;
            if(temLong > long) {
                long = temLong;
                maxStr = tem;
            }
        } else {
            temLong = 1;
            j++;
            i = j + 1;
            tem = s.charAt(j);
        }
    }
    return maxStr;
};

console.log(lengthOfLongestSubstring(test));
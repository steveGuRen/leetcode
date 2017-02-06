/**
 * 
 * Reverse digits of an integer.
 * 
 * Example1: x = 123, return 321
 * 
 * Example2: x = -123, return -321
 * 
 * note:
 * 
 *   The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.
 * 
 */
var reverse = function(x) {
    var result = 0;
    
    while(x != 0) {
        result = (result * 10) + (x % 10);
        if(result > 2147483647 || result < -2147483648 ) {
            return 0;
        }
        x = parseInt( x / 10 );
    }
    return result;
};

console.log(reverse(32768));
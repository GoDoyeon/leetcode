/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    // 1부터 n까지 for문을 반복하면서 
    // 1~x, x~n 의 총 합이 같을 경우 x를 리턴
    // 없을 경우 -1을 리턴
    
    const sum = (l, r) => (l + r) * (r - l + 1) / 2   
    // sum : l ~ r 까지의 총 합 구하는 공식
    
    for(let x = 1; x <= n; x++) {
        if(sum(1, x) === sum(x, n)) return x
    }
    return -1
};
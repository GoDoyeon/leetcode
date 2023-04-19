/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    // 연속 3번 이상 지각한적이 없고
    // 2번 미만으로 결석했으면 출석 인정
    // 결석 횟수는 2회 미만이며 연속 3일 이상 지각한 적이 없습니다.
    let Acount = 0
    let LCount = 0
    for(let i = 0; i < s.length; i++) {
        if(s[i] === 'A') {
            Acount++
            LCount = 0
        } else if (s[i] === 'L') {
            LCount++
        } else {
            LCount = 0
        }
        
        if(Acount >= 2 || LCount >= 3) {
            console.log(Acount, LCount)
            return false
        }
    }
    return true
    
};
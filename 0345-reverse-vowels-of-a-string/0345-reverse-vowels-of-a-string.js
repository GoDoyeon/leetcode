/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    // aeiou를 _로 변경해준다
    // 변경해줌과 동시에 배열 a 에 담아준다
    // 배열을 뒤집는다
    // _를 찾아서 뒤집은 배열에 있는 모음을 하나씩 다시 넣어준다
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let input = []
    let string = ''
    
    for(let i = 0; i < s.length; i++) {
        if(vowels.includes(s[i])) {
            input.push(s[i])
            string += '_'
        } else {
            string += s[i]
        }
    }
    input.reverse()
    
    input.forEach((item) => {
        string = string.replace('_', item)
    })
    
    return string
};
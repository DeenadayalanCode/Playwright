// validate 2 string is Anagram
let a: string = 'listen';
let b: string = 'silent';

function isAnagram(a: string, b: string) {
    const first = a.toLowerCase().replace(/\s+/g,'').split('').sort().join('');
    const Second = b.toLowerCase().replace(/\s+/g,'').split('').sort().join('');
    return first === Second;
}
console.log(isAnagram('listen','silent'))
console.log(isAnagram('Listen','Silent'))
console.log(isAnagram('conversation','voices rant on'))
console.log(isAnagram('hello','world'))
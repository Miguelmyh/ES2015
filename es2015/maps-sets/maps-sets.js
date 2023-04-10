new Set([1, 1, 2, 2, 3, 4])//[1,2,3,4]
[...new Set("referee")].join("")///[referee]

let m = new Map();
m.set([1, 2, 3], true);//{arr: true}
m.set([1, 2, 3], false);///{arr: false}

const hasDuplicate = arr => new Set(arr).size !== arr.length;

const isVowel = char => {
    let vowels ='aeiou';
    return vowels.includes(char);
}

const vowelCount = str => {
    const map = new Map();

    for(let char of str){
        let lowerChar = char.toLowerCase();
        if(isVowel(lowerChar)){
            if(map.has(lowerChar)){
                map.set(lowerChar, map.get(lowerChar) + 1);
            } else{
                map.set(lowerChar, 1);
            }
        }
    }
    return map;
}
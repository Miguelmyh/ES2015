function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function (num) {
        return num % 2 === 0
    });
}

const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

// const findMin2 = (...numbers) => numbers.reduce((sum, num) => sum < num ? sum : num);///
const findMin = (...numbers) => Math.min(...numbers);

const mergeObjects = (obj1, obj2) => ({
    ...obj1,
    ...obj2
}); 

const doubleAndReturnArgs = (arr, ...nums) => [...arr, ...nums.map(num => num * 2)];

const removeRandom = items => {
    let i = Math.floor(Math.random * items.length);
    return [...items.splice(0,i), ...items.splice(i + 1)];
}

const extend = (arr1, arr2) => [...arr1, ...arr2];

const addKeyVal = (obj, key, val) => {
   return ({...obj, [key]:val});
}///addKeyVal({0:'a'}, 1, 'b'); 
//{"0":"a","1":"b"}

const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key]
    return newObj;
}///removeKey({0:'a', 1:'b'}, 1);
///{"0":"a"}

const combine = (obj1, obj2) => ({...obj1, ...obj2});

const update = (obj, key, val) => ({...obj, [key]:val});

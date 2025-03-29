const makeArray = (firstArray, secondArray, maxLength) => {
    const result = [];
    const totalArray = firstArray.concat(secondArray);
    const totalLength = firstArray.length + secondArray.length;

    if(totalLength > maxLength) {
        return totalArray.slice(0, maxLength);
    } else {
        return totalArray
    }

    return result;
};

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); 
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));
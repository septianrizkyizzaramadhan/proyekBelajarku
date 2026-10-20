const angkaList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const total = angkaList.reduce((totalAngka, item) => {
    return totalAngka + item;
}, 0)

console.log(total)
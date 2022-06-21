//Hw1
const arr = [1, 1, 2, 2, 3];

Array.prototype.getUnique = function () {
    const resultArr = [];
    for (let elem of this) {
        if (!resultArr.includes(elem)) {
            resultArr.push(elem);
        }
    }
    return resultArr;
}

const newArr = arr.getUnique();
console.log(newArr);

//Hw2

const obj = { a: 1, b: 2, c: 3, d: false, e: 0 };

Object.prototype.getKeySum = function () {
    const arrValues = (Object.values(this)).filter(elem => !!elem == true);
    return arrValues.reduce((sum, num) => sum + num);
}

const sum = obj.getKeySum();
console.log(sum);

Object.prototype.reversKey = function () {
    let arr = Object.entries(this);
    for (let property in this) {
        delete this[property];
    }
    arr.forEach(([key, value]) => {
        this[value] = key
    })
    return this;
}

const newObj = obj.reversKey();
console.log(newObj);

//Hw3
let colors = ['red', 'orange', 'purple', 'blue', 'green'];
let holder = document.querySelector('.holder');

for (let i = 1, j = 0; i < 6, j < colors.length; i++, j++) {
    let item = document.createElement('div');
    item.className = 'item';
    item.innerHTML = i;
    item.style.background = colors[j];
    holder.appendChild(item);
}

let items = Array.from(document.querySelectorAll('.item'));


// function data(array) {
//     let max = array[0];
//     for (const num of array) {
//         if (max < num) max = num;
//     }
//     return max;
// }
// console.log(data([1, 2, 6, 50, 5, 25]));

function sum(array) {
    let total = 0;
    for (const num of array) {
        total += num;
    }
    return total;
}

function avg(array) {
    return sum(array) / array.length;
}

function isPeak(array) {
    for (i = 0; i < array.length; i++) {
        if (i === 0) {
            console.log(array[i]);
        } else if (i === array.length - 1) {
            console.log(array[i]);
        } else if (array[i] > array[i + 1] && array[i] > array[i - 1]) {
            console.log(array[i]);
        }
    }
}

// isPeak([1, 7, 5, 4, 5, 6, 4, 2]);

function random() {
    const data = [];
    for (i = 0; i < 100; i++) {
        data.push(Math.random() * 100 + 1);
    }
    return data;
}

console.log(random());

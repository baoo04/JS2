// Bài 1
const objects = [
    {
        number: 45,
    },
    {
        number: 4,
    },
    {
        number: 9,
    },
    {
        number: 16,
    },
    {
        number: 25,
    },
    {
        number: 16,
    },
    {
        number: 24,
    },
];

console.log("BAI 1");
var arr = objects.filter(function(item){
    return item.number > 20;
});

var res = arr.map(function(item){
    return item.number;
});
console.log(res);

let sum = objects.reduce((sum, item) => sum + item.number, 0);
console.log(sum);

// Bài 2
function formatMoney(value) {
    if (value < 0) {
        return 0;
    } else {
        return value.toLocaleString("en-US");
    }
}
console.log("BAI 2");
console.log(formatMoney(100000000));

//Bài 3
function sevenBoom(arr) {
    let ok = 0;
    arr.forEach(function (item) {
        if (item === 7) {
            ok = 1;
        }
    });
    return ok == 1 ? "BOOM" : "there is no 7 in the array";
}
console.log("BAI 3");
console.log(sevenBoom([32, 14, 54, 109, 60]));
console.log(sevenBoom([32, 14, 7, 109, 60]));

// Bài 4
function reverseWords(str) {
    let arr = str.trim().split(/\s+/);
    let res = "";
    for (let i = arr.length - 1; i >= 0; i--) {
        res += arr[i];
        res += " ";
    }
    return res;
}

console.log("BAI 4");
console.log(reverseWords("Manchester Is     BLUE "));

// Bài 5
function getLength(arr) {
    let cnt = 0;
    function countItems(item) {
        if (Array.isArray(item)) {
            item.forEach(countItems);
        } else {
            ++cnt;
        }
    }
    countItems(arr);
    return cnt;
}

console.log("BAI 5");
console.log(getLength([1, [2, [3, 4]]]));

// Bài 8
function checkPanDigital(value) {
    let tmp = String(value);
    let str = "0123456789";
    for (let char of str) {
        if (!tmp.includes(char)) {
            return false;
        }
    }
    return true;
}

console.log("BAI 8");
console.log(checkPanDigital(11212421459));
console.log(checkPanDigital(1203456789));

// Bài 9
function howUnlucky(year) {
    let cnt = 0;
    for (let month = 0; month < 12; month++) {
        const date = new Date(year, month, 13);
        if (date.getDay() === 5) {
            ++cnt;
        }
    }
    return cnt;
}

console.log("BAI 9");
console.log(howUnlucky(2020));

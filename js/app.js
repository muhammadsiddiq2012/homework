
// if else
// if(shart){
//     console.log();
// } else {
//     console.log();
// }

// agar bugun havo yomg'irli bo'lsa soyabon oling aks holda shart emas
// let weather = prompt("Bugun havo qanday?");
// if (weather === "yomg'ir") {
//     console.log("Soyabon oling");
// } else {
//     console.log("Shart emas");
// }

// let a = 5;
// let b = "5";
// console.log(a == b); //true
// console.log(a === b); //false

// Agar foydalanuvchi 18 yosh va undan yuqori bo'lsa energetik mumkin aks holda katta bo'lses ich
// let userAge = Number(prompt("Yoshingizni kiriting"));
// console.log(userAge);
// if (userAge >= 18) {
//     console.log("Energetik mumkin");
// } else {
//     console.log("Katta bo'lsiz ichmang");
// }

//1-misol
// Foydalanuvchi kiritgan son musbat yoki manfiyligini aniqlang
// let number = Number(prompt("Istalgan son kiriting"));
// if (number > 0) {
//     console.log(number + " musbat son");
// } else {
//     console.log(number + " manfiy son");
// }

//2-misol
// Foydalanuvchi kiritgan son juft yoki toqligini aniqlang
// let num = Number(prompt("Son kiriting"));
// if (num % 2 === 0) {
//     console.log("Juft son");
// } else {
//     console.log("Toq son");
// }

//3-misol
// Sizga 3ta son beriladi va eng kattasini konsolga chiqaring
let a = Number(prompt("A sonini kiriting"));
let b = Number(prompt("B sonini kiriting"));
let c = Number(prompt("C sonini kiriting"));

if (a > b && a > c) {
    console.log("Eng katta son A");
} else if (b > a && b > c) {
    console.log("Eng katta son B");
} else if (c > a && c > b) {
    console.log("Eng katta son C");
} else {
    console.log("Sonlar orasida tenglik mavjud");
}


//4-misol

let ball4 = Number(prompt("Ballni kiriting"));

if (ball4 >= 90 && ball4 <= 100) {
    console.log("Alo");
} else if (ball4 >= 80 && ball4 < 90) {
    console.log("Yaxshi");
} else if (ball4 >= 70 && ball4 < 80) {
    console.log("Qoniqarli");
} else if (ball4 >= 0 && ball4 < 70) {
    console.log("Qoniqarsiz");
} else {
    console.log("Ball notogri");
}


//5-misol

let summa5 = Number(prompt("Xarid summasini kiriting"));

if (summa5 > 100000) {
    summa5 = summa5 - summa5 * 10 / 100;
} else if (summa5 >= 50000) {
    summa5 = summa5 - summa5 * 5 / 100;
}

console.log("Yakuniy summa " + summa5);


//6-misol

let yil6 = Number(prompt("Tugilgan yilingizni kiriting"));
let yosh6 = 2026 - yil6;

console.log("Yoshingiz " + yosh6);

if (yosh6 < 18) {
    console.log("Voyaga yetmagansiz");
} else {
    console.log("Voyaga yetgansiz");
}


//7-misol

let login7 = prompt("Loginni kiriting");
let parol7 = prompt("Parolni kiriting");

if (login7 === "admin" && parol7 === "1234") {
    console.log("Xush kelibsiz");
} else {
    console.log("Login yoki parol notogri");
}


//8-misol

let harorat8 = Number(prompt("Haroratni kiriting"));

if (harorat8 < 0) {
    console.log("Muzlik");
} else if (harorat8 <= 30) {
    console.log("Yoqimli harorat");
} else {
    console.log("Juda issiq");
}


//9-misol

let soat9 = Number(prompt("Soatni kiriting"));

if (soat9 >= 6 && soat9 < 12) {
    console.log("Ertalab");
} else if (soat9 >= 12 && soat9 < 18) {
    console.log("Kunduz");
} else if (soat9 >= 18 && soat9 < 24) {
    console.log("Kechasi");
} else if (soat9 >= 0 && soat9 < 6) {
    console.log("Kechasi");
} else {
    console.log("Soat noto'g'ri");
}


//10-misol

let oy10 = Number(prompt("Oy raqamini kiriting"));

switch (oy10) {
    case 12:
    case 1:
    case 2:
        console.log("Qish");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Bahor");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Yoz");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Kuz");
        break;
    default:
        console.log("Oy noto'g'ri");
}


//11-misol

let day11 = Number(prompt("Hafta kunini kiriting"));

switch (day11) {
    case 1:
        console.log("Dushanba");
        break;
    case 2:
        console.log("Seshanba");
        break;
    case 3:
        console.log("Chorshanba");
        break;
    case 4:
        console.log("Payshanba");
        break;
    case 5:
        console.log("Juma");
        break;
    case 6:
        console.log("Shanba");
        break;
    case 7:
        console.log("Yakshanba");
        break;
    default:
        console.log("Kun noto'g'ri");
}


//12-misol

let miqdor12 = Number(prompt("Mahsulot sonini kiriting"));
let narx12;

if (miqdor12 < 10) {
    narx12 = 500;
} else {
    narx12 = 450;
}

console.log("Bitta mahsulot " + narx12 + " so'm");
console.log("Jami " + miqdor12 * narx12 + " so'm");


//13-misol

let fasl13 = prompt("Faslni kiriting");

switch (fasl13.toLowerCase()) {
    case "qish":
        console.log("Sovuq issiq kiying");
        break;
    case "bahor":
        console.log("Ob-havo o'zgaruvchan ehtiyot bo'ling");
        break;
    case "yoz":
        console.log("Issiq salqinlik ko'proq iching");
        break;
    case "kuz":
        console.log("Sovuq kunlarga tayyor turing");
        break;
    default:
        console.log("Fasl noto'g'ri");
}


//14-misol

let ball14 = Number(prompt("O'yin ballini kiriting"));

if (ball14 < 50) {
    console.log("Bonus yo'q");
} else if (ball14 <= 100) {
    console.log("10 bonus ball");
    console.log("Jami " + (ball14 + 10));
} else {
    console.log("20 bonus ball");
    console.log("Jami " + (ball14 + 20));
}


//15-misol

let son15 = Number(prompt("Son kiriting"));

if (son15 % 5 === 0 && son15 % 3 === 0) {
    console.log("5 ga va 3 ga bo'linadi");
} else {
    console.log("Bo'linmaydi");
}


//16-misol

let tezlik16 = Number(prompt("Avtomobil tezligini kiriting"));

if (tezlik16 < 60) {
    console.log("Tezlik me'yorda");
} else if (tezlik16 <= 80) {
    console.log("Ogohlantirish");
} else {
    console.log("Jarima");
}


//17-misol

let daromad17 = Number(prompt("Oylik daromadni kiriting"));
let xarajat17 = Number(prompt("Oylik xarajatni kiriting"));

if (xarajat17 < daromad17) {
    console.log("Tejamkorlik");
} else if (xarajat17 === daromad17) {
    console.log("Barqaror");
} else {
    console.log("Ortiqcha sarf-xarajat");
}


//18-misol

let narx18 = Number(prompt("Mahsulot narxini kiriting"));
console.log(narx18);


//19-misol

let son19 = Number(prompt("Butun son kiriting"));

if (son19 > 0) {
    son19++;
}

console.log(son19);


//20-misol

let son20 = Number(prompt("Butun son kiriting"));

if (son20 > 0) {
    son20++;
} else {
    son20 = son20 - 2;
}

console.log(son20);


//21-misol

let son21 = Number(prompt("Butun son kiriting"));

if (son21 > 0) {
    son21++;
} else if (son21 < 0) {
    son21 = son21 - 2;
} else {
    son21 = 10;
}

console.log(son21);


//22-misol

let a22 = Number(prompt("A sonini kiriting"));
let b22 = Number(prompt("B sonini kiriting"));
let c22 = Number(prompt("C sonini kiriting"));
let musbat22 = 0;

if (a22 > 0) {
    musbat22++;
}

if (b22 > 0) {
    musbat22++;
}

if (c22 > 0) {
    musbat22++;
}

console.log(musbat22);


//23-misol

let a23 = Number(prompt("A sonini kiriting"));
let b23 = Number(prompt("B sonini kiriting"));
let c23 = Number(prompt("C sonini kiriting"));
let manfiy23 = 0;

if (a23 < 0) {
    manfiy23++;
}

if (b23 < 0) {
    manfiy23++;
}

if (c23 < 0) {
    manfiy23++;
}

console.log(manfiy23);


//24-misol

let a24 = Number(prompt("A sonini kiriting"));
let b24 = Number(prompt("B sonini kiriting"));

if (a24 > b24) {
    console.log(a24);
} else {
    console.log(b24);
}


//25-misol

let a25 = Number(prompt("A sonini kiriting"));
let b25 = Number(prompt("B sonini kiriting"));

if (a25 < b25) {
    console.log(a25);
} else {
    console.log(b25);
}


//26-misol

let a26 = Number(prompt("A sonini kiriting"));
let b26 = Number(prompt("B sonini kiriting"));

if (a26 < b26) {
    let temp26 = a26;
    a26 = b26;
    b26 = temp26;
}

console.log(a26);
console.log(b26);


//27-misol

let a27 = Number(prompt("A sonini kiriting"));
let b27 = Number(prompt("B sonini kiriting"));

if (a27 > b27) {
    let temp27 = a27;
    a27 = b27;
    b27 = temp27;
}

console.log(a27);
console.log(b27);


//28-misol

let a28 = Number(prompt("A sonini kiriting"));
let b28 = Number(prompt("B sonini kiriting"));

if (a28 !== b28) {
    let yigindi28 = a28 + b28;
    a28 = yigindi28;
    b28 = yigindi28;
} else {
    a28 = 0;
    b28 = 0;
}

console.log(a28);
console.log(b28);


//29-misol

let a29 = Number(prompt("A sonini kiriting"));
let b29 = Number(prompt("B sonini kiriting"));

if (a29 !== b29) {
    if (a29 > b29) {
        b29 = a29;
    } else {
        a29 = b29;
    }
} else {
    a29 = 0;
    b29 = 0;
}

console.log(a29);
console.log(b29);


//30-misol

let a30 = Number(prompt("A sonini kiriting"));
let b30 = Number(prompt("B sonini kiriting"));
let c30 = Number(prompt("C sonini kiriting"));
let kichik30 = a30;

if (b30 < kichik30) {
    kichik30 = b30;
}

if (c30 < kichik30) {
    kichik30 = c30;
}

console.log(kichik30);


//31-misol

let a31 = Number(prompt("A sonini kiriting"));
let b31 = Number(prompt("B sonini kiriting"));
let c31 = Number(prompt("C sonini kiriting"));

if ((a31 >= b31 && a31 <= c31) ||
    (a31 <= b31 && a31 >= c31)) {
    console.log(a31);
} else if ((b31 >= a31 && b31 <= c31) ||
           (b31 <= a31 && b31 >= c31)) {
    console.log(b31);
} else {
    console.log(c31);
}


//32-misol

let yigindi32 = 0;

for (let i32 = 1; i32 <= 100; i32++) {
    if (i32 % 2 !== 0) {
        yigindi32 = yigindi32 + i32;
    }
}

console.log(yigindi32);


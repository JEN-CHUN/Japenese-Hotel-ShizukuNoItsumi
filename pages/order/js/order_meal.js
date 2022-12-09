// All Minus and Plus Add Number
let minusIcon = document.querySelectorAll(".number-selector__count__minus");
let plusIcon = document.querySelectorAll(".number-selector__count__plus");
let NumberIcon = document.querySelectorAll(".number-selector__count__number");

let breakfast = document.querySelector("#breakfast");
let lunch = document.querySelector("#lunch");
let dinner = document.querySelector("#dinner");

// Minus Button
for (let i = 0; i < minusIcon.length; i++) {
  minusIcon[i].addEventListener("click", (event) => {
    NumberIcon[i].value -= 1;
    if (NumberIcon[i].value <= 0) {
      NumberIcon[i].value = 0;
    }
    localStorage.setItem("breakfast", breakfast.value);
    localStorage.setItem("lunch", lunch.value);
    localStorage.setItem("dinner", dinner.value);
  });
}

//Plus Button
for (let i = 0; i < plusIcon.length; i++) {
  plusIcon[i].addEventListener("click", (event) => {
    NumberIcon[i].value -= -1;
    if (NumberIcon[i].value >= 30) {
      NumberIcon[i].value = 30;
    }
    localStorage.setItem("breakfast", breakfast.value);
    localStorage.setItem("lunch", lunch.value);
    localStorage.setItem("dinner", dinner.value);
  });
}

// Number Limited
for (let i = 0; i < NumberIcon.length; i++) {
  NumberIcon[i].addEventListener("keyup", (event) => {
    if (NumberIcon[i].value < 0) {
      NumberIcon[i].value = 0;
      // console.log(123);
    }
    if (NumberIcon[i].value > 30) {
      NumberIcon[i].value = 30;
      // console.log(123);
    }
    if (!Number.isInteger(NumberIcon[i].value)) {
      NumberIcon[i].value = Math.floor(NumberIcon[i].value);
    }
    localStorage.setItem("breakfast", breakfast.value);
    localStorage.setItem("lunch", lunch.value);
    localStorage.setItem("dinner", dinner.value);
  });
}

// People Number Litmited

// for (let i = 0; i < peopleNumber.length; i++) {
//   peopleNumber[i].addEventListener("change", (event) => {
// if (peopleNumber[i].value > 15) {
//   peopleNumber[i].value = 15;
//   // console.log(123);
// }
//     for (let i = 0; i < peopleNumber.length; i++) {
//       if (peopleNumber[i].value >= 15) {
//         peopleGroup[i].value = 15;
//       }
//     }
//   });
// }

// submitBtn.addEventListener("click", (event) => {});

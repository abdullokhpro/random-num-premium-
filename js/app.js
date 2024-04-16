const tel = document.querySelector(".tel");
const button = document.querySelector(".btn");
const model = document.querySelector(".model");
const addBtn = document.querySelector("#model__btn");
const cancelBtn = document.querySelector(".model__cancel");
const numberList = document.querySelector(".number__list");
const modelInput = document.querySelector(".model__input");
const inputValue = modelInput.value;

const NUMBER__LIST = JSON.parse(localStorage.getItem("numbers")) || [
  "+998 99 804 95 50",
  "+998 98 777 77 77",
  "+998 97 666 66 66",
  "+998 96 555 55 55",
  "998 95 444 44 44",
  "998 94 333 33 33",
  "+998 93 222 22 22",
  "+998 92 010 01 00",
  "998 91 000 00 00",
];

button.addEventListener("click", () => {
  button.setAttribute("disabled", true);
  let interval = setInterval(() => {
    let randomNumber = Math.floor(Math.random() * NUMBER__LIST.length);
    tel.innerHTML = NUMBER__LIST[randomNumber];
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    button.removeAttribute("disabled");
  }, 2000);
});

function createItem(data) {
  //   while (numberList.firstChild) {
  //     numberList.firstChild.removeChild();
  //   }

  let fragment = document.createDocumentFragment();

  data.forEach((el) => {
    let li = document.createElement("li");
    li.innerHTML = el;
    fragment.appendChild(li);
  });

  numberList.appendChild(fragment);
}

createItem(NUMBER__LIST);

addBtn.addEventListener("click", () => {
  function showModel() {
    model.classList.toggle("show");
  }

  showModel(); // Call the showModel function when the button is clicked
});

cancelBtn.addEventListener("click", () => {
  function hideModel() {
    model.classList.toggle("show");
  }

  hideModel();
});

model.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let newNumber = modelInput.value;

  if (newNumber.length > 6) {
    NUMBER__LIST.push(newNumber);
    localStorage.setItem("numbers", JSON.stringify(NUMBER__LIST));

    const item = document.createElement("li");
    item.className = "item";
    let num1 = modelInput.value.slice(0, 4);
    let num2 = modelInput.value.slice(4, 6);
    let num3 = modelInput.value.slice(6, 9);
    let num4 = modelInput.value.slice(9, 13);

    let num = `${num1} ${num2} ${num3} ${num4}`;
    item.innerHTML = `${modelInput.value}`;

    numberList.appendChild(item);
    item.innerHTML = num;

    modelInput.value = "";
  } else {
    alert("raqam minimum 6 ta bolish kerak");
  }
});

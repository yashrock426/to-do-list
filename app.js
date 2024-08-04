let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
  if (inp.value != "") {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("del");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
  } else {
    console.log("add in list is mandatory");
  }
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItems = event.target.parentElement;
    listItems.remove();
  }
});

// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//   delBtn.addEventListener("click", function () {
//     let par = this.parentElement;

//     par.remove();
//   });
// }

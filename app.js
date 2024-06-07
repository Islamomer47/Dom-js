var favfruits = [
  "blue.jpg",
  "bnana.jpg",
  "orange.jpg",
  "kiwi.jpg",
  "apple.jpg",
];
let ul = document.createElement("ul");

for (i = 0; i < favfruits.length; i++) {
  let li = document.createElement("li");
  let image = document.createElement("img");

  image.setAttribute("src", favfruits[i]);

  li.appendChild(image);
  ul.appendChild(li);
  document.getElementById("fruit-list").appendChild(ul);
}

// Q2
var favfruit = ["blueberry", "bnana", "orange", "kiwi", "apple"];
var input = prompt("please enter the name of the fruit :");

function indexreturn(favfruit, input) {
  for (i = 0; i < favfruit.length; i++) {
    if (input == favfruit[i]) {
      return i;
    }
  }
  return -1;
}
console.log(indexreturn(favfruit, input));

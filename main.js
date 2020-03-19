//querySelector selects a single element... //classes, ids, tagNames, etc. And returns first element that matches query.

//1st grab color from pallete
//2nd assign color to brush

const color = document.querySelector(".color-1"); // grabbing html .color-1
const bruSH = document.querySelector(".current-brush");
const lightblue = () => {
  //this func is adding lightblue(color-1 to brush) and removing (color-2) from brush.
  bruSH.classList.remove(bruSH.classList[1]);
  bruSH.classList.add(color.classList[1]); // 0 = palette-color // 1 = color-1
};
color.addEventListener("mouseover", lightblue);

const color2 = document.querySelector(".color-2");
const orange = () => {
  bruSH.classList.add(color2.classList[1]);
  bruSH.classList.remove(bruSH.classList[1]);
};
color2.addEventListener("mouseover", orange);

const color3 = document.querySelector(".color-3");
const lightgreen = () => {
  bruSH.classList.add(color3.classList[1]);
  bruSH.classList.remove(bruSH.classList[1]);
};
color3.addEventListener("mouseover", lightgreen);

const color4 = document.querySelector(".color-4");
const yellow = () => {
  bruSH.classList.add(color4.classList[1]);
  bruSH.classList.remove(bruSH.classList[1]);
};
color4.addEventListener("mouseover", yellow);

const color5 = document.querySelector(".color-5");
const white = () => {
  bruSH.classList.remove(bruSH.classList[1]);
  bruSH.classList.add(color5.classList[1]);
};
color5.addEventListener("mouseover", white);



const sameSizeSquares = document.querySelectorAll(".square")
const allSquares = (event) => {
  event.target.classList.remove(event.target.classList[1]);//removing color thats there 
  event.target.classList.add(bruSH.classList[1]);//adding whatever color my brush is
};
for (const clicks of sameSizeSquares) {//loops through squares one by one with my listener
  clicks.addEventListener("mouseover", allSquares);
}

/*const color1 = document.querySelector();

('mouseover', )



('click', orange)*/

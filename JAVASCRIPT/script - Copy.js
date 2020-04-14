let timeStart = new Date();
let getDate = document.querySelector(".todayDate");
getDate.textContent += timeStart;
let timeThen = timeStart.getMilliseconds();
let main = document.querySelector(".main");
let someShape = document.querySelector(".someShape");

main.addEventListener("click", () => {
  someShape.style.width = `${Math.floor(Math.random() * 201 + 5)}`;
  someShape.style.height = `${Math.floor(Math.random() * 201 + 5)}`;
  someShape.style.borderRadius = `${Math.floor(Math.random() * 201 + 5)}`;
});

const changeColor = () => {
  let color = "#";
  let hex = "abcdef0123456789";
  for (i = 0; i < 6; i++) {
    color += `${Math.floor(Math.random() * hex.length)}`;
  }
  return color;
};

const text = "Hello, I'm Puckanut";
const introElement = document.getElementById("intro-text");
const text2 = ["I'm a computer engineering and digital technology student", 
  "From Chulalongkorn University","Welcome to my portfolio",
  "I'm passionate about web development",
  "I love solving problems with code"]

let index = 0;
let currentindex = 0;

function typeText() {
  if (index < text.length) {
    introElement.innerHTML += text.charAt(index); // เพิ่มตัวอักษรทีละตัว
    index++;
    setTimeout(typeText, 200); // ปรับความเร็วได้ (100ms ต่อ 1 ตัวอักษร)
  }
}
function changeText(){
  const studentElement = document.getElementById("student-text");
  studentElement.textContent = text2[currentindex]
  currentindex = (currentindex + 1) % text2.length;
  setTimeout(changeText,3000);
}

typeText();
changeText();

document.getElementById("view-button").addEventListener("click", function () {
  window.open("https://game2048-ed4d1.web.app", "_blank");
});
document.getElementById("view-button2").addEventListener("click", function () {
  window.open("https://puz91.github.io/index.html/", "_blank");
});
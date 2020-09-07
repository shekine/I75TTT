const copyright = document.getElementById("copyright");

let date = new Date();
let year = date.getFullYear();

copyright.innerHTML = `Copyright &copy ${year}`;

console.log("hi!");

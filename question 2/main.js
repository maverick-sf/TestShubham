const element = document.getElementById("button");
element.addEventListener("click", myfunction)

function myfunction() {
    let val = document.getElementsByClassName("text-center");
    let last = val[val.length - 1]
    let next = last.innerText
    let secondLast = val[val.length - 2]
    secondLast.append(`${next}`);
    last.remove();
}
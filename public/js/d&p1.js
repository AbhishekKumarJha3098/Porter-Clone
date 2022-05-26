// function onReg(e) {

//     e.preventDefault()

//     let myName = document.getElementById("name")

//     let myNameValue = myName.value

//     console.log(myNameValue)

//     if (localStorage.getItem("users") === null) {
//         localStorage.setItem("users", JSON.stringify([]));
//     }

//     let user = {
//         NAME: myNameValue,

//     };
//     console.log(user)

//     let arr = JSON.parse(localStorage.getItem("users"))

//     arr.push(user);

//     localStorage.setItem("users", JSON.stringify(arr));

//     let thankYou = document.getElementById("inlinedp001")
//     thankYou.innerHTML = null;
//     let div1 = document.createElement("div")
//     div1.textContent = "THANK YOU FOR REGISTRATION"

//     let div2 = document.createElement("div")
//     div2.textContent = "We will get back to you shortly"
//     let div3 = document.createElement("div")
//     div3.textContent = "REGISTER MORE"
//     div3.addEventListener("click", function () {
//         location.reload()
//     })


//     let mynews = JSON.parse(localStorage.getItem("users"))
//     let clicked = mynews[mynews.length - 1]
//     let title = document.createElement("div")
//     title.textContent = clicked.NAME


//     div1.setAttribute("class", "thank")
//     title.setAttribute("class", "vals")
//     div2.setAttribute("class", "getback")
//     div3.setAttribute("class", "Regis")

//     thankYou.append(div1, title, div2, div3)


// }
function sumbitForm() {
    document.getElementById("form01").style.display = "none"
    document.getElementById("hide01").style.display = "block"

}
document.getElementById("form01").addEventListener("submit", function (event) {
    event.preventDefault()
});
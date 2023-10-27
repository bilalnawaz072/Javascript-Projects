let form = document.getElementById("age-form");
let date = document.getElementById("date");
let result = document.getElementById("result");
let calculate = document.getElementById("calculate");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let age = date.value;
    if (age === "") {
        result.innerHTML = "Please enter a date";
    }
    else {
        let today = new Date();
        let birth = new Date(age);
        let years = today.getFullYear() - birth.getFullYear();
        let months = today.getMonth() - birth.getMonth();
        let days = today.getDate() - birth.getDate();
        if (months < 0 || (months === 0 && days < 0)) {
            years--;
        }
        result.innerHTML = `You are ${years} years, ${months} months and ${days} days old.`
    }
})
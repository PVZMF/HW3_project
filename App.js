
function ansFunc1() {
    let answer = document.getElementById("Question__EnterAnswer1")
    let text = document.getElementById("answer1")
    text.innerHTML = Math.floor(Math.sqrt(answer.value)) + 1;
}

function ansFunc2() {
    let answer = document.getElementById("Question__EnterAnswer2").value
    let text = document.getElementById("answer2")
    let rem = Math.floor(answer / 2);
    let listrem = 0;
    while (rem > 0) {
        if (answer % rem == 0) {
            listrem += rem;
        }
        rem -= 1;
    }
    if ((listrem) == answer) {
        text.innerHTML = "yes";
    }
    else text.innerHTML = "No";
}

function ansFunc3() {
    let num1 = document.getElementById("Question__EnterAnswer3_1").value
    let num2 = document.getElementById("Question__EnterAnswer3_2").value
    let num3 = document.getElementById("Question__EnterAnswer3_3").value
    let text = document.getElementById("answer3")
    Districts = [num1, num2, num3]
    let maxnum = Math.max(num1, num2, num3);
    let total = 0;
    for (let i = 0; i < 3; i++) {
        if (Districts[i] < maxnum) total += Districts[i] ** 2;
    }

    text.innerHTML = maxnum ** 2 == total ? "yes" : "No";
}

function ansFunc4() {
    let firstname = document.getElementById("fname").value
    let lastname = document.getElementById("lname").value
    let email = document.getElementById("email").value
    let age = document.getElementById("age").value
    let tel = document.getElementById("tel").value
    let text = document.getElementById("answer4")

    const person = {}
    let addKeyPerson = (key, value) =>  { {person[key] = value} }
    
    addKeyPerson("firstname",firstname)
    addKeyPerson("lastname",lastname)
    addKeyPerson("email" , email)
    addKeyPerson("age",age)
    addKeyPerson("tel", tel)

    text.innerHTML = `person = { firstname: ${firstname},
                        lastname: ${lastname},
                        email: ${email},
                        age:${age}, 
                        tel:${tel}}`;
    console.log(person)
}

function ansFunc5() {
    let height = document.getElementById("height").value
    let weight = document.getElementById("weight").value
    let text = document.getElementById("answer5")
    let BMI = weight / height ** 2;
    let ans;
    if (BMI < 18.5) ans = "underweight " + BMI
    else if (BMI < 25) ans = "Normal " + BMI
    else if (BMI < 30) ans = "Overweight " + BMI
    else ans = "Obese " + BMI
    text.innerHTML = ans
}

function ansFunc6() {
    let score = document.getElementById("Score").value
    let Days = document.getElementById("Days").value
    let text = document.getElementById("answer6")
    if (Days <= 0) ans = 20
    else if (Days == 7) ans = score
    else ans = (score - Days > 0) ? (score - Days) : 0
    text.innerHTML = ans
}

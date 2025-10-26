const arr = [true , false];

// console.log(Math.random())


const randomPromise = () => {
return new Promise((resolve , reject) => {
 const randomValue = Math.random()
 if(randomValue > 0.5){
    resolve("Complite")
 } else {
    reject("Well , well , well")
 }
})
}

randomPromise()
.then((result) => console.log(result))
.catch((error) => console.log(error))
.finally(() => console.log("Promise complite"));

//  Послідовний проміс
//  1.Створіть функцію getRandomNumber, яка повертає проміс, 
// що генерує випадкове число.
//  Використайте метод then, щоб обробити результат першого проміса, 
// додати до нього число 10 та вивести результат.
//  Використайте метод catch, щоб обробити помилки у будь-якому 
// з промісів та вивести повідомлення "Помилка проміса".
//  Використайте метод finally для виведення повідомлення 
// "Робота з промісом завершена" незалежно від того, чи було виконання успішним, чи виникла помилка.

const getRandomNumber = () =>{
    return new Promise((resolve , reject) =>{
        const randomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);
        if(randomNumber){
            resolve(randomNumber)
        } else {
            reject("Nothing")
        }
    })
}

getRandomNumber()
.then((result) => result)
.then((result) => console.log(result * 10))
.catch((error) => console.log(error))
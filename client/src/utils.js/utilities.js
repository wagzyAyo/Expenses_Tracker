const time = Date().split("")[4].split(":")[0];
const year = Date().split("")[3]
console.log(year)
console.log(time)
let greeting = "";

if (time<12){
    greeting = "Good morning"
} else if (time<18){
    greeting = "Good afternoon"
}else{
    greeting = "Good evening"
}

module.exports = {greeting, year}
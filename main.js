// 1. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს
// თუ ციფრი დადებითია ფუნქციამ უნდა დააბრუნოს "დადებითია", თუ
// არა "უარყოფითია"

const num = -2;

if(num < 0 ){
    console.log("უარყოფითია")
} else {
    console.log("დადებითია")
}


// 2. დაწერეთ ფუნქცია რომელიც დააბრუნებს ყველა ციფრის ჯამს
// 1 დან 100 მდე

  function sumNumbers() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
      sum += i;
    }
    return sum;
  }
  
  let sums = sumNumbers(); 
  console.log(sums);

// 3. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს, ფუნქციამ უნდა
// დააბრუნოს ეს ციფრი კენტია თუ ლუწი

const numb = 13;
let x = 0 
function evenNumbers(){
    if(numb % 2 === x){
        console.log("even")
    } else{
        console.log("odd")
    }
}

evenNumbers()




// 4. შექმენით ობიექტი car რომელსაც ექნება year და model.
// დაწერეთ ფუნქცია რომელსაც გადასცემთ ამ მანქანის ობიექტს
// და ფუნქციამ უნდა დააბრუნოს მანქანის ასაკი

let car = {
    model: "RANGEROVER",
    year: 2015
}

function getCar(){
    let thisYear = new Date().getFullYear();
    let carAge = thisYear - car.year;
    return carAge;
}
let age = getCar();
console.log(age)
// 5. დაწერეთ ფუნქცია რომელსაც გადავცემთ ციფრების მასივს,
// მაგალითად [1,4,88,99, 123]. ფუნქციამ უნდა იპოვოს და დააბრუნოს
// მასივის უდიდესი ციფრი

let arr = [1,4,88,99, 123]
function getTheBiggestNumber(){
for(let i = 0; i<arr.length; i++){

}
}
// 6. გააკეთეთ იგივე ოღონდ დააბრუნეთ უმცირესი ციფრი


// 7. დაწერეთ ფუნქცია რომელსაც გადასცემთ სიტყვას,
// ფუნქციამ უნდა დააბრუნოს ამ სიტყვის შებრუნებული ვერსია,
// მაგალითად თუ გადავცემთ someFn("ერთი"), უნდა დააბრუნოს "ითრე"

let word = "ერთი, ორი, სამი ^_^"
let reverse = ""
 
for( let i = word.length; i>0; i--){
    reverse= reverse+word[i-1]
}

console.log(reverse)


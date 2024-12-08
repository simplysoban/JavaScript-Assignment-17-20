console.log("-------------------------")
console.log("Question 1")
console.log("-------------------------")


var multiArr = [
    [],
    [],
    []
]


console.log("-------------------------")
console.log("Question 2")
console.log("-------------------------")


var multiArray = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
console.log(multiArray)


console.log("-------------------------")
console.log("Question 3")
console.log("-------------------------")


for(var i = 1; i <= 10; i++) {
    console.log(i)
}


console.log("-------------------------")
console.log("Question 4")
console.log("-------------------------")

var table = Number(prompt("Enter the number you want table of:"))
var length = Number(prompt("Enter the number for length of the table:"))

for(var i = 1; i <= length; i++) {
    console.log(table + " x " + i + " = " + table * i);
}


console.log("-------------------------")
console.log("Question 5")
console.log("-------------------------")


var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for(var i=0; i < fruits.length; i++) {
    console.log(fruits[i])
    console.log("Element at 0 index is " + fruits[0])
    console.log("Element at 1 index is " + fruits[1])
    console.log("Element at 2 index is " + fruits[2])
    console.log("Element at 3 index is " + fruits[3])
    console.log("Element at 4 index is " + fruits[4])
}


console.log("-------------------------")
console.log("Question 6")
console.log("-------------------------")


console.log("Counting: ")
for(var i = 1; i <= 15; i++) {
    console.log(i)
}

console.log("Reverse Counting: ")
for(var i = 15; i >=1; i--) {
    console.log(i)
}

console.log("Even Counting: ")
for(var i = 0; i <= 20; i++) {
    if(i % 2 == 0) {
        console.log(i)
    }
}

console.log("Odd Counting: ")
for(var i = 0; i <= 20; i++) {
    if(i % 2 !== 0) {
        console.log(i)
    }
}

console.log("Series Counting: ")
for(var i = 0; i <= 20; i++) {
    if(i % 2 == 0) {
        console.log(i+"k")
    }
}


console.log("-------------------------")
console.log("Question 7")
console.log("-------------------------")


var bakeryItems = ["bread", "croissant", "donut", "eclair", "fruitcake", "cookie", "biscuit"];
var userItem = prompt("Enter the item name you want to search in our Bakery: ").toLowerCase();

for(var i = 0; i < bakeryItems.length; i++) {
    if(userItem == bakeryItems[i]){
        console.log(userItem + " is available at index: " + i);
        break
    }else( 
        console.log("Item not found")
    )
    
}


console.log("-------------------------")
console.log("Question 8")
console.log("-------------------------")

var largestArr = [23, 56, 27, 34, 89, 28];
var largest = largestArr[0]

for(var i = 0; i < largestArr.length; i++) {
    if(largestArr[i] > largest) {
        largest = largestArr[i];
    }
}

console.log("Largest number in the array is: "+ largest);


console.log("-------------------------")
console.log("Question 9")
console.log("-------------------------")

var smallestArr = [23, 56, 27, 34, 89, 28];
var smallest = smallestArr[0]

for(var i = 0; i < smallestArr.length; i++) {
    if(smallestArr[i] < smallest) {
        smallest = smallestArr[i];
    }
}

console.log("Largest number in the array is: "+ smallest);


console.log("-------------------------")
console.log("Question 10")
console.log("-------------------------")

for(var i = 0; i <= 100; i++) {
    if(i % 5 == 0){
        console.log(i);
    }
  
}
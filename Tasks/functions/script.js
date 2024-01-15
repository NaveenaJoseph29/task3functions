// a. Print odd numbers in an array

let numbers = [1,2,3,4,5,6]
let oddNumbers=[]
function oddNumber(){
for(let i = 0;i<numbers.length;i++){
    if( numbers[i]%2 !== 0 ){
        oddNumbers.push(numbers[i])
    }
}
console.log(oddNumbers);
}
oddNumber()

// b.Convert all the strings to title caps in a string array

let strArr=["naveena","ryan"]
let output=[]
let uppercaseArr=[]
function removeDuplicates(){
for(i=0;i<strArr.length;i++){
    uppercaseArr = strArr[i].toUpperCase()
    output.push(uppercaseArr)
}
console.log(output)
}
removeDuplicates()

// c. Sum of all numbers in an array

let arr = [11,22,33,44,55]
let sum = 0
function arrSum(){
for(i=0;i<arr.length;i++)
{
    sum = sum + (+arr[i])
}
console.log(sum)
}
arrSum()

// d.Return all the prime numbers in an array

let evenNumbers=[]
function prime(){
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2 == 0){
        evenNumbers.push(numbers[i])
    }
}
console.log(evenNumbers)
}
prime()

// e.Return all the palindromes in an array

let Numbers=[12321,15156,11,245,13231,1515,181,222]
let palindromes=[]
function palindrome(){
for(let i=0;i<Numbers.length;i++){
	var rem, temp, final = 0;
	var value = Numbers[i];
	temp = value;
	while(value>0)
	{
	    rem = value%10;
		value = parseInt(value/10);
		final = final*10+rem;
	}
	if(final==temp)
	{
        palindromes.push(Numbers[i])
	}
}
console.log(palindromes)
}
palindrome()

// f.Return median of two sorted arrays of the same size.

let arr1=[12,15,16,18,22]
let arr2=[14,25,54,55,56]
function median(){
let arr3 = arr1.concat(arr2) 
sortedArr=arr3.sort();
n=arr3.length
let median =(arr3[n/2]+arr3[n/2-1])/2
console.log(median)
}
median()

// g.Remove duplicates from an array

let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);

//h.Rotate array by K times

// let arrRot = [ 1, 3, 5, 7, 9, 11 ];
//     let n = arrRot.length;
//     let k = 3; 
//     k = k % n;
//     let i, j;
//     for (i = n - k, j = n - 1; i < j; i++, j--) {
//         let temp = arrRot[i];
//         arrRot[i] = arrRot[j];
//         arrRot[j] = temp;
//     }
//     for (i = 0, j = n - k - 1; i < j; i++, j--) {
//         let temp = arrRot[i];
//         arrRot[i] = arrRot[j];
//         arrRot[j] = temp;
//     }
//     for (i = 0, j = n - 1; i < j; i++, j--) {
//         let temp = arrRot[i];
//         arrRot[i] = arrRot[j];
//         arrRot[j] = temp;
//     }
//     for (let i = 0; i < n; i++) {
//         console.log(arrRot[i]+ " ");
//     }

// ARROW FUNCTION
// a.Print odd numbers in an array

let newArr = [1,22,55,44,33,55,44,66]
let odds= newArr.filter(n=>n%2)
console.log(odds)

// b.Convert all the strings to title caps in a string array

const str = "foo bar baz";
const newStr = str.split(' ')
   .map(w => w[0].toUpperCase() + w.substring(1).toUpperCase())
   .join(' ');
console.log(newStr);

// c.Sum of all numbers in an array

const myNums = [1,2,3,4,5];
let numSum = 0;
myNums.forEach( num => {
    numSum += num;
})
console.log(numSum) 

// d.Return all the prime numbers in an array

const newArray = [1, 3, 2, 5, 10];
const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};
const myPrimeArray = newArray.filter(isPrime);
console.log(myPrimeArray);

// e.Return all the palindromes in an array

const getAllPalindromes = (words) => words.filter((word) => word.split("").reverse().join("") === word);

console.log(getAllPalindromes(["hello", "noon"]));


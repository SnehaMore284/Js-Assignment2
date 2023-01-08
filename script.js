console.clear();

// Question 1:
// Write a program to search if a number exists in an array. If the number exists then return the position. If it exists multiple time then return an array with all the positions. If the number doesn't exist then return -1;
// For example,
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 4
// Output: 3
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 1
// Output: [0, 5]
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 7
// Output: -1

//Soultion Answer1---//

//Example--//

//Example-Answer1----//
var mArr =[1,2,3,4,5,1,3];
var searchElement=4
var result=[];

  for(i=0;i<mArr.length;i++)
  {
    if(mArr[i]==searchElement)
    {
      result.push(i);
    }
  }
    if(result== "")
    {
      consol.log(-1)
    }else{
      console.log(result);
    }

//Example-Answer2---//
var mArr =[1,2,3,4,5,1,3];
var searchElement=1
var result=[];

  for(i=0;i<mArr.length;i++)
  {
    if(mArr[i]==searchElement)
    {
      result.push(i);
    }
  }
    if(result== "")
    {
      consol.log(-1)
    }else{
      console.log(result);
    }
//Example-Answer3---//
   var mArr =[1,2,3,4,5,1,3];
var searchElement=7
var result=[];

  for(i=0;i<mArr.length;i++)
  {
    if(mArr[i]==searchElement)
    {
      result.push(i);
    }
  }
    if(result== "")
    {
      consol.log(-1)
    }else{
      console.log(result);
    }


// Question 2:
// Write a program to print following pattern in the console.
// 54321
// 5432
// 543
// 54
// 5

//Soultion Answer2---//

let n = 5; 
let string = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    string += n - j + 1;
  }
  string += "\n";
}
console.log(string);



// Question 3:
// Write a JavaScript program to sort an array in ascending order
// For example,
// Input: [3, 2, 1, 4, 5, 45]
// Output: [1, 2, 3, 4, 5, 45]

//Soultion Answer3---//

function func() {
     
    // Original string
    var arr = ["3","2","1","4","5",]
 
    console.log(arr);
    // Sorting the array
    console.log(arr.sort());
}
func();




// Question 4:
// Write a JavaScript program to check if two strings are anagrams. Anagram string are such two strings which can be rearranged to create one another.
// For example,
// Input: LISTEN and SILENT
// Output: True
// Input: HELLO and JELLO
// Output: False


//Solution Answer4----//
//Example-1:-------------------//
function checkStringsAnagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){
       console.log('Invalid Input');
       return
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
       console.log("True");
    } else { 
       console.log("False");
    }
 }
 checkStringsAnagram("LISTEN","SILENT")

 //Example-2:--------------------------//
 function checkStringsAnagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){
       console.log('Invalid Input');
       return
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
       console.log("True");
    } else { 
       console.log("False");
    }
}
 checkStringsAnagram("HELLO","JELLO")
 




// Question 5:
// Write a JavaScript program to reverse a string without using inbuilt methods.
// For example,
// Input: Hello
// Output: olleH


//Solution Answer5----//

function reverse1(str){
    let r = "";
    for(let i = str.length-1; i >= 0; i--){
      r += str[i];
    }
    return r;
  }
  
  console.log(reverse1("Hello"))
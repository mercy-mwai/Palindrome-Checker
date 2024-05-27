const inputValue=document.getElementById("text-input");
const checkButton=document.getElementById("check-btn");
const results=document.getElementById("results");
let value='';
inputValue.onchange = (e) => { value = e.target.value };
checkButton.onclick = () => {
if(value){
    const cleanValue=value.replace(/[\$\*\.','\s\-\_]/g,'').toLowerCase();
    const reversedValue = cleanValue.split('').reverse().join('').toLowerCase();
    if(cleanValue === reversedValue){
        results.innerText = `${value} is a palindrome`
      } else{
        results.innerHTML = `${value} is not a palindrome`;
      }
    } else {
      alert("Please input a value")
    }
   };
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
// string to show take input and show output
let string = "";

// we cant apply foreach on button so we took button and put into an arr
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;   
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }

        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})
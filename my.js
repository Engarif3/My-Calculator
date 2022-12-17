let string ="";

let buttons = document.querySelectorAll('.box1');

Array.from(buttons).forEach((button) =>{
    button.addEventListener('click', (e) =>{
    if(e.target.innerHTML == '='){
        string = eval(string);
        document.querySelector('.disp').value = string;
    }

    else if(e.target.innerHTML == 'DEL'){
        string = "";
        document.querySelector('.disp').value = string;
    }

    else if(e.target.innerHTML == 'X'){
        string = eval(string);
        document.querySelector('.disp').value = string;
    }

    
    else{
    console.log(e.target);
    string = string + e.target.innerHTML;
    document.querySelector('.disp').value = string;}
    })
})

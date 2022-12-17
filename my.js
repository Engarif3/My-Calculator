let string ="";

let buttons = document.querySelectorAll('.box1');

Array.from(buttons).forEach((button) =>{
    button.addEventListener('click', (e) =>{
    if(e.target.innerHTML == '='){
        string = eval(string);
        document.querySelector('.disp').value = string;
    }

    else if(e.target.innerHTML == 'CLR'){
        string = "";
        document.querySelector('.disp').value = string;
    }

    else if(e.target.innerHTML == 'DEL'){
        string = string.slice(0, -1);
        document.querySelector('.disp').value = string;
    }

    else if(e.target.innerHTML == 'X'){
        string = eval(string);
        document.querySelector('.disp').value = string;
    }

    else if(e.target.innerHTML == '()'){
        if  ( 
             string.indexOf("(") == -1 ||
             string.indexOf("(") != -1 &&
             string.indexOf(")") != -1 &&
             string.lastIndexOf("(") < string.lastIndexOf(")")) 
             
             {
                string += "(";
                
             } else if(
                string.indexOf("(") != -1 &&
                string.indexOf(")") == -1 ||
                string.indexOf("(") != -1 &&
                string.indexOf(")") != -1 &&
                string.lastIndexOf("(") > string.lastIndexOf(")")) 
            {
                string += ")";
                
            }

          document.querySelector('.disp').value = string;
             
        }
        
    else{
    string = string + e.target.innerHTML;
    document.querySelector('.disp').value = string;}
    })
})

let icon = document.querySelector('.iclose');
let box = document.querySelector('.updatebox');
console.log(box);
icon.addEventListener('click',()=>{
    box.classList.add('inactive');
})

let button = document.querySelector('.updatebutton');

button.addEventListener('click',()=>{
    box.classList.remove('inactive')
})

let submit = document.querySelector('.submit');
let inpFname = document.querySelector('#newFname');
let inpLname = document.querySelector('#newLname');
const regex = /^[a-zA-Z\s]*$/;
submit.addEventListener('click',(event)=>{
    if(inpFname.value === "" && inpLname.value === ""){
        window.alert("You have to change atleast one field");
        event.preventDefault();
    }
    else if(!regex.test(inpFname.value) || !regex.test(inpLname.value)){
        window.alert("please make sure there are no numbers in your name");
        event.preventDefault();
    }else{
        let conf = window.confirm("Confirm changes :\nFirst name : "+inpFname.value+"\nLast name : "+inpLname.value)

        if(!conf) {
            event.preventDefault();
        }
    }
})
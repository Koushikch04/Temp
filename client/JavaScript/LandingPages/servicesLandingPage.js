let selpack = document.querySelector('#selpack');
let seldate = document.getElementById("seldate");
let seltime = document.querySelector('#seltime');
let selnum = document.querySelector('#selnum');
let selapp = document.querySelector('.a-app');

const regex = /^[a-zA-Z\s]*$/;

selapp.addEventListener("click",(event)=>{
    if( selpack.value === "" || seldate.value ==="" || seltime.value ==="" ){
            window.alert("please enter all fields");
            event.preventDefault();
        }
    
    else{
        let conf= window.confirm("Confirm appointment:\nPackage cost : "+ selpack.value+"\nNumber of pets : "+selnum.value+ "\nDate : "+seldate.value+"\nTime : "+seltime.value+"\nTotal cost : "+(selpack.value*selnum.value) );

        if(!conf) {
            event.preventDefault();
        }
    }
});

seldate.addEventListener("click",(event)=>{
    date= new Date()
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear()
if (month<10){
    month = "0"+(date.getMonth()+ 1)
}
let currentDate = `${year}-${month}-${day}`;
    seldate.min = currentDate
})
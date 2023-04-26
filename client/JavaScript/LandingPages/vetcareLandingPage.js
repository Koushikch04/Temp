
let selpack = document.querySelector('#sel-pack');
let seldate = document.getElementById("sel-date");
let seltime = document.querySelector('#sel-time');
let selnum = document.querySelector('#sel-num');
let selapp = document.querySelector('.a-app');
  
selapp.addEventListener("click",(event)=>{
    if(selpack.value === "" || seldate.value ==="" || seltime.value ===""){
        window.alert("please select all fields");
        event.preventDefault()
    }
    else{
        let c = window.confirm("Confirm appointment:\nDoctor : "+ selpack.value+"\nNumber of pets : "+selnum.value+ "\nDate : "+seldate.value+"\nTime : ");

        if(!c) {
            event.preventDefault()
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



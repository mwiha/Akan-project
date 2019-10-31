const submit=document.getElementById("submit");
submit.addEventListener("click", function(){
    const day=document.getElementById("day").value;
    const month=document.getElementById("month").value;
    const year=document.getElementById("year").value;
    const date= new Date(`${year}-${month}-${day}`);
    const dayOfWeek = date.getDay();
    const male=document.getElementById("male");
    const female=document.getElementById("female");
    const results=document.getElementById("result");

    const days=["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","saturday"];
    const maleName=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    const femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

    // validation
    if(day==""){
        alert("please enter day");
    } else if(month==""){
        alert("please enter month");
    } else if(year==""){
        alert("please enter year");
    }


})
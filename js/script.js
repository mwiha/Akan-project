const submit=document.getElementById("submit");
submit.addEventListener("click", function(){
    const day=document.getElementById("day").value;
    const month=document.getElementById("month").value;
    const year=document.getElementById("year").value;
    const date= new Date(`${year}-${month}-${day}`);
    const dayOfWeek = date.getDay();
    const male=document.getElementById("male");
    const female=document.getElementById("female");
    const results=document.getElementById("results");

    const days=["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","saturday"];
    const maleName=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    const femaleName=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

    // validation
    if(day<=0 || day>31){
        results.innerHTML = "please enter valid day";
        results.style.color="red";
    } else if(month<=0 || month>12){
        results.innerHTML = "please enter valid day";
        results.style.color="red";
    } else if( year<=0){
        results.innerHTML = "Year can't be zero or a negative number";
        results.style.color="red";
    } else if( year.toString().length !== 4){
        results.innerHTML = "enter valid year";
        results.style.color="red";
    }else if(day==""){
        results.innerHTML = "please enter day";
        results.style.color="red";
    } else if(month==""){
        results.innerHTML = "please enter month";
        results.style.color="red";
    } else if(year==""){
        results.innerHTML = "please enter year";
        results.style.color="red";
    } else if(male.checked){
        results.innerHTML="You were born on a " + days[dayOfWeek] + ". Your akan name is " + maleName[dayOfWeek];
       results.style.color="blue";
     } else {
        results.innerHTML="You were born on a " + days[dayOfWeek] + ". Your akan name is " + femaleName[dayOfWeek];
        results.style.color="blue";
     }



})
const submit=document.getElementById("submit");
submit.addEventListener("click", function(){
    const day=document.getElementById("day").value;
    const month=document.getElementById("month").value;
    const year=document.getElementById("year").value;
    const date= new Date(`${year}-${month}-${day}`);
    const dayOfWeek = date.getDay();
    const male=document.getElementById("male");
    const female=document.getElementById("female");

    

    
    
})
document.getElementById("btn1").addEventListener("click", myInsert);

function myInsert() {
    let myEmpno = document.getElementById("eno").value;
    let myName = document.getElementById("nm").value;
    let myCity = document.getElementById("city").value;
    let mySalary = document.getElementById("salary").value;

    let url = "http://localhost:3000/employee";

    fetch(url,{
        // Adding method type
        method: "POST",
    
        //Adding body or contents to send
        body:JSON.stringify({
            employeeno: myEmpno,
            name: myName,
            city: myCity,
            salary: mySalary,
        }),
        
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
    .then((data)=>{
        console.log(data);
        return data.json();
    })
    
    .then((json)=>{
        console.log(json);
        alert("DATA SAVED SUCCESSFULLY");
    });
   }

   const a = () => {
    console.log("hello");
   }
   a();


   
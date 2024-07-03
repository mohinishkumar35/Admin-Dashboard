async function dataShow() {
    let myTable = `
    <table border="10px" width="100%" height="100%" bgcolor="biege" align="center"
    <tr bgcolor="yellow">
    <th>Employee no</th>
    <th>Employee Name</th>
    <th>City</th>
    <th>Salary</th>
    </tr>
    `;
    let url = "http://localhost:3000/employee";

    let myobj = await fetch(url);
    console.log(myobj);
    let myData = await myobj.json();
    console.log(myData);

    myData.map((key) => {
        myTable += `
        <tr>
        <td>${key.employee}</td>
        <td>${key.name}</td>
        <td>${key.city}</td>
        <td>${key.salary}</td>
        </tr>
        `;
    });

    myTable += `</table>`;

    document.getElementById("demo").innerHTML = myTable;
}
dataShow();
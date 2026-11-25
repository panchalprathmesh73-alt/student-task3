const cl=console.log;
const stdform=document.getElementById('stdform');
const fnamecontrol=document.getElementById('fname');
const lnamecontrol=document.getElementById('lname');
const emailcontrol=document.getElementById('email');
const contactcontrol=document.getElementById('contact');
const agecontrol=document.getElementById('age');
const submitbtn=document.getElementById('submitbtn');
const Studentdata=document.getElementById('Studentdata');

const stuArr = [
    {
        fname: "Aman",
        lname: "Sharma",
        email: "aman@gmail.com",
        contact: "9876543210",
        age: 21
    },
    {
        fname: "Ravi",
        lname: "Patil",
        email: "ravi@gmail.com",
        contact: "9876543211",
        age: 22
    },
    {
        fname: "Neha",
        lname: "Pawar",
        email: "neha@gmail.com",
        contact: "9876543212",
        age: 20
    },
    {
        fname: "Priya",
        lname: "Deshmukh",
        email: "priya@gmail.com",
        contact: "9876543213",
        age: 23
    },
    {
        fname: "Rahul",
        lname: "Jadhav",
        email: "rahul@gmail.com",
        contact: "9876543214",
        age: 19
    },
    {
        fname: "Sneha",
        lname: "Kulkarni",
        email: "sneha@gmail.com",
        contact: "9876543215",
        age: 21
    },
    {
        fname: "Prathmesh",
        lname: "Panchal",
        email: "prathmesh@gmail.com",
        contact: "9876543216",
        age: 22
    },
    {
        fname: "Pooja",
        lname: "Shinde",
        email: "pooja@gmail.com",
        contact: "9876543217",
        age: 20
    },
    {
        fname: "Akash",
        lname: "More",
        email: "akash@gmail.com",
        contact: "9876543218",
        age: 24
    },
    {
        fname: "Kiran",
        lname: "Kadam",
        email: "kiran@gmail.com",
        contact: "9876543219",
        age: 21
    }  
];

function onEdit(hof){
let editobj=stuArr[hof]
    fnamecontrol.value=editobj.fname;
    lnamecontrol.value=editobj.lname;
    emailcontrol.value=editobj.email;
    contactcontrol.value=editobj.contact;
    agecontrol.value=editobj.age;
    submitbtn.style.backgroundColor='blue'
    submitbtn.innerHTML="+ Update Todo"
    
}

function createtable(std){
    let result="";
    std.forEach((sub,i)=>{
        result +=`<tr>
                  <td>${i + 1}</td>
                  <td>${sub.fname}</td>
                  <td>${sub.lname}</td>
                  <td>${sub.email}</td>
                  <td>${sub.contact}</td>
                  <td>${sub.age}</td> 
                  <td>
                  <button class="btn btn-sm btn-warning" onclick="onEdit(${i})">Edit</button>
                  </td>
                  <td>
                  <button class="btn btn-sm btn-danger">Remove</button>
                  </td>  
                  </tr>`
    })

    Studentdata.innerHTML=result;

}
createtable(stuArr)


function onhandlebtn(event){
    event.preventDefault();
    let stdobj={
        fname : fnamecontrol.value,
        lname : lnamecontrol.value,
        email : emailcontrol.value,
        contact : contactcontrol.value,
        age : agecontrol.value
    }
    stuArr.push(stdobj);
    createtable(stuArr);
    stdform.reset();
}

stdform.addEventListener("submit",onhandlebtn);


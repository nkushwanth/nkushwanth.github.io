const users=[];
const showLogin = () => {
    let str=`
    <div class='App-Container'>
    <h1>Login Form</h1>
    <p><input type="text" id="txtEmail"></p>
    <p><input type="password" id="txtPass"></p>
    <p><button onclick ='showhomw()'>Log In</button></p>
    <p><button onclick='showRegister()'>Create Account</button></p>
    </div>
    `
    root.innerHTML = str
}

const showRegister = () => {
      let str=`
    <h1>Register Form</h1>
    <p><input type="text" id="txtName"></p>
     <p><input type="text" id="txtEmail"></p>
    <p><input type="password" id="txtPass"></p>
    <button onclick ='addUser()'>Register</button>
    <button onclick ='showLogin()'>aldready a member</button>
    `
    root.innerHTML = str
}
              
const showhomw = () =>{
    let str= `<h1>Register Form</h1>`

      root.innerHTML=str
}

const addUser =()=>{
    const user ={
        names:document.getElementById("txtName").value,
        email:document.getElementById("txtEmail").value,
        pass:document.getElementById("txtPass").value,

    }
    users.push(user);
    console.log(users);
showLogin();
};


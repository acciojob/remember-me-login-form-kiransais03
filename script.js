//your JS code here. If required.
let form=document.getElementsByTagName('form')[0];
if(localStorage.getItem('username')) {
	let newbtn=document.createElement('button');
	newbtn.innerText='Login as existing user';
	newbtn.id='existing';
	form.append(newbtn);
    newbtn.addEventListener('click',existingbtnfucn);
}

function existingbtnfucn(event) {
    event.preventDefault();
    let usernm=localStorage.getItem('username');
    alert(`Logged in as ${usernm}`)
}

let btn=document.getElementById('submit');
btn.addEventListener('click',callfunc);

function callfunc(event) {
	// event.preventDefault();
	let username=document.getElementById('username').value;
	let password=document.getElementById('password').value;
	let checkboxbool=document.getElementById('checkbox').checked;
	if(username && password)
	{
		if(checkboxbool)
		{
			localStorage.setItem('username',username);
			localStorage.setItem('password',password);
		} else if(localStorage.getItem('username')) {
			localStorage.removeItem('username');
			localStorage.removeItem('password');
		}
		alert(`Logged in as ${username}`);
		
	}
}
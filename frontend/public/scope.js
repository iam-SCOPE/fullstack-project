//const fs = require('fs');
//const userForm = require('/Projects/Software Engineering/fullstack project/backend/userform');

document.addEventListener('DOMContentLoaded',
function (){

    //first-container

    const dropdownToogle = document.querySelector('#dropdown-toogle');
    const dropdownMenu = document.querySelector('#dropdown-menu');
    const dropdownToogleClose = document.querySelector('#dropdown-toogleclose')
    let clickCounter = 0;

    dropdownToogle.addEventListener("click", e => {
        e.preventDefault();

        clickCounter++;

        if(clickCounter % 2 === 1)
        {
            dropdownMenu.style.display = 'flex';
            dropdownToogle.style.display = 'none';

        }
        else
        {
            dropdownMenu.style.display = 'none'
        }

    });

    dropdownToogleClose.addEventListener("click", e => {
        e.preventDefault();

        if(clickCounter % 2 === 1)
        {
            dropdownMenu.style.display = 'none';
            dropdownToogle.style.display = 'flex';

        }
        clickCounter++;
    });

    const firstSmallContainer = document.getElementById('firstsmall-container')
    const firstSmallContainer2 = document.getElementById('firstsmall-container2')
    const firstSmallContainer3 = document.getElementById('firstsmall-container3')
    const personalLogin = document.getElementById('personal')
    const loginForm = document.getElementById('login-form')
    const loginButton = document.getElementById('login-button')

    personalLogin.addEventListener('click', e => {
        e.preventDefault()
        firstSmallContainer.style.display = 'none'
        firstSmallContainer2.style.display = 'flex'
    })

    loginButton.addEventListener('click', e => {
        e.preventDefault()
        firstSmallContainer.style.display = 'none'
        firstSmallContainer2.style.display = 'none'
        firstSmallContainer3.style.display = 'flex'
    })
    
    //fifth-container
    const anchors = document.querySelectorAll('.anch');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', e => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href').substring(1);
        const targets = document.querySelectorAll('.fifthcontsub')
        targets.forEach(target => {
            if(target.id === targetId)
            {
                if(window.innerWidth < 815)
                {
                    target.style.display = 'flex'
                    target.style.flexDirection = 'column'
                    anchor.appendChild(target);
                }
                else if(window.innerWidth < 1400)
                {
                    target.style.display = 'flex'
                    target.style.flexDirection = 'column'
                }
                else
                {
                    target.style.display = 'flex'
                }
            }else{
                target.style.display = 'none'
            }
        })
      });
    });


    /*
    const fullName = document.getElementById('inputone').value
    const phoneNum = document.getElementById('inputtwo').value
    const email = document.getElementById('inputthree').value
    const form = document.getElementById('form')

    function addUserInfo(fullName, phoneNum, email)
    {
        //Check if the email or phone number already exists in the userform file
        fs.readFile('/Projects/Software Engineering/fullstack project/backend/userform.js','utf8', (err,data)=>{
            
            if(err)
            {
                throw err
                console.log("error can't read file")
            }

            for (let i = 0; i < userForm.length; i++)
            {
                if (phoneNum === userForm[i].phone || email === userForm[i].email)
                {
                    alert("User already exists");
                }
            }
        })

        // If the email or phone number does not exist, create a new object with the user's information and append it to the userform array
        fs.writeFile('/Projects/Software Engineering/fullstack project/backend/userform.js', (err,data) => {
            
            if (err)
            {
                throw err
                console.log("error can't write to file")
            }

            let newUser = {
                name: fullName,
                phone: phoneNum,
                email: email
            };
    
            userForm.push(newUser);
        });

    }

    form.addEventListener('submit', e => {
        e.preventDefault()
        addUserInfo()
    })
    */    
});
  


document.addEventListener('DOMContentLoaded',
function (){
    //first-container
    const firstSmallContainer = document.getElementById('firstsmall-container')
    const firstSmallContainer2 = document.getElementById('firstsmall-container2')
    const firstSmallContainer3 = document.getElementById('firstsmall-container3')
    const personalLogin = document.getElementById('personal')
    const loginForm = document.getElementById('login-form')
    const loginButton = document.getElementById('login-button')

    personalLogin.addEventListener('click', () => {
        firstSmallContainer.style.display = 'none'
        firstSmallContainer2.style.display = 'flex'
    })

    loginButton.addEventListener('click', () => {
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

});
  

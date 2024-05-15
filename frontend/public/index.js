
document.addEventListener('DOMContentLoaded',
function (){
    
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
  

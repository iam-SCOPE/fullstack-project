import "./Navbar.css"

document.addEventListener('DOMContentLoaded',
function (){
    
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
    
});


function Navbar()
{
    return(
        <nav id="firstsub-container">

            <div id="dropdowncontainer">
                <a href="#dropdown-menu" id="dropdown-toogle"><button id="dropdown-Button">Menu</button></a>
                <ul id="dropdown-menu">
                    <a href="" id="dropdown-toogleclose"><button id="dropdownclose">Close</button></a>
                    <p>_________________________</p>
                    <li><a href="/group">GROUP</a></li>
                    <p>_________________________</p>
                    <li><a href="/career">CAREER</a></li>
                    <p>_________________________</p>
                    <li><a href="/foundation">FOUNDATION</a></li>
                    <p>_________________________</p>
                    <li><a href="/branch-locator">BRANCH LOCATOR</a></li>
                    <p>_________________________</p>
                    <li><a href="/open-an-account">OPEN AN ACCOUNT</a></li>
                    <p>_________________________</p>
                    <li><a href="">LOG IN</a></li>
                    <p>_________________________</p>
                    <li><a href="">SCOPE TECHNOLOGIES</a></li>
                    <p>_________________________</p>
                    <li><a href="">PERSONAL</a></li>
                    <p>_________________________</p>
                    <li><a href="">SME</a></li>
                    <p>_________________________</p>
                    <li><a href="/corporate">CORPORATE</a></li>
                    <p>_________________________</p>
                    <li><a href="/about">ABOUT US</a></li>
                </ul>
            </div>

            <div id="firstsub-containersub">
                <a className="mobile-hidden" href="" >GROUP</a>
                <a className="mobile-hidden" href="" >CAREER</a>
                <a className="mobile-hidden" href="" >FOUNDATION</a>
                <a className="mobile-hidden" href="" >BRANCH LOCATOR</a>
                <a className="mobile-hidden" href="" >OPEN AN ACCOUNT</a>
                <a className="mobile-hidden" href="">LOG IN</a>
                <select name="" id="firstsub-select">
                    <option value="">Select Language</option>
                    <option value="">English</option>
                    <option value="">Chinese</option>
                    <option value="">Portugese</option>
                    <option value="">French</option>
                    <option value="">Spanish</option>
                </select>
                <p className="mobile-hidden" id="firstsub-paragraph">__________________________________________________________________________________________________<span id="paraspan">________________________________</span></p>
                <button className="mobile-hidden" id="scope">SCOPE TECHNOLOGIES</button>
                <a className="mobile-hidden" href="/"> <img id="home" src="https://cdn.onlinewebfonts.com/svg/img_301389.png" alt="home icon"/></a>
                <a className="mobile-hidden" href="" >PERSONAL</a>
                <a className="mobile-hidden" href="" >SME</a>
                <a className="mobile-hidden" href="" >CORPORATE</a>
                <a className="mobile-hidden" href="" >MEDIA</a>
                <a className="mobile-hidden" href="/about" >ABOUT US</a>
                <a className="mobile-hidden" href="" >HELP</a>
            </div>
            <div>
                <img id="logo" src='https://madisonwomenshealth.com/wp-content/uploads/2014/12/SCOPE-Certified-logo-1.png' alt="Scope website logo"/>
            </div>
        </nav>
    )
}

export default Navbar
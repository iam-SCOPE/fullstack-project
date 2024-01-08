import "./Corporate.css"
import Navbar from "./Navbar"
import Unique from "./Unique"
import Footer from "./Footer"

function FirstSection()
{
    return(
        <section className="first-section">
            <div className="first-section-inner">
                <div className="first-section-inner-div1">
                    <h1>Corporate Technologies</h1>
                    <h3>At SCOPE TEECHNOLOGIES, we are commited to the development of real sectors of the economy.</h3>
                </div>
                <div className="first-section-inner-div2">
                    <a href="/" className="first-paragraph">Home</a>
                    <p>Corporate</p>
                    <a href="" className="third-paragraph">SHARE THIS</a>
                </div>
            </div>
        </section>
    )
}

function SecondSection()
{
    return(
        <section className="second-section">
            <div className="second-section-inner">
                <div className="second-section-inner-div1">
                    <h1>Technolgy made easier by caring for your needs</h1>
                </div>
                <h3>
                We offer a comprehensive portfolio of corporate services in the Energy, Manufacturing, 
                FMCGs, Export & Import, Telecommunications, Agriculture and Public sectors of the economy, 
                amongst others. 
                </h3>
            </div>
        </section>
    )
}

function ThirdSection()
{
    return(
        <section className="third-section">
            <div className="third-section-inner">
                <div className="third-section-inner-one">

                    <div className="third-section-inner-1">
                        <h1>ENERGY</h1>
                        <p>
                            Positioned to be the Energy Company of choice by offering our stakeholders value added 
                            customised technology solutions with professionalism towards all our customers.
                        </p>
                        <p>Learn more</p>
                    </div>

                    <div className="third-section-inner-2">
                        <h1>SECTORS</h1>
                        <p>
                            We offer a comprehensive portfolio of corporate services in various sectors of the economy.
                        </p>
                        <p>Learn more</p>
                    </div>

                    <div className="third-section-inner-3">
                        <h1>ACCOUNTS</h1>
                        <p>
                        We create accounts tailored to your individual needs as a valued customer and are constantly 
                        developing new products and services to help make technology and life easier for you.
                        </p>
                        <p>Learn more</p>
                    </div>

                    <div className="third-section-inner-4">
                        <h1>TRADE AND TREASURY PRODUCTS</h1>
                        <p>
                            Treasury products include a firm’s collections, disbursements, concentration, investment 
                            and funding activities all round.
                        </p>
                        <p>Learn more</p>
                    </div>

                    <div className="third-section-inner-5">
                        <h1>STRATEGIC ADVISORY & RESEARCH</h1>
                        <p>
                            Using our extensive spread across the continent, we aim to facilitate inter–and-intra-African 
                            trade and also be the pivot for the inflow of investment capital.
                        </p>
                        <p>Learn more</p>
                    </div>

                    <div className="third-section-inner-6">
                        <h1>TOOLS & RESOURCE</h1>
                        <p>
                            With SCOPE TECHNOLOGIES, personal or corporatE solution is easier on any device anywhere. 
                            Our digital solutions offer various benefits that ensure you stay in control wherever you are.
                        </p>
                        <p>Learn more</p>
                    </div>

                </div>

            </div>
        </section>
    )
}

function FourthSection()
{
    return(
        <section className="fourth-section">
            <div className="fourth-section-inner">

                <div className="fourth-section-inner-div1">
                    <h1>About Us</h1>
                    <h3>
                    Our business strategy is built on being the company of choice for businesses across the African continent. 
                    Using our extensive spread across the continent, we aim to facilitate inter–and-intra-African trade and 
                    also be the pivot for the inflow of investment capital
                    </h3>
                    <button className="fourth-section-inner-btn1">LEARN MORE</button>
                </div>
                <img className="fourth-section-img1" src="https://ica-hpl.com.my/wp-content/uploads/About-Us.jpg" alt="about us"/>
            </div>
        </section>
    )
}

function Corporate()
{
    return(
        <div className = "background">
            <Navbar/>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
            <FourthSection/>
            <Unique/>
            <Footer/>
        </div>
    )
}

export default Corporate
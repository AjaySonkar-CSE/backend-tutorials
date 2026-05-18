export const Home = () => {
    return <>
    
    <main>
        <selection className="section-hero">
            <div className="container grid grid-two-column">
                <div className="section-hero-data">
                    <p className="hero-top-data">This is me</p>
                    <h1 className="hero-heading">I am a MERN Stack Developer</h1>
                    <p className="hero-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ex.</p>
                    <div className="btn btn-group">
                        <a href="/contact">
                        <button className="btn btn-primary">Contact Me</button>
                        </a>
                        <a href="/services">
                        <button className="btn btn-secondary">learn More</button>
                        </a>
                    </div>
                </div>

                <div className="section-hero-image">
                    <picture>
                        <img src="./public/register.jpg" alt="hero image" className="hero-img" width="400" height=
                        "400" />
                    </picture>
                </div>

            </div>
        </selection>

        <section className="section-analysis">
            <div className="container grid grid-four-column">
                <div className="div1">
                    <h3>10K</h3>
                    <p>Happy Customers</p>  
                </div>
                <div className="div1">
                    <h3>20K</h3>
                    <p>Projects Completed</p>  
                </div>
                <div className="div1">
                    <h3>30K</h3>
                    <p>Happy Customers</p>  
                </div>
                <div className="div1">
                    <h3>40K</h3>
                    <p>Happy Customers</p>  
                </div>
            </div>
        </section>
    </main>
    </>
}
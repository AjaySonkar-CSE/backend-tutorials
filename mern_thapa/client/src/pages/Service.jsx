// Service.jsx

export const Service = () => {
    return (
        <>
            <section className="section-services">
                <div className="container">

                    <div className="service-heading">
                        <p>Our Services</p>
                        <h1>What We Offer</h1>
                    </div>

                    <div className="grid grid-three-column">

                        <div className="service-card">
                            <img src="./public/web.png" alt="web development" />

                            <h2>Web Development</h2>

                            <p>
                                We create modern responsive websites using the latest
                                technologies like React and Node.js.
                            </p>

                            <button className="btn">Read More</button>
                        </div>

                        <div className="service-card">
                            <img src="./public/app.png" alt="app development" />

                            <h2>App Development</h2>

                            <p>
                                We build fast and user-friendly mobile applications for Android
                                and iOS platforms.
                            </p>

                            <button className="btn">Read More</button>
                        </div>

                        <div className="service-card">
                            <img src="./public/design.png" alt="ui ux design" />

                            <h2>UI/UX Design</h2>

                            <p>
                                Our creative team designs attractive and professional user
                                interfaces for better user experience.
                            </p>

                            <button className="btn">Read More</button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};
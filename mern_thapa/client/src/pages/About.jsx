// About.jsx
import { Analytics } from "../components/analytics";
import {useAuth} from "../store/auth";
export const About = () => {
       
        const {user} = useAuth();
        console.log("about page :", user);
    return (
        <>
            <section className="section-about">
                <div className="container grid grid-two-column">

                    <div className="about-image">
                        <img
                            src="./public/about.png"
                            alt="about image"
                            width="500"
                            height="500"
                        />
                    </div>

                    <div className="about-content">

                        <h1>welcome {user ? user.userData.username : "to our website"}</h1>

                        <h1>Why Choose Us?</h1>

                        <div className="about-details">
                            <p>
                                <strong>Expertise:</strong> Our team has years of experience in
                                web development and design.
                            </p>

                            <p>
                                <strong>Customization:</strong> We build websites according to
                                your business needs.
                            </p>

                            <p>
                                <strong>Quality:</strong> We provide high-quality and modern
                                responsive websites.
                            </p>

                            <p>
                                <strong>Support:</strong> We offer friendly customer support and
                                maintenance services.
                            </p>
                        </div>

                        <button className="btn">Connect Now</button>
                    </div>

                </div>

                <Analytics />
            </section>
        </>
    );
};
import { useState } from "react";

export const Contact = () => {

    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: "",
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(contact);
    }

    return (
        <>

            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">Contact Us</h1>
                </div>

                <div className="container grid grid-two-column">
                    <div className="contact-img">
                        <img src="./public/contact.png" alt="contact image" width="400" height="400" />
                    </div>

                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input type="text" name="username" id="username" autoComplete="off" value={contact.username} onChange={handleInput} required />

                            </div>
                            <div>
                                <label htmlFor="email">email</label>
                                <input type="email" name="email" id="email" autoComplete="off" value={contact.email} onChange={handleInput} required />

                            </div>
                            <div>
                                <label htmlFor="message">message</label>
                                <textarea name="message" id="message" cols="30" rows="10" autoComplete="off" value={contact.message} onChange={handleInput} required></textarea>
                            </div>
                            <br />
                            <button type="submit">send message</button>
                        </form>
                    </section>

                </div>

                <section className="section-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118983.74465117342!2d81.53649994208654!3d21.261885441601617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dda23be28229%3A0x163ee1204ff9e240!2sRaipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1779172541773!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </section>
            </section>
        </>
    )

}
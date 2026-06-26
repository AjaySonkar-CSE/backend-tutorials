import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
export const Register = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });


    const navigate = useNavigate();
    const { storetokenInLS } = useAuth();

    const handleInput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value
        });

    }

    //handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        // alert(user);

        try {


            const response = await fetch("http://localhost:5001/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            })

            const res_data = await response.json();
            console.log("server register response", res_data.extraDetails);

            if (response.ok) {



                storetokenInLS(res_data.token);


                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    password: "",
                });
                navigate("/Login");
            } else {

                alert(res_data.extraDetails ? res_data.extraDetails : res_data.message);
                // const errorData = await response.json();
                // console.log("Error:", errorData);
            }
            console.log(response);

        } catch (error) {
            console.log("register", error);
        }

    };


    return <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-column">
                        <div className="registration-image">
                            <img src="./public/register.jpg" alt="registration" width="400" height="400" />
                        </div>

                        <div className="registration-form">
                            <h2 className="main-heading mb-3">Register</h2>
                            <form onSubmit={handleSubmit} action="" method="POST">
                                <div className="form-control">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" name="username" id="username" placeholder="Enter your username" required autoComplete="off" value={user.username} onChange={handleInput} />
                                </div>
                                <div className="form-control">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Enter your email" required autoComplete="off" value={user.email} onChange={handleInput} />
                                </div>
                                <div className="form-control">
                                    <label htmlFor="phone">phone no.</label>
                                    <input type="number" name="phone" id="phone" placeholder="Enter your phone number" required autoComplete="off" value={user.phone} onChange={handleInput} />
                                </div>
                                <div className="form-control">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" placeholder="Enter your password" required autoComplete="off" value={user.password} onChange={handleInput} />
                                </div>

                                <button type="submit" className="btn btn-primary">Register</button>
                                <Link to="/Login">
                                    <button className="btn btn-secondary">Login</button>
                                </Link>
                            </form>

                        </div>

                    </div>
                </div>
            </main>
        </section>
    </>
}
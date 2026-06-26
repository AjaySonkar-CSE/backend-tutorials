import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const URL = "http://localhost:5001/api/auth/login";

export const Login = () => {

    const [user, setUser] = useState({

        email: "",

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
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify(user),

            });
            console.log("login response", response);


            const res_data = await response.json();
            if (response.ok) {



                storetokenInLS(res_data.token);

                // localStorage.setItem("token", res_data.token);

                setUser({
                    email: "",
                    password: "",
                })
                navigate("/");
            } else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
                // console.log("Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.log("login", error);
        }

    }


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
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Enter your email" required autoComplete="off" value={user.email} onChange={handleInput} />
                                </div>

                                <div className="form-control">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" placeholder="Enter your password" required autoComplete="off" value={user.password} onChange={handleInput} />
                                </div>

                                <button type="submit" className="btn btn-primary">Login</button>
                                <Link to="/Register">
                                    <button className="btn btn-secondary">Register</button>
                                </Link>
                            </form>

                        </div>

                    </div>
                </div>
            </main>
        </section>
    </>
}
import { useState } from "react";
export const Login = () => {

      const [user, setUser] = useState({
            
            email: "",
            
            password: "",
        });
    
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
            alert(user);
            
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

                                <button type="submit" className="btn btn-primary">Register</button>
                            </form>

                        </div>

                    </div>
                </div>
            </main>
        </section>
    </>
}
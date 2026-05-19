// Error.jsx

import { NavLink } from "react-router-dom";
export const Error = () => {
    return (
        <>
            <section className="error-section">
                <div className="container">
                    <div className="error-content">
                        <h2>404</h2>
                        <h1>Page Not Found</h1>
                        <p>
                            Sorry The Page You Are Looking For Does Not Exist.
                        </p>

                        <div className="btns">
                            <NavLink to="/">
                                <button>Go Back Home</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
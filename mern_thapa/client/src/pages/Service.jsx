// Service.jsx
import {useAuth} from "../store/auth";


export const Service = () => {

    const {services} = useAuth();
    return (
        <section className="section-service">
            <div className="container">
                <h1 className="main-heading">Services</h1>
            </div>

            <div className="container grid grid-three-column">
                {services.map((curElem, index) => {

                    const {provider, price, description, service} = curElem;

                    return (

                    <div className="service-card" key={index}>
                    <div className="card-img">

                        <img src="/public/register.jpg" alt="Register" width="200" />
                    </div>

                    <div className="card-details">
                        <div className="grid grid-two-column">
                            <p>{provider}</p>
                            <p>{price}</p>
                        </div>
                        <h2>{service}</h2>
                        <p>{description}</p>
                    </div>
                </div>)
            
                })}

                </div>

        </section>
    );
}
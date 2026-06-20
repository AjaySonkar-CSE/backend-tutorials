// Service.jsx

export const Service = () => {
    return (
        <section className="section-service">
            <div className="container">
                <h1 className="main-heading">Services</h1>
            </div>

            <div className="container grid grid-three-column">
                <div className="card">
                    <div className="card-img">

                        <img src="/public/register.jpg" alt="Register" width="200" />
                    </div>


                    <div className="card-details">
                        <div className="grid grid-two-column">
                            <p>provider</p>
                            <p>price</p>
                        </div>
                        <h2>services</h2>
                        <p>description</p>
                    </div>

                </div>



            </div>


        </section>
    );
};
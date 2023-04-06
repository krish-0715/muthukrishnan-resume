import React from 'react';

function Contact(props) {
    return (
        <section id="contact">
            <div className="container">
                <section className="section-title mt-5">
                    <h3 className="text-title mt-3 text-center display-3">Contact</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, nemo fugiat ipsa consequatur doloribus velit inventore explicabo illum aut similique sequi quasi incidunt quam ad ratione hic repellat quod dolorum minima. Dicta similique eligendi omnis tempora perspiciatis tempore saepe non nobis nisi sint autem, voluptates aliquid eveniet amet. Praesentium in doloribus illo ad iste voluptate nam esse quasi consequatur quae, inventore laudantium accusantium saepe sequi dolores nostrum aperiam commodi molestias sapiente ab rerum ullam! Ratione nobis voluptates voluptatum, ut laborum facere quam. Earum repudiandae maiores consequuntur dolores veniam? Aspernatur voluptates consectetur reprehenderit eum neque alias aliquam ut, doloremque magni molestiae?</p>
                </section>
                <div className="row mt-4">
                    <div className="col-md-4 col-lg-4">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt"></i>
                                <h4 className="text-title">Location</h4>
                                <p>661A,Aringar Anna Colony,Sivakasi</p>
                            </div>
                            <div className="email">
                                <i className="bi bi-envelope"></i>
                                <h4 className="text-title">Email Id</h4>
                                <p>muthukrishnanarumugam9@gmail.com</p>
                            </div>
                            <div className="phone">
                                <i className="bi bi-phone"></i>
                                <h4 className="text-title">Call</h4>
                                <p>+91-8524090385</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <form action="" autoComplete='off'>
                                    <div className="form-group mt-2">
                                        <label htmlFor="name">Full Name</label>
                                        <input type="text" name='name' id='name' className='form-control' required />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name='email' id='email' className='form-control' required />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="message">Message</label>
                                        <textarea name='msg' id='msg' cols="30" rows="5" className='form-control' required ></textarea>
                                    </div>
                                    <div className="form-group mt-2">
                                        <input type="submit" value="Submit" className='btn btn-outline-secondary' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact;
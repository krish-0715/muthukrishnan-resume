import React from 'react';
import './styles/about.css';

const url = '';

function About(props) {
    return (
        <section id="about">
            <div className="container mt-5 p-3">
                <div className="section-title text-center">
                    <h2 className='text-title  display-4'>About</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto doloribus obcaecati optio iste laborum rem facere dolores, fugit doloremque rerum porro impedit minus voluptatem ex inventore odit corporis laboriosam quidem ducimus? Eius perspiciatis eum aliquid, accusamus molestiae officia eaque est laudantium itaque voluptates quod neque illo.</p>
                </div>
                {/* personal info */}
                <div className="row">
                    <div className="col-md-4 col-lg-4 text-center">
                        <img src={'https://picsum.photos/id/244/500/500'} alt="no " className='img-fluid img-thumbnail'/>
                    </div>

                    <div className="col-md-8 col-lg-8 pt-lg-0 content">
                        <h3>Web & Full Stack Developer</h3>
                        <p className="text-secondary">
                            <em>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id incidunt dolorem ea neque voluptatem laborum ex unde, nostrum mollitia quidem omnis ipsum facilis quaerat est labore minima asperiores? Numquam, ea.
                            </em>
                        </p>
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <i className="b bi-envelope-fill me-2"></i>
                                        <strong>Email</strong>
                                        <span className="text-success float-end">muthukrishnanarumugam9@gmail.com</span>
                                    </li>
                                    <li className="list-group-item">
                                        <i className="b bi-phone-fill me-2"></i>
                                        <strong>Mobile</strong>
                                        <span className="text-success float-end">+91-8524090385</span>
                                    </li>
                                    <li className="list-group-item">
                                        <i className="b bi-browser-edge me-2"></i>
                                        <strong>Website</strong>
                                        <span className="text-success float-end">www.xyz.com</span>
                                    </li>
                                    <li className="list-group-item">
                                        <i className="b bi-globe me-2"></i>
                                        <strong>City</strong>
                                        <span className="text-success float-end">Bengaluru</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <i className="bi bi-book me-2"></i>
                                        <strong>Qualification</strong>
                                        <span className="text-success float-end">B.com</span>
                                    </li>
                                    <li className="list-group-item">
                                        <i className="b bi-patch-check me-2"></i>
                                        <strong>Certification</strong>
                                        <span className="text-success float-end">MERN STACK DEVELOPMENT</span>
                                    </li>
                                    {/* <li className="list-group-item">
                                        <i className="b bi-browser-edge me-2"></i>
                                        <strong>Website</strong>
                                        <span className="text-success float-end">www.xyz.com</span>
                                    </li>
                                    <li className="list-group-item">
                                        <i className="b bi-globe me-2"></i>
                                        <strong>City</strong>
                                        <span className="text-success float-end">Bengaluru</span>
                                    </li> */}

                                    <li className="list-group-item d-grid">
                                        <a href={url} target='_blank' className='btn btn-outline-info'>
                                            <i className="bi bi-arrow-down"></i> Download CV
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* skills */}
                <div className="section-title text-center">
                    <h2 className='text-title  display-4'>Skills</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto doloribus obcaecati optio iste laborum rem facere dolores, fugit doloremque rerum porro impedit minus voluptatem ex inventore odit corporis laboriosam quidem ducimus? Eius perspiciatis eum aliquid, accusamus molestiae officia eaque est laudantium itaque voluptates quod neque illo.</p>
                </div>

                {/* Start of skills */}
                <div className="row skill-content">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="skill-block mt-3 mb-3">
                            <strong className="text-success">HTML <i className='val float-end'>98%</i></strong>
                            <div className="progress" role='progressbar'>
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width:'98%'}}>98%</div>
                            </div>
                        </div>
                        <div className="skill-block mt-3 mb-3">
                            <strong className="text-danger">CSS & CSS3 <i className='val float-end'>88%</i></strong>
                            <div className="progress" role='progressbar'>
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={{ width:'88%'}}>88%</div>
                            </div>
                        </div>
                        <div className="skill-block mt-3 mb-3">
                            <strong className="text-primary">JavaScript <i className='val float-end'>80%</i></strong>
                            <div className="progress" role='progressbar'>
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" style={{ width:'80%'}}>80%</div>
                            </div>
                        </div>
                        <div className="skill-block mt-3 mb-3">
                            <strong className="text-secondary">Jquery <i className='val float-end'>85%</i></strong>
                            <div className="progress" role='progressbar'>
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" style={{ width:'85%'}}>85%</div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="skill-block mt-3 mb-3">
                            <strong className="text-info">Bootstrap <i className='val float-end'>95%</i></strong>
                            <div className="progress" role='progressbar'>
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{ width:'95%'}}>95%</div>
                            </div>
                        </div>
                        <div className="skill-block mt-3 mb-3">
                            <strong className="text-warning">React <i className='val float-end'>82%</i></strong>
                            <div className="progress" role='progressbar'>
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={{ width:'82%'}}>82%</div>
                            </div>
                        </div>
                        <div className="skill-block mt-3 mb-3">
                            <strong className="text-dark">Node JS & Express JS <i className='val float-end'>75%</i></strong>
                            <div className="progress" role='progressbar'>
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-dark" style={{ width:'75%'}}>75%</div>
                            </div>
                        </div>
                        <div className="skill-block mt-3 mb-3">
                            <strong className="text-success">MongoDB <i className='val float-end'>65%</i></strong>
                            <div className="progress" role='progressbar'>
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width:'65%'}}>65%</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of skills */}
            </div>
        </section>
    )
}

export default About;
import React from 'react';
import './styles/resume.css';

function Resume(props) {
    return (
        <section id="resume">
            <div className="container mt-5 p-3">
                <div className="section-title text-center">
                    <h2 className='text-title display-4'>Resume</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto doloribus obcaecati optio iste laborum rem facere dolores, fugit doloremque rerum porro impedit minus voluptatem ex inventore odit corporis laboriosam quidem ducimus? Eius perspiciatis eum aliquid, accusamus molestiae officia eaque est laudantium itaque voluptates quod neque illo.</p>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h6 className="display-6 text-secondary">Education</h6>
                        <div className="resume-item pb-0">
                            <h4>UG</h4>
                            <h5>2018-2021</h5>
                            <p>
                                <em>Ayya nadar janaki ammal colle</em>
                            </p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, similique!</p>
                        </div>
                        <div className="resume-item pb-0">
                            <h4>HSC</h4>
                            <h5>2016-2018</h5>
                            <p>
                                <em>S.H.N.V.Higher Secondary school</em>
                            </p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, similique!</p>
                        </div>
                        <div className="resume-item pb-0">
                            <h4>SSLC</h4>
                            <h5>2015-2016</h5>
                            <p>
                                <em>S.H.N.V.Higher Secondary school</em>
                            </p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, similique!</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h6 className="display-6 text-secondary">Certification</h6>

                        <div className="resume-item pb-0">
                            <h4>MERN Stack</h4>
                            <h5>2023</h5>
                            <p>
                                <em>Be-Practical Tech Solutions, Bengaluru</em>
                            </p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, optio!</p>
                        </div>

                        <div className="resume-item pb-0">
                            <h4>Web Development</h4>
                            <h5>2023</h5>
                            <p>
                                <em>Be-Practical Tech Solutions, Bengaluru</em>
                            </p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, optio!</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume;
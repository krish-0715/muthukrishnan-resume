import React from 'react';
import './styles/project.css';

function Projects(props) {
    return (
        <section id="projects">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mt-5">
                        <h3 className="display-3 text-title">Projects</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mt-5 mb-3 d-flex justify-content-center">
                        <ul className="nav nav-pills" id="projects" role='tablist'>
                            <li className="nav-item">
                                <button className="nav-link active" id='html' data-bs-toggle="tab" data-bs-target="#nav-html">HTML & CSS</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" id='js' data-bs-toggle="tab" data-bs-target="#nav-js">JavaScript</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" id='react' data-bs-toggle="tab" data-bs-target="#nav-react">React</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" id='react-api' data-bs-toggle="tab" data-bs-target="#nav-react-api">React-API</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" id='mern' data-bs-toggle="tab" data-bs-target="#nav-mern">MERN Stack</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="tab-content mt-3 mb-3" id='project-tab'>
                            {/* first card panel */}
                            <div className="tab-pane fade show active" id='nav-html'>
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="text-success text-success text-center">HTML & CSS Projects</h5>
                                    </div>
                                    <div className="card-body">
                                        {/* projects */}
                                        <div className="row">
                                            <div className="col-md-3 mt-2">
                                                <div className="card shadow-lg">
                                                    <img src="https://picsum.photos/id/345/400/400" alt="no image" className='card-img-top' />
                                                    <div className="card-body">
                                                        <h5 className="text-center">Project-1</h5>
                                                        <div className="d-flex justify-content-between">
                                                            <a href="#" target='_blank' className='btn btn-outline-success btn-sm'>Preview</a>
                                                            <a href="#" target='_blank' className='btn btn-outline-secondary'>Code</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-3 mt-2">
                                                <div className="card shadow-lg">
                                                    <img src="https://picsum.photos/id/243/400/400" alt="no image" className='card-img-top' />
                                                    <div className="card-body">
                                                        <h5 className="text-center">Project-2</h5>
                                                        <div className="d-flex justify-content-between">
                                                            <a href="#" target='_blank' className='btn btn-outline-success btn-sm'>Preview</a>
                                                            <a href="#" target='_blank' className='btn btn-outline-secondary'>Code</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-3 mt-2">
                                                <div className="card shadow-lg">
                                                    <img src="https://picsum.photos/id/645/400/400" alt="no image" className='card-img-top' />
                                                    <div className="card-body">
                                                        <h5 className="text-center">Project-3</h5>
                                                        <div className="d-flex justify-content-between">
                                                            <a href="#" target='_blank' className='btn btn-outline-success btn-sm'>Preview</a>
                                                            <a href="#" target='_blank' className='btn btn-outline-secondary'>Code</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-3 mt-2">
                                                <div className="card shadow-lg">
                                                    <img src="https://picsum.photos/id/253/400/400" alt="no image" className='card-img-top' />
                                                    <div className="card-body">
                                                        <h5 className="text-center">Project-4</h5>
                                                        <div className="d-flex justify-content-between">
                                                            <a href="#" target='_blank' className='btn btn-outline-success btn-sm'>Preview</a>
                                                            <a href="#" target='_blank' className='btn btn-outline-secondary'>Code</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* second card panel */}
                            <div className="tab-pane fade" id='nav-js'>
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="text-success text-primary text-center">Javascript Projects</h5>
                                    </div>
                                    <div className="card-body"></div>
                                </div>
                            </div>
                            {/* third card panel */}
                            <div className="tab-pane fade" id='nav-react'>
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="text-success text-secondary text-center">React Projects</h5>
                                    </div>
                                    <div className="card-body"></div>
                                </div>
                            </div>
                            {/* fourth card panel */}
                            <div className="tab-pane fade" id='nav-react-api'>
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="text-success text-success text-center">React API Projects</h5>
                                    </div>
                                    <div className="card-body"></div>
                                </div>
                            </div>
                            {/* fifth card panel */}
                            <div className="tab-pane fade " id='nav-mern'>
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="text-success text-dark text-center">MERN Projects</h5>
                                    </div>
                                    <div className="card-body"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;
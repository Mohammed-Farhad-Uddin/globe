import React from 'react';
import './Service.css';
import './ServiceCard.css';
import shuttle from './image/fa_space-shuttle.png';
import ServiceCard from './ServiceCard';
import software from './image/software 1.png';
import ecommerce from './image/ecommerce.png';
import erp from './image/ERP.png';
import bulk from './image/bulk 1.png';
import graphic from './image/graphic.png';
import marketing from './image/marketing.png';
import { Link } from 'react-router-dom';


const Service = () => {
    return (
        <div className="service">
            <div className="container">
                <nav className="navbar pt-4">
                    <div className="container-fluid">
                        <div>

                        </div>
                        <div>
                            <Link to="/"><span className="ms-4 color "> Home</span></Link>
                            <span className="ms-4 active"> Services</span>
                            <Link to="/login" ><span className="ms-4 color"> Login</span></Link>
                        </div>
                    </div>
                </nav>
                <div className="d-flex space-jet-service my-4">
                    <div className="mt-2 pt-1">
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    <img className="shuttle mb-3" src={shuttle} alt="fa_space-shuttle" />
                </div>
                <div>
                    <p className='text-center text-white text-bold'>Services</p>
                    <h5 className='text-center text-white text-bold hh'>We provides services to our clients</h5>
                </div>

                <div class="row row-cols-3">
                    <ServiceCard image={software} title="Software Solution" />
                    <ServiceCard image={ecommerce} title="E-Commerce Solution" />
                    <ServiceCard image={erp} title="ERP Solution" />
                    <ServiceCard image={bulk} title="Bulk SMS Service" />
                    <ServiceCard image={graphic} title="Graphic Design" />
                    <ServiceCard image={marketing} title="Digital Marketing" />
                </div>
            </div>
        </div>
    );
};

export default Service;
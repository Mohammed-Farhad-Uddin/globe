import React from 'react';
import './ServiceCard.css';
import './Service.css';


const ServiceCard = ({ image, title }) => {
    return (
        <div>
            <div className="service-card">
                <img className='w-100' src={image} alt="" />
                <h5 className="text-center">{title}</h5>
                <p className="text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                <div className="d-flex justify-content-center">
                    <button className="more-btn">More</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
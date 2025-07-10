import React from 'react';
import Spline from '@splinetool/react-spline';
import './model.css';

const RobotModel = () => {
    return (
        <div className="robot-container">
            <Spline
                className='spline-robot' scene="https://prod.spline.design/8LTfphvoOAvHW7de/scene.splinecode"
            />
        </div>
    );
};

export default RobotModel; 

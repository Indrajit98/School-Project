import React from 'react';
import image from '../../../../assets/images/Program/program1.jpg'
import image2 from '../../../../assets/images/Program/program2.jpg'
import image3 from '../../../../assets/images/Program/program3.jpg'

const RecentPost = () => {
    return (
        <div className='recent-post-section'>
            <div className="container mx-auto">
                <div className="title">
                    <h3>From our blog</h3>
                    <h2>Recent Post</h2>
                </div>
                <div className='grid lg:grid-cols-3 gap-5'>
                    <div className="card" style={{ backgroundImage: `url(${image})` }}>
                        <div className="card-content">
                            <h4>8 ways to keep your heart forever young</h4>
                            <p>December 13, 2019 by Admin</p>
                            <div className='btn'>blog</div>
                        </div>
                    </div>
                    <div className="card" style={{ backgroundImage: `url(${image2})` }}>
                        <div className="card-content">
                            <h4>How Drugs Alter The Brain</h4>
                            <p>December 13, 2019 by Admin</p>
                            <div className='btn'>blog</div>
                        </div>
                    </div>
                    <div className="card" style={{ backgroundImage: `url(${image3})` }}>
                        <div className="card-content">
                            <h4>Red-Green Colour Blindness</h4>
                            <p>December 13, 2019 by Admin</p>
                            <div className='btn'>blog</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RecentPost;
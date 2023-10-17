import React from 'react';
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone, HiOutlineChat } from "react-icons/hi";
const ContactForm = () => {
    return (
        <div className='contact-section'>
            <div class="container mx-auto">
                <div className='title'>
                    <h3>Our care value</h3>
                    <h2>Contact Us</h2>
                </div>
                <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                    <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
                        <div className='card'>
                            <span className='icon'>
                                <HiOutlineMail />
                            </span>
                            <div>
                                <h4 >Email</h4>
                                <p >Our friendly team is here to help.</p>
                                <span>hello@merakiui.com</span>
                            </div>
                        </div>
                        <div className='card'>
                            <span className='icon'>
                                <HiOutlineChat />
                            </span>
                            <div>
                                <h4 >Live chat</h4>
                                <p >Our friendly team is here to help.</p>
                                <span>Star New Chat</span>
                            </div>
                        </div>
                        <div className='card'>
                            <span className='icon'>
                                <HiOutlineLocationMarker />
                            </span>
                            <div>
                                <h4 >Office</h4>
                                <p >Come say hello at our office HQ.</p>
                                <span>100 Smith Street Collingwood VIC 3066 AU</span>
                            </div>
                        </div>
                        <div className='card'>
                            <span className='icon'>
                                <HiOutlinePhone />
                            </span>
                            <div>
                                <h4 >Phone</h4>
                                <p >Mon-Fri from 8am to 5pm.</p>
                                <span>+88-01760272507</span>
                            </div>
                        </div>
                    </div>

                    <form class="contact-form">
                        <div className='input-name'>
                            <div className='name'>
                                <label>First Name</label>
                                <input type="text" className='  focus:ring-opacity-40' placeholder="John " />
                            </div>

                            <div className='name'>
                                <label>Last Name</label>
                                <input type="text" placeholder="Doe" />
                            </div>
                        </div>

                        <div>
                            <label>Email address</label>
                            <input type="email" placeholder="johndoe@example.com" />
                        </div>

                        <div>
                            <label>Message</label>
                            <textarea placeholder="Message"></textarea>
                        </div>

                        <button class="btn">
                            Send message
                        </button>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default ContactForm;
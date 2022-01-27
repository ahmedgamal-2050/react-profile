import React from 'react';
import ProfilePic from '../images/profile-pic.jpg';
import EmailIcon from '../images/email.svg';
import LinkedinIcon from '../images/linkedin.svg';

export default function Info() {
    return (
        <section className="info">
            <div>
                <img src={ProfilePic} className="profile-pic" />
            </div>
            <div className="text-center p-3">
                <h1 className="mb-1">Ahmed Gamal</h1>
                <p className="job-title mb-2">Frontend Developer</p>
                <a className="website-link mb-3"
                   target="_blank"
                   href="https://github.com/ahmedgamal-2050">github.com/ahmedgamal-2050</a>
                <div className="d-flex mb-3">
                    <a className="profile-btn btn-white"
                       target="_blank"
                       href="eng.ahmedgamal2050@gmail.com">
                        <img src={EmailIcon} className="btn-icon"/>
                        Email
                    </a>
                    <a className="profile-btn btn-main"
                       target="_blank"
                       href="https://www.linkedin.com/in/engahmedgamal2050/">
                        <img src={LinkedinIcon} className="btn-icon" />
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}

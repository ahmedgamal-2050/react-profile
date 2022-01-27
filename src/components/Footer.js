import React from 'react';
import TwitterIcon from '../images/twitter.svg';
import FacebookIcon from '../images/facebook.svg';
import InstagramIcon from '../images/instagram.svg';
import GithubIcon from '../images/github.svg';

export default function Footer() {
    return (
        <footer>
            <div className="d-flex">
                <a className="footer-icon" target="_blank"
                    href="https://twitter.com/EngJemmy">
                    <img src={TwitterIcon} />
                </a>
                <a className="footer-icon" target="_blank"
                    href="https://web.facebook.com/Eng.A.Jemmy">
                    <img src={FacebookIcon} />
                </a>
                <a className="footer-icon" target="_blank"
                    href="https://www.instagram.com/jimmyyy.11/">
                    <img src={InstagramIcon} />
                </a>
                <a className="footer-icon" target="_blank"
                   href="https://github.com/ahmedgamal-2050">
                    <img src={GithubIcon} />
                </a>
            </div>
        </footer>
    );
}
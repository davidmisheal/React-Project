import React from "react";

export default function Footer(params) {
    return (
        <footer className={params.name}>

            <div className="footer-socials">
                <img src={require('../imgs/facebook.png')} />
                <img src={require('../imgs/Instagram_icon.png')} />
                <img src={require('../imgs/twitter.png')} />
                <img src={require('../imgs/gmail.png')} />
            </div>

            <div className="footer-nav">
                <ul>
                    <li>About</li>
                    <li>Need Help?</li>
                    <li>Contact Guide</li>
                    <li>Privacy</li>
                    <li>Terms of Use</li>
                </ul>
            </div>
            <div className="footer-title">
                <img src={require('../imgs/image-nT9eQgiX_U-transformed-removebg-preview (1).png')} />
                <h3>MeetThePharaohs.com</h3>
            </div>
        </footer>
    )
}
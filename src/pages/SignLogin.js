import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function SignLogin() {
    const [isSignUpActive, setIsSignUpActive] = useState(false);

    const handleToggleForm = () => {
        setIsSignUpActive(!isSignUpActive);
    };

    return (
        <>
            <Nav />
            <div className="form-structor">
                <div className={`signup ${isSignUpActive ? "slide-up" : ""}`}>
                    <h2 className="form-title" onClick={handleToggleForm}><span>or</span>Sign up</h2>
                    <div className="form-holder">
                        <input type="text" className="input" placeholder="Name" />
                        <input type="email" className="input" placeholder="Email" />
                        <input type="password" className="input" placeholder="Password" />
                    </div>
                    <button className="submit-btn">Sign up</button>
                </div>
                <div className={`login ${isSignUpActive ? "" : "slide-up"}`}>
                    <div className="center">
                        <h2 className="form-title" onClick={handleToggleForm}><span>or</span>Log in</h2>
                        <div className="form-holder">
                            <input type="email" className="input" placeholder="Email" />
                            <input type="password" className="input" placeholder="Password" />
                        </div>
                        <button className="submit-btn">Log in</button>
                    </div>
                </div>
            </div>
			<Footer name='footer-main' />
        </>
    )
}

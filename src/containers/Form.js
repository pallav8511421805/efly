import React from 'react';

function Form(props) {
    return (
        <div className="footer_section layout_padding">
        <div className="container">
            <div className="footer_logo"><a href="index.html"><img src="images/footer-logo.png" /></a></div>
            <div className="input_bt">
                <input type="text" className="mail_bt" placeholder="Your Email" name="Your Email" />
                <span className="subscribe_bt" id="basic-addon2"><a href="#">Subscribe</a></span>
            </div>
        </div>
    </div>
    );
}

export default Form;
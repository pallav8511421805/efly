import React from 'react';
import * as yup from 'yup';
import {Formik,Form} from 'formik';
import { useFormik } from 'formik';

function Footer(props) {

    const schema = yup.object().shape({
        name: yup.string().required("Please enter your name."),
        email: yup.string().email("Please enter your vaild email id.").required("Please enter your email id."),
      password: yup.string().required("Please enter your password.")
      });
        const formik = useFormik({
          initialValues: {
            name: '',
            email: '',
            password:'',
          },
          validationSchema:schema,
          onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
          },
        });
        let {errors,handleBlur,handleSubmit,touched,values ,handleChange} = formik;
    return (
        <>
            <div className="footer_section layout_padding">
                <div className="container">
                    <div className="footer_logo"><a href="index.html"><img src="images/footer-logo.png" /></a></div>

                    <Formik validationSchema>
                        <Form onSubmit={handleSubmit}>
                        <div className="input_bt">
                        <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.name} className="mail_bt" placeholder="Your name" name="name" />
                        {errors.name || touched.name ?<p style={{color:"white"}}>{errors.name}</p>: ""}
                    </div>
                    <div className="input_bt">
                        <input type="email" 

                        onChange={handleChange} onBlur={handleBlur} 
                        value={values.email}
                        className="mail_bt" placeholder="Your email" name="email" />
                         {errors.email && touched.email ?<p style={{color:"white"}}>{errors.email}</p>: ""}
                    </div>
                    <div className="input_bt">
                        <input type="password" className="mail_bt" 
                        onChange={handleChange} onBlur={handleBlur} value={values.password}
                        placeholder="Your password" name="password" />
                        {errors.password && touched.password ?<p style={{color:"white"}}>{errors.password}</p>: ""}
                    </div>
                    <div style={{margin:"50px 0",textAlign:'center'}}>
                    <button style={{textAlign:"center",width:"200px",height:"40px",borderRadius:"15px",background:"rgb(242, 101, 34)",color:"white",fontSize:"20px"}} type="submit">Submit</button>
                    </div>
                        </Form>
                    </Formik>
                    
                    <div className="footer_menu">
                        <ul>
                            <li><a href="#">Best Sellers</a></li>
                            <li><a href="#">Gift Ideas</a></li>
                            <li><a href="#">New Releases</a></li>
                            <li><a href="#">Today's Deals</a></li>
                            <li><a href="#">Customer Service</a></li>
                        </ul>
                    </div>
                    <div className="location_main">Help Line  Number : <a href="#">+1 1800 1200 1200</a></div>
                </div>
            </div>
            <div className="copyright_section">
                <div className="container">
                    <p className="copyright_text">© 2020 All Rights Reserved. Design by <a href="https://html.design">Free html  Templates</a></p>
                </div>
            </div>
        </>
    );
}

export default Footer;
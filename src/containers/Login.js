import React from 'react';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { useFormik } from 'formik';
import { useState } from 'react';

function Login(props) {
    const [login, setlogin] = useState("logindata");

    const handlecart = () => {
        localStorage.setItem("user", "123456")
    }

    const schema = yup.object().shape({
        name: yup.string().required("Please enter your name."),
        email: yup.string().email("Please enter your vaild email id.").required("Please enter your email id."),
        password: yup.string().required("Please enter your password.")
    });
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            if (login === "logindata") {
                handlecart()
            } else {
                alert(JSON.stringify(values, null, 2));
            }

        },
    });
    let { errors, handleBlur, handleSubmit, touched, values, handleChange } = formik;

    return (
        <div className="footer_section layout_padding">
            <div className="container">
                <div className="footer_logo"><p style={{ color: "white", textAlign: "center", fontSize: "60px", fontWeight: "bold" }}>Login</p></div>

                <Formik validationSchema>
                    <Form onSubmit={handleSubmit}>
                        <div className="input_bt">
                            <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.name} className="mail_bt" placeholder="Your name" name="name" />
                            {errors.name || touched.name ? <p style={{ color: "white" }}>{errors.name}</p> : ""}
                        </div>
                        <div className="input_bt">
                            <input type="email"

                                onChange={handleChange} onBlur={handleBlur}
                                value={values.email}
                                className="mail_bt" placeholder="Your email" name="email" />
                            {errors.email && touched.email ? <p style={{ color: "white" }}>{errors.email}</p> : ""}
                        </div>
                        <div className="input_bt">
                            <input type="password" className="mail_bt"
                                onChange={handleChange} onBlur={handleBlur} value={values.password}
                                placeholder="Your password" name="password" />
                            {errors.password && touched.password ? <p style={{ color: "white" }}>{errors.password}</p> : ""}
                        </div>
                        <div style={{ margin: "50px 0", textAlign: 'center' }}>
                            <button style={{ textAlign: "center", width: "200px", height: "40px", borderRadius: "15px", background: "rgb(242, 101, 34)", color: "white", fontSize: "20px" }} type="submit">Submit</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default Login;
import React, { useState } from 'react'
import * as yup from 'yup'
import { Form, Formik, useFormik } from 'formik'
import '../App.css'

function Login(props) {
  const [usertype, setusertype] = useState('logpage')
  const [reset, setreset] = useState(false)

  let initialVal
  let mainschema
  if (usertype == 'logpage' && reset === false) {
    initialVal = {
      password: '',
      email: '',
    }
    mainschema = yup.object().shape({
      email: yup
        .string()
        .email('Please enter your vaild email id.')
        .required('Please enter your email id.'),
      password: yup.string().required('Please enter your password.'),
    })
  } else if (usertype == 'Signup' && reset === false) {
    initialVal = {
      name: '',
      password: '',
      email: '',
    }
    mainschema = yup.object().shape({
      name: yup.string().required('Please enter your name.'),
      email: yup
        .string()
        .email('Please enter your vaild email id.')
        .required('Please enter your email id.'),
      password: yup.string().required('Please enter your password.'),
    })
  } else if (reset == true) {
    initialVal = {
      email: '',
    }
    mainschema = yup.object().shape({
      email: yup
        .string()
        .email('Please enter your vaild email id.')
        .required('Please enter your email id.'),
    })
  }

  let schema = mainschema

  const handlelogin = (values) => {
    localStorage.setItem('user', '123')
  }

  const formik = useFormik({
    initialValues: initialVal,
    validationSchema: schema,
    onSubmit: (values) => {
      if (usertype === 'logpage' && reset === false) {
        handlelogin(values)
      } else {
        alert(JSON.stringify(values, null, 2))
      }
    },
  })
  let {
    errors,
    handleBlur,
    handleSubmit,
    touched,
    values,
    handleChange,
  } = formik
  return (
    <div className="container">
      <div className="section-title">
        {reset ? (
          <h2 className="logtag">Forget password</h2>
        ) : usertype === 'logpage' ? (
          <h2 className="logtag">Log in</h2>
        ) : (
          <h2 className="logtag">Sign up</h2>
        )}
      </div>
      <div className="row mt-5">
        <div className="col-lg-12 mt-5 mt-lg-0">
          <Formik validationSchema>
            <Form onSubmit={handleSubmit} className="php-email-form">
              <>
                {usertype === 'logpage' ? null : (
                  <>
                    <div className="row justify-content-center">
                      <div className="col-md-6 form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control shadow-none d-block"
                          id="name"
                          placeholder="Your Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                        />
                      </div>
                      {errors.name || touched.name ? (
                        <div className="text-center logerror">
                          {errors.name}
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-md-6 form-group">
                        <input
                          type="email"
                          className="form-control shadow-none d-block"
                          name="email"
                          id="email"
                          placeholder="Your Email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                      </div>
                      {errors.email && touched.email ? (
                        <div className="text-center logerror">
                          {errors.email}
                        </div>
                      ) : (
                        ''
                      )}
                    </div>

                    <div className="row justify-content-center">
                      <div className="col-md-6 form-group">
                        <input
                          type="password"
                          name="password"
                          className="form-control shadow-none d-block"
                          id="password"
                          placeholder="Your password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                      </div>
                      {errors.password && touched.password ? (
                        <div className="text-center logerror">
                          {errors.password}
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  </>
                )}

                {reset ? (
                  <div className="row justify-content-center">
                    <div className="col-md-6 form-group">
                      <input
                        type="email"
                        className="form-control shadow-none d-block"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                    </div>
                    {errors.email && touched.email ? (
                      <div className="text-center logerror">{errors.email}</div>
                    ) : (
                      ''
                    )}
                  </div>
                ) : usertype == 'logpage' ? (
                  <>
                    <div className="row justify-content-center">
                      <div className="col-md-6 form-group">
                        <input
                          type="email"
                          className="form-control shadow-none d-block"
                          name="email"
                          id="email"
                          placeholder="Your Email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                      </div>
                      {errors.email && touched.email ? (
                        <div className="text-center logerror">
                          {errors.email}
                        </div>
                      ) : (
                        ''
                      )}
                    </div>

                    <div className="row justify-content-center">
                      <div className="col-md-6 form-group">
                        <input
                          type="password"
                          name="password"
                          className="form-control shadow-none d-block"
                          id="password"
                          placeholder="Your password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                      </div>
                      {errors.password && touched.password ? (
                        <div className="text-center logerror">
                          {errors.password}
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  </>
                ) : null}
              </>
              {reset ? (
                <div className="text-center my-3">
                  <button className="forgetbtn" type="button">
                    Change password
                  </button>
                </div>
              ) : usertype === 'logpage' ? (
                <div className="text-center my-3">
                  <button className="logbtn1" type="submit">
                    Log in
                  </button>
                </div>
              ) : (
                <div className="text-center my-3">
                  <button className="logbtn1" type="submit">
                    Sign up
                  </button>
                </div>
              )}
              <>
                {usertype === 'logpage' && reset === false ? (
                  <div className="text-center my-3">
                    <button className="forgetbtn" type="button">
                      Sign in With Google
                    </button>
                  </div>
                ) : null}
                {reset ? null : usertype === 'logpage' ? (
                  <div className="text-center my-3">
                    <button
                      className="forgetbtn"
                      onClick={() => {
                        setreset(true)
                      }}
                    >
                      Forgot password ?
                    </button>
                  </div>
                ) : null}
              </>
              <div className="text-center">
                {reset ? null : usertype === 'logpage' ? (
                  <p className="logtag1">
                    Create a new account{' '}
                    <span>
                      <a
                        className="logbtn"
                        onClick={() => {
                          setusertype('Signup')
                          setreset(false)
                        }}
                      >
                        Log in
                      </a>
                    </span>
                  </p>
                ) : (
                  <p className="logtag1">
                    Already have an account?{' '}
                    <span>
                      <a
                        className="logbtn"
                        onClick={() => {
                          setusertype('logpage')
                          setreset(false)
                        }}
                      >
                        Sign up
                      </a>
                    </span>
                  </p>
                )}
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Login

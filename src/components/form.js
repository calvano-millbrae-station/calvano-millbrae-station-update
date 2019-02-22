import React, { Component } from 'react'
import { FormGroup, Label, Input } from 'reactstrap'
import { Formik } from 'formik'
import * as Yup from 'yup'

const supportString = 'Transportation drives development, and the transportation system we build dictates the shape of real estate. For the past several decades federal transportation investments have focused primarily on building roads, as the market wanted. However, today’s real estate market is different, with consistently strong demand for homes and offices in walkable urban places—which are in short supply. We believe that our project aligns with the smart growth principles by complying with 9 out of 10 of their commandments.'

// TODO distiguish if first or 2nd submit buttons were pressed
export default class extends Component {
  state = {
    isRegisterSelected: false
  }

  render() {
    return (
      <Formik
        initialValues={{ name: '', email: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            alert(`Thank you for your ${this.props.isContact ? 'message.' : 'support.'}`);
            setSubmitting(false);
          }, 500);
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .required('Name is required'),
          email: Yup.string()
            .email()
            .required('Email is required'),
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            // handleSubmit,
            handleReset,
          } = props;
          return (
            <form method="POST" action="https://formspree.io/calvano@millbraestation.com">
              <label htmlFor="name" style={{ display: 'block' }}>
                Name
              </label>
              <input
                id="name"
                name="name"
                placeholder="Enter your name name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.name && touched.name ? 'text-input error' : 'text-input'
                }
              />
              {errors.name &&
                touched.name && <div className="input-feedback">{errors.name}</div>}

              <label htmlFor="email" style={{ display: 'block' }}>
                Email
              </label>
              <input
                id="email"
                name="email"
                placeholder="Enter your email"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.email && touched.email ? 'text-input error' : 'text-input'
                }
              />
              {errors.email &&
                touched.email && <div className="input-feedback">{errors.email}</div>}

              {!this.state.isRegisterSelected && !this.props.isContact &&
                <FormGroup>
                  <Label for="letter">Letter of Support</Label>
                  <Input readOnly type="textarea" name="letter" size="200" id="letter" value={supportString} onChange={handleChange} onBlur={handleBlur} />
                </FormGroup>
              }

              {this.props.isContact ? (
                <FormGroup>
                  <Label for="message">Message</Label>
                  <Input type="textarea" name="message" size="200" id="message" value={values.message} onChange={handleChange} onBlur={handleBlur} placeholder="Type your message here" />
                </FormGroup>
              ) : (
                <FormGroup tag="fieldset">
                  {/* <legend>Radio Buttons</legend> */}
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" name="updates-only" id="updates-only" onClick={() => this.setState({ isRegisterSelected: !this.state.isRegisterSelected })} value={values.getInvolved}/>{' '}
                      Register for Updates Only
                    </Label>
                  </FormGroup>
                </FormGroup>
              )
              }
              <button
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                Reset
              </button>
              <button onClick={() => {
                if(this.props.isContact) {
                  values.getInvoled = ""
                  values.letter = ""
                } else {
                  values.message = ""
                  if (this.state.isRegisterSelected) {
                    values.getInvoled = "Register for Updates Only"
                  } else {
                    values.getInvoled = "Supports Gateway"
                    values.letter = supportString
                  }
                } }}
                type="submit"
                disabled={isSubmitting}>
                Submit
              </button>
            </form>
          );
        }}
      </Formik>
    )
  }
}

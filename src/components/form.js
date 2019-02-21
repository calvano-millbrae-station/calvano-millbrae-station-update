import React, { Component } from 'react'
import { FormGroup, Label, Input } from 'reactstrap'
import { Formik } from 'formik'
import * as Yup from 'yup'

const supportString = 'I support the Millbrae station project because it will bring several benefits to the community such as: creating a retail promenade where residents and commuters will experience an active people-friendly paseo bridging the connection between the downtown and the largest multimodal public transit artery in the Bay Area, improving pedestrian, bike, and transit paths, bettering the signalization and crosswalk at Chadbourn, and funding the community through the transit occupancy tax. I support!'

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
            <form method="POST" action="https://formspree.io/jdavet1244@gmail.com">
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

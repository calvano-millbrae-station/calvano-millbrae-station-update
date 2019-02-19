import React, { Component } from 'react'
import { FormGroup, Label, Input } from 'reactstrap'
import { Formik } from 'formik'
import * as Yup from 'yup'

const supportString = 'I SUPPORT THE GATEWAY PROPOSAL AT MILLBRAE BART STATION, WHICH CREATES CRITICALLY-NEEDED RENTAL HOUSING (400 HOMES) AND WILL ADD MORE THAN $400,000,000 TO THE PROPERTY TAX ROLLS FOR THE CITY OF MILLBRAE. THE PROPOSAL BENEFITS LOCAL MERCHANTS, CREATES ATTRACTIVE OPEN SPACE AND INCLUDES A BIKE/PEDESTRIAN BRIDGE ON THE BAY TRAIL. WITH THE NEW COMMUNITY LOCATED ADJACENT TO THE CALTRAIN AND BART STATION, WE BELIEVE THIS IS AN ENVIRONMENTALLY-FRIENDLY WAY TO GROW MILLBRAE, BOTH FOR RESIDENTS AND EXISTING BUSINESSES. THIS PROPOSAL PROVIDES RETAIL SPACE, OFFICE AND A HOTEL, PLUS 55 AFFORDABLE VETERAN-PREFERRED RENTALS, ALONG WITH $1,400,000 IN SCHOOL FEES FOR MILLBRAE. I SUPPORT GATEWAY!'

// TODO distiguish if first or 2nd submit buttons were pressed
export default class extends Component {
  state = {
    isSupportSelected: false
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
                      <Input type="radio" id="updates-only" checked={!this.state.isSupportSelected} onClick={() => this.setState({ isSupportSelected: false })} value={values.getInvolved}/>{' '}
                      Register for Updates Only
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" id="get-involved" checked={this.state.isSupportSelected} onClick={() => this.setState({ isSupportSelected: true })} value={values.getInvolved} />{' '}
                      Support Gateway at Millbrae Station
                    </Label>
                  </FormGroup>
                </FormGroup>
              )
              }
              {this.state.isSupportSelected &&
                <FormGroup>
                  <Label for="letter">Letter of Support</Label>
                  <Input readOnly type="textarea" name="letter" size="200" id="letter" value={supportString} onChange={handleChange} onBlur={handleBlur} />
                </FormGroup>
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
                  if (this.state.isSupportSelected) {
                    values.getInvoled = "Supports Gateway"
                    values.letter = supportString
                  } else {
                    values.getInvoled = "Register for Updates Only"
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

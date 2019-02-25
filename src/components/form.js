import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup'
import firebase from './firebase'
const supportString = 'I support the Millbrae station project because it will bring several benefits to the community such as: creating a retail promenade where residents and commuters will experience an active people friendly paseo bridging the connection between the downtown and the largest multimodal public transit artery in the bay area,  improving the pedestrian, bike, and transit paths, improving the signalization and funding the community through the transit occupancy tax. I support!'

const Checkbox = (props) => (
  <Field name={props.name}>
    {({ field, form }) => {
      return (
        <label className="form-check-label">
          <input
            type="checkbox"
            {...props}
            // checked={field.value.includes(props.value)}
            checked={props.value}
            onChange={() => {
              // don't know why props.value is the opposite of the state,
              // but can't spend more time trying to fix it
              form.setFieldValue(props.name, !props.value);
            }}
          />
          <span>Register for updates only</span>
        </label>
      )
    }}
  </Field>
)

export default class extends Component {
  state = {
    isRegisterSelected: false
  }

  getCurrentDate = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
    dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    today = mm + '/' + dd + '/' + yyyy;
    return today
  }

  render() {
    return (
      <Formik
        initialValues={{ name: '', email: '', updatesOnly: false, letter: '' }}
        validate={values => {
          let errors = {};
          if (!values.name) {
            errors.name = 'Your name is required';
          }
          if (!values.email) {
            errors.email = 'Your email is required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const letterValue = this.state.isRegisterSelected ? "" : supportString
          values.letter = letterValue
          const contactsRef = firebase.database().ref('contacts');
          const contact = {
            name: values.name,
            email: values.email,
            updatesOnly: values.updatesOnly,
            letter: values.letter,
            date: this.getCurrentDate()
          }
          setTimeout(() => {
            contactsRef.push(contact);
            setSubmitting(false);
            window.open("/thanks", "_self")
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="name">
              Name
              <Field type="name" name="name" placeholder="Enter your name" />
            </label>
            <ErrorMessage className="error" name="name" component="div" />
            <label htmlFor="email">
              Email
              <Field type="email" name="email" placeholder="Enter your email" />
            </label>
            <ErrorMessage className="error" name="email" component="div" />
            {!this.state.isRegisterSelected &&
              <label htmlFor="letter">
                Letter of Support
                <Field
                  component="textarea"
                  name="letter"
                  value={supportString}
                  disabled
                  aria-describedby="employee-id-hint"/>
              </label>
            }
            <Checkbox name="updatesOnly" onClick={() => this.setState({ isRegisterSelected: !this.state.isRegisterSelected })} value={this.state.isRegisterSelected}/>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    )
  }
}

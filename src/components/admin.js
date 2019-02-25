import React from 'react'
import firebase from './firebase'
import { CSVLink } from "react-csv";
import { Button, Table, Container, Row, Col } from 'reactstrap'
import Layout from './layout'

export default class extends React.Component {

  state = {
    contacts: []
  }

  componentDidMount() {
    const contactsRef = firebase.database().ref('contacts');
    contactsRef.on('value', (snapshot) => {
      let contacts = snapshot.val();
      let newState = [];
      for (let contact in contacts) {
        newState.push({
          id: contact,
          name: contacts[contact].name,
          email: contacts[contact].email,
          updatesOnly: contacts[contact].updatesOnly,
          date: contacts[contact].date
        });
      }
      this.setState({
        contacts: newState
      });
    });
  }

  buttonOnClick = () => {
    this.props.auth.logout()
    // can't get redirects to work via auth0 api
    // so I'm cheating
    window.open("/", "_self")
  }

  render() {
    return (
      <Layout isAdmin>
        <Container>
          <Row>
            <Col>
              <h1>Admin Page</h1>
              <h2 className="mt-3">Authorized Personnel Only</h2>
              <Button onClick={this.buttonOnClick}>Logout</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table className="mt-5">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Updates only?</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.contacts.map((contact, index) => (
                    <tr key={`tr-${contact.id}`}>
                      <th key={`th-${contact.id}`} scope="row">{index + 1}</th>
                      <td key={`name-${contact.id}`}>{contact.name}</td>
                      <td key={`email-${contact.id}`}>{contact.email}</td>
                      <td key={`updates-${contact.id}`}>{contact.updatesOnly}</td>
                      <td key={`date-${contact.id}`}>{contact.date}</td>
                    </tr>
                  ))
                  }
                </tbody>
              </Table>
              <CSVLink data={this.state.contacts}>Download csv file</CSVLink>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

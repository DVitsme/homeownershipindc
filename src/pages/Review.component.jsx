import React, { Component } from "react";
import { firestore } from "../firebase/firebase";

import { Container, Row } from "reactstrap";
import CardValue from "../components/Review/card/cardContact.component";
import CardSurveyConatainer from "../components/Review/card/cardSurvey/cardSurveyConatainer.component";

export default class Review extends Component {
  state = { contacts: [], surveys: [] };
  unsubscribeFromFirestore = null;

  componentDidMount = async () => {
    this.unsubscribeFromFirestore = firestore
      .collection("contact")
      .onSnapshot((snapshot) => {
        const contacts = snapshot.docs.map((data) => {
          return { ...data.data() };
        });
        this.setState((prevState) => ({ ...prevState, contacts }));
      });
    this.unsubscribeFromFirestore = firestore
      .collection("survey")
      .onSnapshot((snapshot) => {
        const surveys = snapshot.docs.map((data) => {
          return { ...data.data() };
        });
        this.setState((prevState) => ({ ...prevState, surveys }));
      });
  };
  componentWillUnmount = () => {
    this.unsubscribeFromFirestore();
  };
  render() {
    const { contacts, surveys } = this.state;
    if (contacts[0]) {
      contacts.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);
    }
    return (
      <div className="mb-5">
        <Container className="my-5 pb-5 mb-5">
          <div>
            <h2>All Contacts</h2>
          </div>
          <Row>
            {contacts.map((contact, index) => {
              if (contact.name === "" && contact.email === "") {
                return null;
              }
              if (contact.message.split(" ").length > 2) {
                return <CardValue data={contact} key={index} index={index} />;
              }
              return null;
            })}
            {contacts.map((contact, index) => {
              if (contact.name === "" && contact.email === "") {
                return null;
              }
              if (contact.message.split(" ").length <= 2) {
                return (
                  <CardValue
                    data={contact}
                    key={index}
                    index={index}
                    bg="black"
                  />
                );
              }
              return null;
            })}
          </Row>
          <div>
            <h2>All Surveys</h2>
          </div>
          {surveys.map((surveys, index) => {
            return <CardSurveyConatainer data={surveys} key={index} />;
          })}
        </Container>
      </div>
    );
  }
}

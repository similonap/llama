import React, { FC } from 'react';
import { Container, Form } from 'react-bootstrap';
import styles from './ContactScreen.module.css';
import emailjs from '@emailjs/browser';

interface ContactScreenProps {}

const ContactScreen: FC<ContactScreenProps> = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const send = async() => {
    console.log("Sending email");
    let result = await emailjs.send("service_4ijea3k","template_or0lwbn",{
      from_name: name,
      to_name: "Andie Similon",
      message: message,
      reply_to: email,
      });
    alert("Message sent, we'll get back to you soon!");
  }

  return (
  <div className={styles.ContactScreen}>
    <Container>
      <Form>
        <Form.Group controlId="form.Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="form.Email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="form.Textarea">
            <Form.Label>Comment</Form.Label>
            <Form.Control as="textarea" rows={3} value={message} onChange={(e) => setMessage(e.target.value)}/>
        </Form.Group>
      </Form>
      <button type="button" className="btn btn-primary" onClick={() => send()}>Submit</button>
    </Container>
    
  </div>
);
  }

export default ContactScreen;

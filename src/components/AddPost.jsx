import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddPost = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   contact: '',
  // });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const contactChangeHandler = (event) => {
    setContact(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reqBody = {
      name,
      email,
      contact
    }
    console.log(reqBody);
    axios.post('http://localhost:8080/api/users', reqBody)
      .then((response) => {
        console.log('Data Added')
      })
      .catch((err) => {
        console.error(err);
      });
      setName('');
      setEmail('');
      setContact('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="Name" value={name} onChange={nameChangeHandler} required/>
        
        <Form.Label>Email</Form.Label>
        <Form.Control placeholder="Email" value={email} onChange={emailChangeHandler} required/>

        <Form.Label>Contact</Form.Label>
        <Form.Control type="number" placeholder="Contact" value={contact} onChange={contactChangeHandler} required/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default AddPost;

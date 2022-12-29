import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddPost = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
  });

  // const handleChange = (e) => {
  //   if(e.target.type ==)
  //   const target = event.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value
  //   });
  // };

  const handleSubmit = (e) => {
    console.log('in submit');
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="Name" value={name} />

        <Form.Label>Email</Form.Label>
        <Form.Control placeholder="Email" value={email} />

        <Form.Label>Contact</Form.Label>
        <Form.Control placeholder="Contact" value={contact} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default AddPost;

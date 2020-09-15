import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import Avatar from 'react-avatar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" className="justify-content-between">
      <Navbar.Brand href="#home"><FontAwesomeIcon icon={['fab', 'react']} /> Sprint Status</Navbar.Brand>
        <Form inline>
          <Button variant="outline-info"><FontAwesomeIcon icon="check" /> Check In</Button>
          <Avatar
              email="matthew.young@bisonworks.com"
              size="32"
              round={true} className="ml-2"
            />          
      </Form>        
    </Navbar>
  );
};

import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../assets/IdPass.css";
import { ListGroup } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


export const Recieve = () => {
    const navi = useNavigate()
  return (
    <Form className='formFirst'>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Unique Key</Form.Label>
      <Form.Control type="password" placeholder="Unique Key" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <ListGroup className='lstgrp'>
      {/* <input type='file' className='sendBut'/> */}
    <Button variant="primary" type="submit" className='recvBut'>
      Receive
    </Button>
    <Button as="input" type="submit" className='recvBut' value="Back" onClick={()=> navi('/')}/>
    </ListGroup>
    
  </Form>
  )
}

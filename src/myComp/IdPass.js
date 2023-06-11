import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../assets/IdPass.css";
import { ListGroup } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {ref,uploadBytesResumable} from "firebase/storage"
// import { dataRef } from "./myfirebase";
import { storage } from "./myfirebase";

export const IdPass = () => {

  // let userfol;
  const [Name, setName] = useState('');
  const [image , setImage] = useState('');
const upload = ()=>{
  if(image == null) return;
    const fileRef = ref(storage,`${Name}/${image.name}`)
    const uploadTask = uploadBytesResumable(fileRef,image)

    uploadTask.on('state_changed',(snapshot)=>{
      let prog = (snapshot.bytesTransferred/snapshot.totalBytes)*100
      console.log(prog)

    },(error) =>{
      console.log('err dec')
    },()=>{
      alert('succ')
    })
  //   userfol = Name;
  //   for (let i = 0; i < image.length; i++) {
  //     const imageRef = storage.ref(`${Name}/`+image[i].name).put(image[i])
  // .on("state_changed" , alert(userfol) , alert);


      
  // imageRef();
    
  

  
}

  const navi = useNavigate()
  return (
        <Form className='formFirst'>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Unique Key</Form.Label>
        <input type='text' onChange={(e) => {setName(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <ListGroup className='lstgrp'>
        <input type='file' multiple className='sendBut' onChange={(e)=>{setImage(e.target.files)}}/>
      <Button variant="primary" type="submit" className='recvBut' onClick={upload}>
        Send
      </Button>
      <Button as="input" type="submit" className='recvBut' value="Back" onClick={()=> navi('/')}/>
      </ListGroup>
      
    </Form>
  )
}

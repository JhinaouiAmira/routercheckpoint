import React from 'react';
import {Form,FormControl,Button } from "react-bootstrap"
function NavBar({setInputSearch}) {
  return (
  <Form className="d-flex" style={{margin:'50px 400px' }} >
  <FormControl
    type="search"
    placeholder="Search"
    className="me-2"
    aria-label="Search"
    onChange={(event)=>setInputSearch(event.target.value)}
  />
  <Button variant="outline-success">Search</Button>
</Form>
);
}

export default NavBar;

// src/Success.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';

const Show = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  if (!formData) {
    return <p>No form data available.</p>;
  }

  return (
    <div>
      <h1>Form Submitted Successfully!</h1>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Username: {formData.username}</p>
      <p>Email: {formData.email}</p>
      <p>Phone No.: {formData.phone}</p>
      <p>Country: {formData.country}</p>
      <p>City: {formData.city}</p>
      <p>PAN No.: {formData.panNo}</p>
      <p>Aadhar No.: {formData.aadharNo}</p>
    </div>
  );
};

export default Show;

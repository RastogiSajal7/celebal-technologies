// src/Form.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
    countryCode: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch country data from an API
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const countryData = data.map(country => ({
          name: country.name.common,
          code: country.idd?.root ? `${country.idd.root}${country.idd.suffixes ? country.idd.suffixes[0] : ''}` : ''
        })).sort((a, b) => a.name.localeCompare(b.name));
        setCountries(countryData);
      });
  }, []);

  useEffect(() => {
    // Set country code when country changes
    const selectedCountry = countries.find(c => c.name === formData.country);
    setFormData(prevState => ({
      ...prevState,
      countryCode: selectedCountry ? selectedCountry.code : '',
      phone: selectedCountry ? selectedCountry.code : '',
      city: '', // Reset city when country changes
    }));

    // Update cities based on the selected country (example cities)
    const cityData = {
      India: ['Mumbai', 'Delhi'],
      USA: ['New York', 'Los Angeles'],
    };
    setCities(cityData[formData.country] || []);
  }, [formData.country, countries]);

  const validate = () => {
    let errors = {};

    if (!formData.firstName) errors.firstName = 'First Name is required';
    if (!formData.lastName) errors.lastName = 'Last Name is required';
    if (!formData.username) errors.username = 'Username is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.password) errors.password = 'Password is required';
    if (!formData.phone) errors.phone = 'Phone No. is required';
    if (!formData.country) errors.country = 'Country is required';
    if (!formData.city) errors.city = 'City is required';
    if (!formData.panNo) errors.panNo = 'PAN No. is required';
    if (!formData.aadharNo) errors.aadharNo = 'Aadhar No. is required';

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/show', { state: { formData } });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Registration form</h1>
      <div>
        <label>First Name:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        {errors.firstName && <p>{errors.firstName}</p>}
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        {errors.lastName && <p>{errors.lastName}</p>}
      </div>
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <div className="password-container">
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? 'Hide' : 'Show'}
        </button>
        {errors.password && <p>{errors.password}</p>}
        </div>
      </div>
      <div>
        <label>Country:</label>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select Country</option>
          {countries.map(country => (
            <option key={country.name} value={country.name}>{country.name}</option>
          ))}
        </select>
        {errors.country && <p>{errors.country}</p>}
      </div>
      <div>
        <label>Phone No.:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder={formData.countryCode}
        />
        {errors.phone && <p>{errors.phone}</p>}
      </div>
      <div>
        <label>City:</label>
        <select name="city" value={formData.city} onChange={handleChange} disabled={!formData.country}>
          <option value="">Select City</option>
          {cities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
        {errors.city && <p>{errors.city}</p>}
      </div>
      <div>
        <label>PAN No.:</label>
        <input type="text" name="panNo" value={formData.panNo} onChange={handleChange} />
        {errors.panNo && <p>{errors.panNo}</p>}
      </div>
      <div>
        <label>Aadhar No.:</label>
        <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} />
        {errors.aadharNo && <p>{errors.aadharNo}</p>}
      </div>
      <button type="submit" disabled={Object.keys(errors).length !== 0}>
        Submit
      </button>
    </form>
  );
};

export default Form;

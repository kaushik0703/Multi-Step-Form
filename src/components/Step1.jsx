import React from 'react';

const Step1 = ({ formData, handleInputChange }) => (
  <>
    <h2>Step 1: Personal Information</h2>
    <label>
      Full Name:
      <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} />
    </label>
    <br />
    <label>
      Email Address:
      <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
    </label>
    <br />
    <label>
      Date of Birth:
      <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} />
    </label>
  </>
);

export default Step1;

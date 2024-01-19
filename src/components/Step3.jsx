import React from 'react';

const Step3 = ({ formData, handleInputChange }) => (
  <>
    <h2>Step 3: Account Setup</h2>
    <label>
      Username:
      <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
    </label>
    <br />
    <label>
      Password:
      <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
    </label>
    <br />
    <label>
      Confirm Password:
      <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} />
    </label>
  </>
);

export default Step3;
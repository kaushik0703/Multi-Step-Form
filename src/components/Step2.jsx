import React from 'react';
import indianStates from './indianStates';

const Step2 = ({ formData, handleInputChange }) => (
  <>
    <h2>Step 2: Address Information</h2>
    <label>
      Street Address:
      <input type="text" name="streetAddress" value={formData.streetAddress} onChange={handleInputChange} />
    </label>
    <br />
    <label>
      City:
      <input type="text" name="city" value={formData.city} onChange={handleInputChange} />
    </label>
    <br />
    <label htmlFor="state">State:</label>
    <select
        id="state"
        name="state"
        value={formData.state}
        onChange={handleInputChange}
        required
        style={{
          width: '100%',
          padding: '8px',
          marginBottom: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          height: '35px',
        }}
      >
        <option value="" disabled>
          Select State
        </option>
        {indianStates.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
    <br />
    <label>
      Zip Code:
      <input type="text" name="zipCode" value={formData.zipCode} onChange={handleInputChange} />
    </label>
  </>
);

export default Step2;

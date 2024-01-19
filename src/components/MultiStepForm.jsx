import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import './MultiStepForm.css';
import { useNavigate } from 'react-router-dom';

const MultiStepForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    dob: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => {
    // Validation logic for the current step
    if (validateCurrentStep()) {
      // If validation passes, move to the next step
      setStep(step + 1);
      setErrorMessage('');
    }
  };

  const handleSubmit = () => {
    // Validate fields for the final step before submitting
    if (validateCurrentStep()) {
      setErrorMessage('');
      // Simulate form submission (replace this with your actual submission logic)
      setTimeout(() => {
        // Redirect to success page after submission
        navigate('/success');
      }, 1000);
    }
  };

  const handlePrev = () => {
    // Move to the previous step
    setStep(step - 1);
    setErrorMessage('');
  };

  const validateCurrentStep = () => {
    // Validation logic for the current step fields
    switch (step) {
      case 1:
        // Validation for Step 1 fields
        if (!formData.fullName || formData.fullName.length < 3) {
            setErrorMessage('Full Name is required and must be at least 3 characters.');
          return false;
        }
        if (!formData.email || !isValidEmail(formData.email)) {
            setErrorMessage('Please enter a valid email address.');
          return false;
        }
        if (!formData.dob) {
            setErrorMessage('Date of Birth is required.');
          return false;
        }
        break;
      case 2:
        // Validation for Step 2 fields
        if (!formData.streetAddress || formData.streetAddress.length < 5) {
            setErrorMessage('Street Address is required and must be at least 5 characters.');
          return false;
        }
        if (!formData.city || formData.city.length < 3) {
            setErrorMessage('City is required and must be at least 3 characters.');
          return false;
        }
        if (!formData.state) {
            setErrorMessage('State is required.');
          return false;
        }
        if (!formData.zipCode || !isValidZipCode(formData.zipCode)) {
            setErrorMessage('Please enter a valid Zip Code.');
          return false;
        }
        break;
      case 3:
        // Validation for Step 3 fields
        if (!formData.username || formData.username.length < 3) {
            setErrorMessage('Username is required and must be at least 3 characters.');
          return false;
        }
        if (!formData.password || formData.password.length < 6) {
            setErrorMessage('Password is required and must be at least 6 characters.');
          return false;
        }
        if (formData.password !== formData.confirmPassword) {
            setErrorMessage('Passwords do not match.');
          return false;
        }
        break;
      default:
        return true;
    }

    return true;
  };

  const isValidEmail = (email) => {
    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidZipCode = (zipCode) => {
    // zip code validation
    const zipCodeRegex = /^\d{6}$/;
    return zipCodeRegex.test(zipCode);
  };

  return (
    <div className="container">
      <div className="step-container">
        {/* Error Message */}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {/* Steps */}
        {step === 1 && <Step1 formData={formData} handleInputChange={handleInputChange} />}
        {step === 2 && <Step2 formData={formData} handleInputChange={handleInputChange} />}
        {step === 3 && <Step3 formData={formData} handleInputChange={handleInputChange} />}
      </div>

      {/* Navigation buttons */}
      <div className="button-container">
        {step > 1 && <button onClick={handlePrev}>Previous</button>}
        {step < 3 ? <button onClick={handleNext}>Next</button> : <button onClick={handleSubmit}>Submit</button>}
      </div>
    </div>
  );
};

export default MultiStepForm;
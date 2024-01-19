# Multi-Step Form with React

A modern and customizable multi-step form with validation using React. This form guides users through multiple steps, each with its own set of form fields and validation logic.

## Features

- **Number of Steps:** The form has three steps, each with relevant form fields.
- **Form Fields:** Fields include personal information, address information, and account setup details.
- **Validation Logic:** Client-side validation for required fields, email formats, date formats, and more.
- **Navigation:** Users can navigate between steps, go back to the previous step, and submit the form.

## Form Fields

### Step 1: Personal Information

- Full Name (text input)
- Email Address (email input)
- Date of Birth (date input)

### Step 2: Address Information

- Street Address (text input)
- City (text input)
- State (dropdown/select input)
- Zip Code (numeric input)

### Step 3: Account Setup

- Username (text input)
- Password (password input)
- Confirm Password (password input)

## Validation Logic

1. **Full Name:** Required, minimum length 3 characters.
2. **Email Address:** Required, must be a valid email format.
3. **Date of Birth:** Required, must be a valid date.
4. **Street Address:** Required, minimum length 5 characters.
5. **City:** Required, minimum length 3 characters.
6. **State:** Required (selected from the dropdown).
7. **Zip Code:** Required, must be a valid numeric format.
8. **Username:** Required, minimum length 3 characters.
9. **Password:** Required, minimum length 6 characters.
10. **Confirm Password:** Required, must match the password field.

## Getting Started

1. Clone this repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Customization

- Add your own form validation logic or modify existing rules.
- Style the form components and pages according to your design preferences.
- Extend the form with additional steps or fields as needed.

## Technologies Used

- React
- React Router (for navigation)

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. All contributions are welcome!

Kaushik Moralwar

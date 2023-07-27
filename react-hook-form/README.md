# MembershipForm - React Component with TypeScript and React Hook Form

## Description

MembershipForm is a simple React component created to train and test the [React Hook Form](https://react-hook-form.com/) library. It provides a basic form with fields for first name, last name, email, phone number, a radio button for membership plans, and a comments section. The form is designed to collect user data and demonstrate the usage of React Hook Form's features for form validation, state management, and submission handling.

## Features

- Form validation with React Hook Form.
- State management for form data with React Hook Form's `useForm` hook.
- Handling form submission and displaying submitted data.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/mahyar-moazezi/React-Hook-Form-Validation.git
```

1.Navigate to the project directory:
cd membership-form
2.Install the dependencies:
npm install
Running the App
To run the app locally, use the following command:

bash
Copy code
npm start
The app will be available at http://localhost:3000.

#### Usage

You can integrate the MembershipForm component into your own React applications by following these steps:

Install the React Hook Form library:
bash
Copy code
npm install react-hook-form
Copy the MembershipForm.tsx file from this repository into your project.

Import and use the MembershipForm component in your app:

jsx
Copy code
import React from 'react';
import MembershipForm from './path/to/MembershipForm';

######

const App = () => {
return (

<div>
<h1>Membership Application Form</h1>
<MembershipForm />
</div>
);
};

export default App;

Customize and style the component to match your application's design and requirements.

### Contributing

Contributions to the MembershipForm component are welcome! If you find any issues or have suggestions for improvements, feel free to open a new issue or create a pull request. For major changes, please open an issue first to discuss the proposed changes.

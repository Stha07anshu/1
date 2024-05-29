import React, { useState } from 'react';
import { registerUserApi } from '../../api/Api';
import { toast } from 'react-toastify';

const Register = () => {
  // State variables
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State for Error
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  // Handle input changes
  const handleFirstname = (e) => {
    setFirstName(e.target.value);
  };
  
  const handleLastname = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  // Validation function
  const validate = () => {
    let isValid = true;
    if (firstName.trim() === '') {
      setFirstNameError('Firstname is Required');
      isValid = false;
    }

    if (lastName.trim() === '') {
      setLastNameError('Lastname is Required');
      isValid = false;
    }

    if (email.trim() === '') {
      setEmailError('Email is Required');
      isValid = false;
    }

    if (password.trim() === '') {
      setPasswordError('Password is Required');
      isValid = false;
    }

    if (confirmPassword.trim() === '') {
      setConfirmPasswordError('Confirm Password is Required');
      isValid = false;
    }

    if (password.trim() !== confirmPassword.trim()) {
      setConfirmPasswordError('Password does not match');
      isValid = false;
    }

    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const isValid = validate();
    if (!isValid) {
      return;
    }

    // Making Api Request
    // Making JSON Object of register data
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };

    registerUserApi(data).then((res) => {
      // Success :true/false, Message
      if (res.data.success === false) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    });
  };

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-lg-6 col-md-8 col-sm-10'>
          <div className='card p-4'>
            <h1 className='mb-4 text-center'>Create an Account</h1>
            <form>
              <div className='mb-3'>
                <label className='form-label'>Firstname</label>
                <input onChange={handleFirstname} type="text" className='form-control' placeholder='Enter your firstname' />
                {firstNameError && <p className='text-danger'>{firstNameError}</p>}
              </div>
              <div className='mb-3'>
                <label className='form-label'>Lastname</label>
                <input onChange={handleLastname} type="text" className='form-control' placeholder='Enter your lastname' />
                {lastNameError && <p className='text-danger'>{lastNameError}</p>}
              </div>
              <div className='mb-3'>
                <label className='form-label'>Email Address</label>
                <input onChange={handleEmail} type="email" className='form-control' placeholder='Enter your email address' />
                {emailError && <p className='text-danger'>{emailError}</p>}
              </div>
              <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input onChange={handlePassword} type="password" className='form-control' placeholder='Enter your password' />
                {passwordError && <p className='text-danger'>{passwordError}</p>}
              </div>
              <div className='mb-3'>
                <label className='form-label'>Confirm Password</label>
                <input onChange={handleConfirmPassword} type="password" className='form-control' placeholder='Enter your confirm password' />
                {confirmPasswordError && <p className='text-danger'>{confirmPasswordError}</p>}
              </div>
              <button onClick={handleSubmit} className='btn btn-dark mt-2 w-100'>Create Account</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;



// Make UI Complete - DONE
// Make a Variables to save value of each input temporarily
// Change everytime we write something
// Submit
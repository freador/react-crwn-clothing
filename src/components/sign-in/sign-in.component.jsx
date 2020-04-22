import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';
<<<<<<< HEAD
=======
import { signInWithGoogle, auth } from '../../firebase/firebase.utils'
>>>>>>> 4b726cfeb5dd78cd997a07f5b5bed323e348de22

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

<<<<<<< HEAD
  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
=======
  handleSubmit = async event => {
    event.preventDefault();

    const{email, password} = this.state;

    try{
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({ email: '', password: '' });
    }catch(error){
      console.log(error)
    }

>>>>>>> 4b726cfeb5dd78cd997a07f5b5bed323e348de22
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
<<<<<<< HEAD
          <CustomButton type='submit'> Sign in </CustomButton>
=======
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>            
            <CustomButton onClick={ signInWithGoogle} isGoogleSignIn> 
            {' '}
            Sign in  with Google
            {' '}
            </CustomButton>            
          </div>
>>>>>>> 4b726cfeb5dd78cd997a07f5b5bed323e348de22
        </form>
      </div>
    );
  }
}

export default SignIn;

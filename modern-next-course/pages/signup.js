import { useState } from "react";
import CustomInput from '../components/CustomInput';
import Link from 'next/link';
import axios from 'axios';
import cookies from 'nookies';
import { useRouter } from 'next/router';
import validateEmail from '../utils/validators/validateEmail';
import validateRequired from '../utils/validators/validateRequired';

const initialState = {
  name: '',
  email: '',
  password: ''
}

const Signup = () => {

  const [signupInfo, setSignupInfo] = useState(initialState);
  const [signupError, setSignupError] = useState(initialState);
  const router = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();

    if (!signupInfo.email || !signupInfo.password || !signupInfo.name) {
      return;
    }

    try {
      const response = await axios.post(
        'https://iwallet-api.herokuapp.com/api/auth/signup',
        { ...signupInfo }
      );

      cookies.set(null, 'token', response?.data?.token, { path: '/' });
      router.replace('/[country]', '/us');

    } catch (error) {
      setSignupError({ ...signupError, password: error.message });
    }
  }

  const handleInputChange = e => {
    const { name, value } = e.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  }

  const handleInputBlur = (e, validator) => {
    const { name, value } = e.target;

    setSignupError({
      ...signupError,
      [name]: validator(value) ? '' : `Invalid ${name}`
    });
  }

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <CustomInput
          name="name"
          type="text"
          placeholder="Enter your name"
          error={signupError.name}
          value={signupInfo.name}
          onChange={handleInputChange}
          onBlur={e => handleInputBlur(e, validateRequired)}
        />
        <CustomInput
          name="email"
          type="email"
          placeholder="Enter your email"
          error={signupError.email}
          value={signupInfo.email}
          onChange={handleInputChange}
          onBlur={e => handleInputBlur(e, validateEmail)}
        />
        <CustomInput
          name="password"
          type="password"
          placeholder="Enter your password"
          error={signupError.password}
          value={signupInfo.password}
          onChange={handleInputChange}
          onBlur={e => handleInputBlur(e, validateRequired)}
        />
        <Link href="/signin">
          <a>Already have an account?</a>
        </Link>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Signup;
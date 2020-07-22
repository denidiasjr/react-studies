import { useState } from "react";
import CustomInput from '../components/CustomInput';
import Link from 'next/link';
import axios from 'axios';
import cookies from 'nookies';
import { useRouter } from 'next/router';
import validateEmail from '../utils/validators/validateEmail';
import validateRequired from '../utils/validators/validateRequired';

const initialState = {
  email: '',
  password: ''
}

const Signin = () => {

  const [signinInfo, setSigninInfo] = useState(initialState);
  const [signinError, setSigninError] = useState(initialState);
  const router = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();

    if (!signinInfo.email || !signinInfo.password) {
      return;
    }

    try {
      const response = await axios.post(
        'https://iwallet-api.herokuapp.com/api/auth/signin',
        { ...signinInfo }
      );

      cookies.set(null, 'token', response?.data?.token, { path: '/' });

      const { defaultCountry, plannedRoute } = cookies.get();

      const plannedRouteObject = plannedRoute && JSON.parse(plannedRoute);

      const plannedHrefRoute = plannedRouteObject?.href ?? '/[country]';
      const plannedAsRoute = plannedRouteObject?.as ?? `/${defaultCountry}`;


      router.replace(plannedHrefRoute, plannedAsRoute);

    } catch (error) {
      setSigninError({ ...signinError, password: error.message });
    }
  }

  const handleInputChange = e => {
    const { name, value } = e.target;
    setSigninInfo({ ...signinInfo, [name]: value });
  }

  const handleInputBlur = (e, validator) => {
    const { name, value } = e.target;

    setSigninError({
      ...signinError,
      [name]: validator(value) ? '' : `Invalid ${name}`
    });
  }

  return (
    <div className="signin">
      <form onSubmit={handleSubmit}>
        <CustomInput
          name="email"
          type="email"
          placeholder="Enter your email"
          error={signinError.email}
          value={signinInfo.email}
          onChange={handleInputChange}
          onBlur={e => handleInputBlur(e, validateEmail)}
        />
        <CustomInput
          name="password"
          type="password"
          placeholder="Enter your password"
          error={signinError.password}
          value={signinInfo.password}
          onChange={handleInputChange}
          onBlur={e => handleInputBlur(e, validateRequired)}
        />
        <Link href="/signup">
          <a>Create an account</a>
        </Link>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Signin;
import cookies from 'nookies';
import Router from 'next/router';

const withAuthorization = WrappedComponent => props => {
  return (
    <WrappedComponent {...props} />
  )
}

withAuthorization.isAuth = async context => {
  const { token } = cookies.get(context);

  // Checking if cookie is present
  // If its not present, redirect user to signin page
  if (!token) {

    // Check if its on server side
    if (context.res) {
      context.res.writeHead(302, { Location: '/signin' });
      context.res.end();
      return;
    }

    // On client side
    Router.push('/signin');
  }

  return token;
}

export default withAuthorization;
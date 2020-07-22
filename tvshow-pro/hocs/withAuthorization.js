import { Component } from 'react';
import cookies from 'nookies';
import Router from 'next/router';

const authenticate = context => {
  const { token } = cookies.get(context);

  cookies.set(
    context,
    'plannedRoute',
    JSON.stringify(
      { as: context.asPath, href: context.pathname }
    ),
    { path: '/' }
  )

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

export const isAuthenticated = context => {
  const { token } = cookies.get(context);

  return token;
}

export const withAuthorization = WrappedComponent => {
  return class extends Component {

    static getInitialProps = async (context) => {

      const token = authenticate(context);

      const componentProps = WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(context));

      return { ...componentProps, token };
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

export default withAuthorization;
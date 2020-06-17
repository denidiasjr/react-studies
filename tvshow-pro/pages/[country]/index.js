import { useEffect } from 'react';
import axios from 'axios';

const Home = (props) => {
  return (
    <h1>My country page</h1>
  )
}

export const getServerSideProps = async () => {

  const response = await axios.get('http://api.tvmaze.com/schedule?country=US&date=2014-12-01')

  return {
    props: {
      shows: response.data
    }
  }
}

export default Home;
import axios from 'axios';
import Thumbnail from '../../components/Thumbnail';

const Home = ({ shows }) => {

  const renderShows = () => {
    return shows.map((showItem, index) => (
      <li key={index}>
        <Thumbnail imageUrl={showItem?.show?.image?.medium} caption={showItem?.show?.name} />
      </li>
    ))
  }

  return (
    <ul className="tvshow-list">
      {renderShows()}
    </ul>
  )
}

export const getServerSideProps = async context => {

  const country = context?.query?.country || 'us';
  const response = await axios.get(`http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`);

  return {
    props: {
      shows: response.data
    }
  }
}

export default Home;
import axios from 'axios';
import Thumbnail from '../../components/Thumbnail';
import Link from 'next/link';

const Home = ({ shows }) => {

  const renderShows = () => {
    return shows.map((showItem, index) => {

      const { show } = showItem;
      const defaultImageUrl = 'https://via.placeholder.com/210x295?text=?';

      return (
        <li key={index}>
          <Thumbnail imageUrl={show?.image?.medium || defaultImageUrl} caption={show?.name} />
        </li>
      )
    })
  }

  return (
    <ul className="tvshow-list">
      <Link href="/about">
        About
      </Link>
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
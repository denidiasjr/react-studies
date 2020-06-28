import axios from 'axios';
import Thumbnail from '../../components/Thumbnail';
import './styles.scss';

const Home = ({ shows, country }) => {

  const renderShows = () => {
    return shows.map((showItem, index) => {

      const { show } = showItem;
      const defaultImageUrl = 'https://via.placeholder.com/210x295?text=?';
      const showUrl = `/${country}/${show?.id}`;

      return (
        <li key={index}>
          <Thumbnail
            imageUrl={show?.image?.medium || defaultImageUrl}
            caption={show?.name}
            href="/[country]/[showId]"
            as={showUrl}
          />
        </li>
      )
    })
  }

  return (
    <div className="home">
      <ul className="tvshow-list">
        {renderShows()}
      </ul>
    </div>
  )
}

export const getServerSideProps = async context => {

  const country = context?.query?.country || 'us';
  const response = await axios.get(`http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`);

  return {
    props: {
      shows: response.data,
      country
    }
  }
}

export default Home;
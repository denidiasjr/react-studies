import axios from 'axios';
import htmlParse from 'html-react-parser';
import Cast from '../../../components/Cast';
import './styles.scss';

const Details = ({ show }) => {

  const {
    name,
    image,
    summary,
    _embedded: {
      cast = []
    }
  } = show;

  const renderCast = () => cast.length > 0 && <Cast cast={cast} />

  return (
    <div className="show-details">
      <div className="show-details__poster" style={{ backgroundImage: `url(${image.original})` }}></div>
      <h3>{name}</h3>
      {htmlParse(summary)}
      {renderCast()}
    </div>
  )
}

export const getServerSideProps = async context => {

  const showId = context?.query?.showId || '1';
  const response = await axios.get(`http://api.tvmaze.com/shows/${showId}?embed=cast`)

  return {
    props: {
      show: response.data
    }
  }
}

export default Details;
import axios from 'axios';
import htmlParse from 'html-react-parser';
import Error from 'next/error';
import Cast from '../../../components/Cast';
import './styles.scss';

const Details = ({ show = {}, statusCode }) => {

  const {
    name,
    image,
    summary,
    _embedded
  } = show;

  if (statusCode) {
    return (
      <Error
        statusCode={statusCode}
        title="Sorry, we had an error trying to get you TV Show"
      />
    );
  }

  const {
    cast = []
  } = _embedded;

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

  try {
    const showId = context?.query?.showId || '1';
    const response = await axios.get(`http://api.tvmaze.com/shows/${showId}?embed=cast`)

    return {
      props: {
        show: response.data
      }
    }
  } catch (error) {
    return {
      props: {
        statusCode: error?.response?.status || '500'
      }
    }
  }

}

export default Details;
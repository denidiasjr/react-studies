import Thumbnail from '../Thumbnail';
import './styles.scss';

const Cast = ({ cast }) => {

  const renderCast = () => {
    return cast.map((castItem, index) => {

      const {
        person: {
          image, name
        }
      } = castItem;

      const defaultImageUrl = 'https://via.placeholder.com/210x295?text=?';

      return (
        <li key={index}>
          <Thumbnail imageUrl={image?.medium || defaultImageUrl} caption={name} />
        </li>
      );
    });
  }

  return (
    <div className="cast">
      <h3>Cast</h3>
      <ul className="cast__list">{renderCast()}</ul>
    </div>
  )
}

export default Cast;
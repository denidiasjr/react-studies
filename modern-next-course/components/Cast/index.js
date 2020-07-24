import Thumbnail from '../Thumbnail';
import './styles.scss';

const Cast = ({ cast }) => {

  const renderCast = () => {
    return cast.map((castItem, index) => {

      const {
        person: {
          image, name, id
        }
      } = castItem;

      const defaultImageUrl = 'https://via.placeholder.com/210x295?text=?';

      return (
        <li key={index}>
          <Thumbnail
            imageUrl={image?.medium || defaultImageUrl}
            caption={name}
            href={`/cast?personId=${id}`}
            as={`/cast/${id}`}
            small
          />
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
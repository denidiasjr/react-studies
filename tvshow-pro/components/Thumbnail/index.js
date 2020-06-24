import Link from 'next/link';
import './styles.scss';

const Thumbnail = ({ imageUrl, caption, href = '', as = '' }) => (
  <div className="thumbnail">
    <Link href={href} as={as}>
      <a>
        <img src={imageUrl} className="thumbnail__image" />
        <h3 className="thumbnail__caption">{caption}</h3>
      </a>
    </Link>
  </div>
)

export default Thumbnail;
import Link from 'next/link';
import './styles.scss';

const Thumbnail = ({
  imageUrl,
  caption,
  href = '',
  as = '',
  small = false
}) => {

  const imageClassName = small ? 'thumbnail__image--small' : 'thumbnail__image';

  return (
    <div className="thumbnail">
      <Link href={href} as={as}>
        <a>
          <img src={imageUrl} className={imageClassName} />
          <h3 className="thumbnail__caption">{caption}</h3>
        </a>
      </Link>
    </div>
  )
}

export default Thumbnail;
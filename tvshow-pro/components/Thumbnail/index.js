import ThumbnailStyles from "./styles";

const Thumbnail = ({ imageUrl, caption }) => (
  <div className="thumbnail">
    <img src={imageUrl} className="thumbnail__image" />
    <h3 className="thumbnail__caption">{caption}</h3>

    <style jsx>{ThumbnailStyles}</style>
  </div>
)

export default Thumbnail;
const Thumbnail = ({ imageUrl, caption }) => (
  <div className="thumbnail">
    <img src={imageUrl} className="thumbnail__image" />
    <h3 className="thumbnail__caption">{caption}</h3>
  </div>
)

export default Thumbnail;
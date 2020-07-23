import axios from 'axios';

const CastMembers = ({ person }) => {

  const { name, country, birthday, image } = person;

  const defaultImageUrl = 'https://via.placeholder.com/210x295?text=?';

  const countryDescription = country ? `(${country?.code || country?.name})` : '';

  return (
    <div className="cast-member">
      <img src={image?.medium || defaultImageUrl} />
      <h3>{`${name} ${countryDescription}`}</h3>
      <h4>{birthday}</h4>
    </div>
  )
};

CastMembers.getInitialProps = async ({ query }) => {

  const response = await axios.get(`https://api.tvmaze.com/people/${query.personId}`);

  console.log(response);

  return {
    person: response.data
  }
}

export default CastMembers;
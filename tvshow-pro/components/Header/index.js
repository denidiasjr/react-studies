import { useState } from 'react';
import { useRouter } from 'next/router';
import './styles.scss';

const countries = [
  {
    label: 'us',
    name: 'United States'
  },
  {
    label: 'br',
    name: 'Brazil'
  }
]

const Header = () => {

  const router = useRouter();

  const [selectedCountry, setSelectedCountry] = useState(router?.query?.country);

  const renderCountriesOptions = options => {
    return options.map(option => {
      return (
        <option key={option.label} value={option.label}>{option.name}</option>
      )
    })
  }

  const handleChange = event => {
    setSelectedCountry(event?.target?.value);
  }

  return (
    <div className="header">
      <select className="header__filter" value={selectedCountry} onChange={handleChange}>
        {renderCountriesOptions(countries)}
      </select>
    </div>
  )
}

export default Header;
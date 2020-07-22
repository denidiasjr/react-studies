import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cookies from 'nookies';
import { isAuthenticated } from '../../hocs/withAuthorization';
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

  useEffect(() => {

    if (!selectedCountry) {
      return;
    }

    cookies.set(null, 'defaultCountry', selectedCountry, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/'
    });
  }, [selectedCountry])

  const renderCountriesOptions = options => {
    return options.map(option => {
      return (
        <option key={option.label} value={option.label}>{option.name}</option>
      )
    })
  }

  const handleChange = event => {
    const valueSelected = event?.target?.value;

    setSelectedCountry(valueSelected);
    router.push('/[country]', `/${valueSelected}`)
  }

  const handleSignout = () => {
    cookies.destroy(null, 'token');
  }

  return (
    <div className="header">
      <select className="header__filter" value={selectedCountry} onChange={handleChange}>
        {renderCountriesOptions(countries)}
      </select>

      {isAuthenticated() &&
        <Link href="/[country]" as={`/${selectedCountry}`}>
          <a onClick={handleSignout}>Sign out</a>
        </Link>
      }
    </div>
  )
}

export default Header;
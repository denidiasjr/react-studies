import React from 'react';
import './Header.scss';

interface IHeaderProps {
  title?: string
}

const Header: React.FC<IHeaderProps> =  ({ title }) => {
  return (
    <div className="warren-header">
      {title && <span className="warren-header-title">{title}</span>}
    </div>
  )
};

export default Header;
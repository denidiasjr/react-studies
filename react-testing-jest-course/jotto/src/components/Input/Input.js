import React from 'react';
import { useSelector } from 'react-redux';

const Input = () => {

  const state = useSelector(state => state);

  return (
    <div>
      <button>Something</button>
    </div>
  );
};

export default Input;
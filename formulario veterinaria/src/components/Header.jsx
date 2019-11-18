import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ titulo }) => {
  return (
    <header>
      <h1 className='header'>{titulo}</h1>
    </header>
  );
};
// proptypes siempre va a ser un objeto
// eslint-disable-next-line react/no-typos
Header.propTypes = {
  titulo: PropTypes.string.isRequired
};

export default Header;

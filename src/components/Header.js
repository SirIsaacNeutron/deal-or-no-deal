import React from 'react';

function Header(props) {
  return (
    <header>
      <h1 style={headerStyle}>Deal or No Deal</h1>
    </header>
  );
}

const headerStyle = {
    background: 'gold',
    textAlign: 'center',
};

export default Header;

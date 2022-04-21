import React from 'react';

function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer>
      <p>Created by Jaime Rodriguez in {year}</p>
    </footer>
  );
}

export default Footer;

import React from 'react';

const Footer = () => {
  const footerStyle = {
    background: 'linear-gradient(90deg, rgb(236, 230, 255) 50%, rgba(191,164,255,1) 100%)',
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    padding: '24px 16px',
    alignItems: 'center',
    borderTop: '1px solid rgba(4,0,66,.2)'
  };

  const textStyle = {
    fontSize: '12px',
    color: '#6b7280', // gray text color
    textAlign: 'center'
  };

  const navStyle = {
    display: 'flex',
    gap: '24px',
    marginLeft: 'auto',
  };

  const linkStyle = {
    fontSize: '12px',
    textDecoration: 'none',
    color: '#6b7280', // gray text color
    cursor: 'pointer'
  };

  const hoverStyle = {
    textDecoration: 'none',
    textDecorationOffset: '4px'
  };

  return (
    <footer style={footerStyle}>
      <p style={textStyle}>© 2024 Efizienz. All rights reserved.</p>
      <nav style={navStyle}>
        <a style={linkStyle} href="#" onMouseEnter={e => e.currentTarget.style = hoverStyle} onMouseLeave={e => e.currentTarget.style = linkStyle}>
          Términos de servicio
        </a>
        <a style={linkStyle} href="#" onMouseEnter={e => e.currentTarget.style = hoverStyle} onMouseLeave={e => e.currentTarget.style = linkStyle}>
          Privacidad
        </a>
      </nav>
    </footer>
  );
};
export default Footer;

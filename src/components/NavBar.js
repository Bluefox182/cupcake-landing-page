import React from 'react';
import styled from 'styled-components';

// import logo from '../assets/img/logo01.jpg';
import logo from '../assets/img/logo02.png';

function NavBar({ navToggle }) {
  return (
    <StyledNavBar className={`${navToggle ? 'nav-toggle' : ''}`}>
      <div className='Logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='Links'>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Menu</a>
        <a href='#'>Contact</a>
      </div>
    </StyledNavBar>
  );
}

export default NavBar;

const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  overflow-y: hidden;
  background-color: #fff2f2;
  @media (max-width: 767px) {
    transform: translateY(-100%);
    z-index: 20;
    height: 0;
  }

  .Logo {
    width: 40%;
    img {
      width: 150px;
    }
  }

  .Links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    height: 100%;
    padding: 0 20px;
    font-family: 'Pacifico', cursive;
    a {
      text-decoration: none;
      color: #f47c7c;
      font-size: 26px;
      padding: 25px 50px;
      &:hover {
        color: #fff2f2;
        background-color: #f47c7c;
        transition: 0.5s;
      }
    }
  }
`;

import React from 'react';
import styled from 'styled-components';

import Review from '../components/Review';
import Slider from '../components/Slider';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <StyledHomePage>
      <div className='Hero-Slider'>
        <Slider />
        <section className='quote_container'>
          <Review />
        </section>
        <section className='card_container'>
          <Cards />
        </section>
      </div>
      <Footer />
    </StyledHomePage>
  );
}

export default HomePage;

const StyledHomePage = styled.div`
  overflow: none;
  background-color: #fff2f2;
  .Hero-Slider {
    /* max-height: 100%; */
    position: relative;
    height: 100%;
    overflow: hidden;
    width: 100%;
  }

  .section {
    width: 90vw;
    margin: 0 auto;
    /* max-width: var(--max-width); */
  }

  .card_container {
    width: 100%;
    padding-top: 20px;
  }
`;

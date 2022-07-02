import React from 'react';
import styled from 'styled-components';

// Images
import product01 from '../assets/img/product01.jpg';
import product02 from '../assets/img/product02.jpg';
import product03 from '../assets/img/product03.jpg';
import Counter from './Counter';
import Fade from 'react-reveal/Fade';

function Cards() {
  return (
    <StyledCard>
      <Fade top cascade>
        <div className='Card-Container'>
          <div className='Top-Container'>
            <h1>Special Products</h1>
          </div>

          <div className='Main-Products'>
            <div className='Card-Item'>
              <div className='Card-Image'>
                <img src={product01} alt='CupCake' />
              </div>
              <div className='Card-Text'>
                <h1>Product Name</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem, maxime.
                </p>
                <p>$99.99</p>
                <Counter />
              </div>
            </div>

            <div className='Card-Item'>
              <div className='Card-Image'>
                <img src={product02} alt='CupCake' />
              </div>
              <div className='Card-Text'>
                <h1>Product Name</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem, maxime.
                </p>
                <p>$99.99</p>
                <Counter />
              </div>
            </div>

            <div className='Card-Item'>
              <div className='Card-Image'>
                <img src={product03} alt='CupCake' />
              </div>
              <div className='Card-Text'>
                <h1>Product Name</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem, maxime.
                </p>
                <p>$99.99</p>
                <Counter />
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </StyledCard>
  );
}

export default Cards;

const StyledCard = styled.div`
  .Card-Container {
    width: 100%;
    /* padding-top: 20px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .Top-Container {
    width: 100%;
    font-family: 'Pacifico', cursive;
    h1 {
      font-size: 36px;
      text-align: center;
      color: #f47c7c;
    }
  }
  .Main-Products {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 40px 0;
  }

  .Card-Item {
    width: 300px;
    height: 540px;
    display: flex;
    flex-direction: column;
    background-color: #f9f9f9;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
  }

  .Card-Image img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    object-position: 0 10%;
    overflow: hidden;
  }

  .Card-Text {
    h1 {
      font-size: 24px;
      text-align: center;
      color: #f47c7c;
      padding: 10px 0;
    }
    p {
      font-size: 12px;
      text-align: center;
      padding: 5px 0;
      color: #ad8b73;
    }
  }
`;

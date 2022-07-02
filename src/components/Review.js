import React, { useState } from 'react';
import people from '../data';
import styled from 'styled-components';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function Review() {
  const [index, setIndex] = useState(0);
  const { name, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <StyledReview>
      <article className='review-container'>
        <div className='button-container'>
          <IconButton className='prev-btn' onClick={prevPerson}>
            <ArrowBackIosNewIcon fontSize='large' />
          </IconButton>
        </div>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
        </div>

        <div className='text-container'>
          <h4 className='author'>{name}</h4>
          <p className='text'>{text}</p>
        </div>
        <div className='button-container'>
          <IconButton className='next-btn' onClick={nextPerson}>
            <ArrowForwardIosIcon fontSize='large' />
          </IconButton>
        </div>
      </article>
    </StyledReview>
  );
}

export default Review;

const StyledReview = styled.div`
  .review-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 35px 100px;
    width: 100%;
    transition: all 0.5s ease-in-out;
    text-align: center;
    color: #354259;
  }
  .img-container {
    display: flex;
    justify-content: flex-end;
    width: 100px;
    height: 100px;
    margin: 0 20px;
    margin-bottom: 5px;
  }
  .person-img {
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .text-container {
    width: 70%;
    display: flex;
    flex-direction: column;
    transition: all 0.5s ease-in-out;
  }

  .author {
    text-transform: capitalize;
  }

  .text {
    margin-bottom: 0.75rem;
    color: #ad8b73;
    font-size: 12px;
    transition: all 0.5s ease-in-out;
  }
  .prev-btn,
  .next-btn {
    color: #ef9f9f;
    background: transparent;
    border-color: transparent;
    margin: 0 0.5rem;
    text-align: center;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
  .prev-btn:hover,
  .next-btn:hover {
    color: #f47c7c;
  }
  .button-container {
    text-align: center;
  }
`;

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSection = styled.section`
  margin-top: 10rem;
  color: #00395a;

  h2 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 3rem;

    @media (max-width: 468px) {
      font-size: 2rem;
    }
  }

  .boxes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: space-between;
    gap: 5rem;

    @media (max-width: 468px) {
      grid-template-columns: 1fr;
    }

    .box {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h3 {
        font-size: 2.5rem;
        font-weight: 400;
        margin-bottom: 2rem;

        @media (max-width: 468px) {
          font-size: 1.8rem;
          font-weight: 700;
        }

        i {
          margin-right: 1.3rem;
        }
      }

      p {
        font-size: 1.8rem;
        line-height: 1.6;
        margin-bottom: 3rem;

        @media (max-width: 468px) {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }
      }

      .more {
        font-size: 1.7rem;
        color: #00395a;
        font-weight: 700;
        transition: all 0.2s;
        padding: 1.5rem 3rem;
        border-radius: 10px;
        letter-spacing: 1px;

        &:hover {
          background-color: #00395a;
          color: #fff;
        }
      }
    }
  }
`;

const Guarantees = () => {
  return (
    <StyledSection>
      <div className='container'>
        <h2>Our Guarantees</h2>
        <div className='boxes'>
          <div className='box'>
            <h3>
              <i class='fa-solid fa-money-check-dollar'></i>Money-back Guarantee
            </h3>
            <p>
              You have to be 100% sure of the quality of your product to give a
              money-back guarantee. This describes us perfectly. Make sure that
              this guarantee is totally transparent.
            </p>
            <Link to='#' className='more'>
              Read more
            </Link>
          </div>
          <div className='box'>
            <h3>
              <i class='fa-solid fa-arrow-turn-down'></i>Zero-plagiarism
              Guarantee
            </h3>
            <p>
              Each paper is composed from scratch, according to your
              instructions. It is then checked by our plagiarism-detection
              software. There is no gap where plagiarism could squeeze in.
            </p>
            <Link to='#' className='more'>
              Read more
            </Link>
          </div>
          <div className='box'>
            <h3>
              <i class='fa-solid fa-archway'></i>Free-revision Policy
            </h3>
            <p>
              Thanks to our free revisions, there is no way for you to be
              unsatisfied. We will work on your paper until you are completely
              happy with the result.
            </p>
            <Link to='#' className='more'>
              Read more
            </Link>
          </div>
          <div className='box'>
            <h3>
              <i class='fa-solid fa-arrow-right-from-bracket'></i>Privacy Policy
            </h3>
            <p>
              Your email is safe, as we store it according to international data
              protection rules. Your bank details are secure, as we use only
              reliable payment systems.
            </p>
            <Link to='#' className='more'>
              Read more
            </Link>
          </div>
          <div className='box'>
            <h3>
              <i class='fa-solid fa-ghost'></i>Fair-cooperation Guarantee
            </h3>
            <p>
              By sending us your money, you buy the service we provide. Check
              out our terms and conditions if you prefer business talks to be
              laid out in official language.
            </p>
            <Link to='#' className='more'>
              Read more
            </Link>
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

export default Guarantees;

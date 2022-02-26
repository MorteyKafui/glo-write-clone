/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';

const StyledPrices = styled.section`
  background-color: #00395a;
  padding: 3rem 0;
  margin-top: 1.5rem;

  h2 {
    font-size: 3.5rem;
    font-weight: 700;
    color: #fff;
    line-height: 1.7;
    letter-spacing: 1px;
    margin-bottom: 3rem;
  }

  .cards {
    display: flex;
    gap: 4rem;

    .card-sm {
      flex: 0 0 15%;
      background-color: #fff;
      padding: 3rem;
      border-radius: 30px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h3 {
        color: #333;
        text-transform: uppercase;
        font-weight: 400;
        font-size: 1.6rem;

        @media (max-width: 468px) {
          font-size: 1.3rem;
        }
      }

      .line {
        width: 30%;
        height: 1px;
        background-color: #999;
      }

      .from {
        text-transform: uppercase;
        color: #999;
      }

      .price {
        font-size: 4rem;
        font-weight: 700;
        color: #fec137;

        @media (max-width: 468px) {
          font-size: 3rem;
        }

        sub {
          font-size: 2rem;
          color: #333;
          font-weight: 400;
        }
      }
    }

    .card-lg {
      background-color: #0039;
      color: #fff;
      padding: 3rem;
      border-radius: 5px;
      font-size: 1.8rem;
      line-height: 1.7;
    }
  }

  .btn {
    display: inline-block;
    padding: 1.6rem 6rem;
    font-size: 2rem;
    font-weight: 700;
    color: #999;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.08);
    background-color: #fff;
    margin-top: 4rem;
    border-radius: 8px;
    letter-spacing: 1px;
  }

  @media (max-width: 468px) {
    .cards {
      flex-direction: column;

      .card-sm {
        padding: 2rem;
        flex: 0 0 10%;
      }

      .card-lg {
        text-align: center;
        font-size: 1.4rem;
        padding: 2rem;
      }
    }

    .btn {
      font-size: 1.7rem;
      padding: 1.3rem 5rem;
    }
  }
`;

const PricesSection = () => {
  return (
    <StyledPrices>
      <div className='container'>
        <h2>Affordable prices</h2>
        <div className='cards'>
          <div className='card-sm'>
            <h3>High School</h3>
            <div className='line'></div>
            <p className='from'>From</p>
            <p className='price'>
              <sub>$</sub>10<sub>page</sub>{' '}
            </p>
          </div>
          <div className='card-sm'>
            <h3>College</h3>
            <div className='line'></div>
            <p className='from'>From</p>
            <p className='price'>
              <sub>$</sub>13<sub>page</sub>{' '}
            </p>
          </div>
          <div className='card-sm'>
            <h3>University</h3>
            <div className='line'></div>
            <p className='from'>From</p>
            <p className='price'>
              <sub>$</sub>14<sub>page</sub>{' '}
            </p>
          </div>
          <div className='card-lg'>
            Our prices depend on the urgency of your assignment, your academic
            level, the course subject, and the length of the assignment.
            Basically, more complex assignments will cost more than simpler
            ones. The level of expertise is also a major determinant of the
            price of your assignment.
          </div>
        </div>
        <a href='#' className='btn'>
          Calculate price
        </a>
      </div>
    </StyledPrices>
  );
};

export default PricesSection;

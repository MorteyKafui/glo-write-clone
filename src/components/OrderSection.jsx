import styled from 'styled-components';

/* eslint-disable jsx-a11y/anchor-is-valid */
const StyledOrder = styled.section`
  margin-top: 10rem;
  display: flex;

  .img {
    width: 100%;
    flex: 0 0 45%;
    border-radius: 10px;
  }

  .place {
    margin-left: 10rem;
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    font-size: 1.7rem;
    flex: 0 0 40%;
  }

  h2 {
    font-size: 3.5rem;
    font-weight: 700;
    color: #00395a;
    border-bottom: 2px solid #fec137;
    margin-bottom: 1.2rem;
    padding-bottom: 1.3rem;
  }

  p,
  a {
    color: #00395a;
  }

  a {
    border-bottom: 1px dotted currentColor;
    transition: all 0.3s ease;
  }

  a:hover {
    border-bottom: 1px solid currentColor;
  }

  @media (max-width: 468px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    .img {
      width: 70%;
      display: block;
    }

    h2 {
      font-size: 2rem;
      text-align: center;
    }

    p,
    a {
      font-size: 1.5rem;
    }
  }
`;

const OrderSection = () => {
  return (
    <StyledOrder>
      <img
        className='img'
        src='https://glowriters.com/wp-content/uploads/2020/10/seo_home_woman.jpg'
        alt='order img'
      />

      <div className='place'>
        <h2>How to Place Your Order</h2>
        <p className='first'>
          The process of getting a skilled and essay writer to handle your
          assignment is simple.
        </p>
        <p>
          <a href='#'>Sign up on our website</a>
        </p>
        <p>
          <a href='#'>Fill the details and get the price</a>
        </p>
        <p>Make the payment</p>
        <p>Wait for a notification email</p>
        <p>Receive the completed order</p>
        <p className='last'>
          You can use your time for activities that are fun or those you can’t
          delegate as we work tirelessly to offer you a unique paper.
        </p>
      </div>
    </StyledOrder>
  );
};

export default OrderSection;

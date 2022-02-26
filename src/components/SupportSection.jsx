import styled from 'styled-components';

const StyledSection = styled.section`
  margin-top: 10rem;
  .container {
    border-radius: 10px;
    background-color: #f0f0f0;

    .contents {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      text-align: center;
      color: #10375a;
      padding: 5rem;

      h3 {
        font-size: 3rem;
        font-weight: 700;
        letter-spacing: 1px;
        line-height: 1.7;
      }

      p {
        font-size: 1.8rem;
        font-weight: 400;
        width: 38%;
        text-align: center;
      }

      .btn {
        display: inline-block;
        padding: 1.5rem 3rem;
        border: none;
        border-radius: 8px;
        box-shadow: 3px 6px 6px rgba(0, 0, 0, 0.08),
          3px 6px 6px rgba(0, 0, 0, 0.07);
        background-color: #fec137;
        color: #fff;
        font-size: 1.8rem;
        font-weight: 700;
      }
    }
  }
`;

const SupportSection = () => {
  return (
    <StyledSection>
      <div className='container'>
        <div className='contents'>
          <h3>24/7 support</h3>
          <p>
            We provide affordable writing services for students around the
            world. That’s why we work without a break to help you at any time,
            wherever you are located. Contact us for cheap writing assistance.
          </p>
          <button className='btn'>Proceed to order page</button>
        </div>
      </div>
    </StyledSection>
  );
};

export default SupportSection;

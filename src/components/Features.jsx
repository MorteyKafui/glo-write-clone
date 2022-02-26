import styled from 'styled-components';

const StyledFeatures = styled.section`
  margin-top: 10rem;
  color: #00395a;

  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.7rem;
    line-height: 1.7;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }

    .fa-check {
      margin-right: 1rem;
    }
  }

  .red .fa-check {
    color: red;
  }

  .yellow .fa-check {
    color: #fec137;
  }

  @media (max-width: 468px) {
    flex-direction: column;
    gap: 3rem;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`;

const Features = () => {
  return (
    <StyledFeatures>
      <div className='red'>
        <h2>Basic features</h2>
        <p>
          <i class='fa-solid fa-check'></i> Free title page and bibligraphy
        </p>
        <p>
          <i class='fa-solid fa-check'></i> Unlimited revisions
        </p>
        <p>
          <i class='fa-solid fa-check'></i> Plagiarism-free guarantee
        </p>
        <p>
          <i class='fa-solid fa-check'></i> Money-back guarantee
        </p>
        <p>
          <i class='fa-solid fa-check'></i> 24/7 support
        </p>
      </div>
      <div className='yellow'>
        <h2>On-demand</h2>
        <p>
          <i class='fa-solid fa-check'></i>Writer's samples
        </p>
        <p>
          <i class='fa-solid fa-check'></i>Part-by-part deleivery
        </p>
        <p>
          <i class='fa-solid fa-check'></i>Overnight delivery
        </p>
        <p>
          <i class='fa-solid fa-check'></i>Copies of used sources
        </p>
        <p>
          <i class='fa-solid fa-check'></i>Expert Proofreading
        </p>
      </div>
      <div className='format'>
        <h2>Paper format</h2>
        <p>275 words per page</p>
        <p>
          12 <sub>pt</sub> Arial/times New Roman
        </p>
        <p>Double line spacing</p>
        <p>Any citation (APA,MLA,Chicago/Turabian,Harvard)</p>
      </div>
    </StyledFeatures>
  );
};

export default Features;

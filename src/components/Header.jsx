/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';

const StyledHeader = styled.header`
  color: #013959;
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const StyledContents = styled.div`
  flex: 0 0 50%;

  h1 {
    font-size: 5rem;
    font-weight: 700;
    margin-bottom: 3rem;
  }

  p {
    font-size: 2rem;
    letter-spacing: 0.8px;
    margin-bottom: 3rem;
    color: #013959;
  }

  .btns {
    display: flex;
    align-items: center;
    gap: 5rem;
    margin-bottom: 3rem;
  }

  .btn {
    border: none;
    border-radius: 5px;
    padding: 1.2rem 3.4rem;
    font-size: 2.3rem;
    font-weight: 700;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.05), 0 4px 4px rgba(0, 0, 0, 0.07),
      0 2px 4px 4px rgba(0, 0, 0, 0.05), 5px 7px 7px rgba(0, 0, 0, 0.07);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .btn--yellow {
    background-color: #fec137;
    color: #fff;

    &:hover {
      opacity: 0.7;
    }
  }

  .btn--white {
    background-color: #fff;
    color: #555;

    .fa-whatsapp {
      color: lightgreen;
      margin-right: 1rem;
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;

const StyledStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #677177;
  margin-top: 5rem;

  h3 {
    padding: 0 1.8rem 0 0;
    font-size: 1.5rem;
    letter-spacing: 0.8px;
  }

  h3:not(:last-child) {
    border-right: 1px solid #677177;
  }
`;

const StyledCard = styled.div`
  padding: 3rem 6rem;
  box-shadow: 0 6px 6px 1px rgba(0, 0, 0, 0.08), 0 3px 3px rgba(0, 0, 0, 0.08),
    0 6px 6px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  border-radius: 10px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #013959;

    h2 {
      font-weight: 700;
      margin-bottom: 2rem;
    }

    label {
      margin-bottom: 1rem;
    }

    select,
    .price {
      margin-bottom: 3rem;
    }

    select {
      font-size: 1.8rem;
      font-weight: 700;
      color: #013959;
      border: 1px solid #ccc;
      border-radius: 10px;
      padding: 1rem;
      outline: none;
    }

    .group {
      display: flex;
      justify-content: space-between;
      gap: 1rem;

      div {
        display: flex;
        flex-direction: column;
        justify-content: stretch;

        .btn-group {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          border: 1px solid #ccc;
          padding: 1rem;
          border-radius: 10px;
          outline: none;

          button {
            font-size: 2rem;
            flex: 0 0 50%;
            font-size: 1.8rem;
            font-weight: 700;
            border: none;
            background-color: #fff;
            cursor: pointer;
            color: #013959;

            &:hover {
              color: #fec137;
            }
          }
        }
      }
    }

    .price {
      text-align: center;
      color: #5a5a5a;
      font-size: 1.7rem;
      font-weight: 700;
    }

    .submit {
      border-radius: 10px;
      border: none;
      background-color: #fec137;
      color: #fff;
      font-size: 2rem;
      font-weight: 700;
      padding: 1.3rem 3rem;
      cursor: pointer;
      box-shadow: 3px 6px 6px rgba(0, 0, 0, 0.08),
        2px 4px 4px rgba(0, 0, 0, 0.05), 1px 2px 2px rgba(0, 0, 0, 0.06),
        4px 4px 4px rgba(0, 0, 0, 0.07);
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledContents>
        <h1>Get your paper done by an expert</h1>
        <p>
          Glowriters.com is a professional academic writing service that caters
          to the needs of more than two thousand people globally, and on a daily
          basis. We truly have the academic assist expertise to tackle your
          assignment. The Writing Company for Quality, Custom academic papers.
          We only hire expert academic writers with credible qualifications.
        </p>
        <div className='btns'>
          <button className='btn btn--yellow'>Order my papper</button>
          <button className='btn btn--white'>
            {' '}
            <i class='fa-brands fa-whatsapp'></i> Contact Us
          </button>
        </div>
        <StyledStats>
          <h3>19k happy customers</h3>

          <h3>9.5 out of 10 satisfaction rate</h3>

          <h3>527 writers active</h3>
        </StyledStats>
      </StyledContents>
      <StyledCard>
        <div className='card-details'>
          <form>
            <h2>Calculate your essay price</h2>

            <label htmlFor='paper'> Type of Paper</label>
            <select name='paper' id='paper'>
              <option value='' selected>
                Essay (any type)
              </option>
              <option value='admission eassy'>Admission essay</option>
              <option value='analysis essay'>Analysis essay</option>
              <option value='blog post'>Blog post</option>
            </select>
            <label htmlFor='level'>Academic Level</label>
            <select name='level' id='level'>
              <option value='high school' selected>
                High School
              </option>
              <option value='undergrad(1yr-2yrs)'>Undergrade(1-2yrs)</option>
              <option value='undergrad(1yr-2yrs)'>Undergrade(3-4yrs)</option>
              <option value='masters'>Masters</option>
              <option value='phd'>PhD</option>
            </select>

            <div className='group'>
              <div>
                {' '}
                <label htmlFor='line'>Deadline</label>
                <select name='line' id='line'>
                  <option value='14days' selected>
                    14 days
                  </option>
                  <option value='7 days'>7 days</option>
                  <option value='5 days'>5 days</option>
                  <option value='3 days'>3 days</option>
                </select>
              </div>
              <div>
                {' '}
                <label htmlFor='pages'>Pages(275 words)</label>
                <div className='btn-group'>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
              </div>
            </div>

            <p className='price'>Approximate price: $10</p>
            <button type='submit' className='submit'>
              Continue to order
            </button>
          </form>
        </div>
      </StyledCard>
    </StyledHeader>
  );
};

export default Header;

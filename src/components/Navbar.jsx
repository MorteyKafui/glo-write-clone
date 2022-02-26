import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

const StyledNav = styled.nav`
  background-color: #fec137;
  color: hsl(0.56, 0.98, 0.18);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.08), 0 4px 4px rgba(0, 0, 0, 0.08);
  height: 8rem;
  font-weight: 700;
  color: #013959;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    color: #013959;
    font-size: 3rem;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }
`;

const StyledLinks = styled(Link)`
  color: #013959;
  padding: 0.5rem;
  font-size: 1.6rem;
  transition: border-bottom 0.3s ease-in;

  &:hover {
    border-bottom: 1px solid #013959;
  }

  .fa-angle-down {
    margin-left: 1rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  .btn {
    font-size: 1.8rem;
    font-weight: 700;
    padding: 1rem 2rem;
    border: none;
    border-radius: 5px;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.08), 2px 5px 5px rgba(0, 0, 0, 0.09),
      2px 5px 5px rgba(0, 0, 0, 0.05), 2px 5px 5px rgba(0, 0, 0, 0.06);
    color: #013959;
    transition: all 0.3s;
    cursor: pointer;
  }

  .btn__yellow {
    background-color: #fec137;

    &:hover {
      background-color: #fff;
      transform: translateY(-1px);
      opacity: 0.7;
    }
  }
  .btn__white {
    background-color: #fff;

    &:hover {
      background-color: #fec137;
      transform: translateY(-1px);
      opacity: 0.7;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledBars = styled(FaBars)`
  cursor: pointer;
  display: none;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.5);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <div className='container'>
        <Link to='/' className='title'>
          Glo Writers
        </Link>
        <ul>
          <li>
            <StyledLinks to='/our-services'>
              Our Services <i class='fa-solid fa-angle-down'></i>
            </StyledLinks>
          </li>
          <li>
            <StyledLinks to='/how-it-works'>How It Works</StyledLinks>
          </li>
          <li>
            <StyledLinks to='/pricing'>Pricing</StyledLinks>
          </li>
          <li>
            <StyledLinks to='/reviews'>Reviews</StyledLinks>
          </li>
          <li>
            <StyledLinks to='/guarantees'>Guarantees</StyledLinks>
          </li>
          <li>
            <StyledLinks to='/our-writers'>Our Writers</StyledLinks>
          </li>
        </ul>
        <StyledButtons>
          <button className='btn btn__yellow'>My account</button>
          <button className='btn btn__white'>Order now</button>
        </StyledButtons>
        <StyledBars color='#00395a' />
      </div>
    </StyledNav>
  );
};

export default Navbar;

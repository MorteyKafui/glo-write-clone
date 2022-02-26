import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin-top: 10rem;
  background-color: #00395a;
  color: rgba(240, 240, 240, 0.8);
  padding: 3rem 0 2rem 0;

  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    .footer-top {
      display: grid;
      grid-template-columns: repeat(4, 1fr);

      h3 {
        margin-bottom: 2rem;
      }

      li {
        margin-bottom: 1rem;
      }
    }

    /* .img {
      display: grid;
      grid-template-columns: repeat(4, 1fr);

      &:nth-child(1) {
        grid-column: 1 / span 4;
      }

      &:last-child {
        grid-column: 1 / span 4;
      }
    } */
  }
`;

const StyledBottom = styled.div`
  margin-top: 8rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  ul li:not(:last-child) {
    margin-bottom: 1rem;
  }

  .copy {
    grid-column: 1/2;
    margin-top: 1rem;
  }

  .span {
    grid-column: 2 / span 4;
  }
`;

const StyledLink = styled(Link)`
  color: rgba(240, 240, 240, 0.8);
  margin-bottom: 2rem;
  transition: border-bottom 0.3s ease;

  &:hover {
    border-bottom: 1px solid currentColor;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className='container'>
        <div className='footer-top'>
          <div>
            <h3>Company</h3>
            <ul>
              <li>
                <StyledLink to='/'>Home</StyledLink>
              </li>
              <li>
                <StyledLink to='/guarantees'>Guarantees</StyledLink>
              </li>
              <li>
                <StyledLink to='/how-it-works'>How It Works</StyledLink>
              </li>
              <li>
                <StyledLink to='/our-writers'>Our Writers</StyledLink>
              </li>
            </ul>
          </div>
          <div>
            <h3>Terms</h3>
            <ul>
              <li>
                <StyledLink to='/'>Non-Plagiarized Essay</StyledLink>
              </li>
              <li>
                <StyledLink to='/'>Privacy Policy</StyledLink>
              </li>
              <li>
                <StyledLink to='/'>The Cookie Policy</StyledLink>
              </li>
            </ul>
          </div>
          <div>
            <h3>Resources</h3>
            <ul>
              <li>
                <StyledLink to='/'>Citation Generator</StyledLink>
              </li>
              <li>
                <StyledLink to='/'>Thesis Generator</StyledLink>
              </li>
              <li>
                <StyledLink to='/'>Best College GPA Calculator</StyledLink>
              </li>
              <li>
                <StyledLink to='/'>Words To Minutes Converter</StyledLink>
              </li>
              <li>
                <StyledLink to='/'>Words To pages Converter</StyledLink>
              </li>
            </ul>
          </div>
          <div className='img'>
            <img
              src='https://glowriters.com/static/images/accept.svg'
              alt='paypal'
            />
            <img
              src='https://glowriters.com/static/images/accept.svg'
              alt='visa'
            />
            <img
              src='https://glowriters.com/static/images/accept.svg'
              alt='master-card'
            />
            <img
              src='https://glowriters.com/static/images/accept.svg'
              alt='discover'
            />
            <img
              src='https://glowriters.com/static/images/dmca.svg'
              alt='protected'
            />
          </div>
        </div>
        <StyledBottom>
          <ul>
            <li>
              <StyledLink to='/'>Best Academic Editing Service</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Best Accounting Assignment Help</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Applied Mathematics Help</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Best Term Paper Site</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Buy a Persuasive Speech</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Buy Eassy Online</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Best Buy Project</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Buy Speech</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Cheap Essays</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>College Essays</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>College Research Papers</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Coursework Writing</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Best Custom Research Paper</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Dissertion Abstract</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Doctoral Dissertation</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Eassy paper Online</StyledLink>
            </li>
            <li>
              <li>
                <StyledLink to='/'>GCSE Coursework</StyledLink>
              </li>
            </li>
            <li>
              <StyledLink to='/'>Help with term Paper</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Hire Dissertation Writer</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Management Assignment Help</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>MBA Eassy</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Paper Writing Help</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>PhD Thesis</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Proofreading Service</StyledLink>
            </li>
            <StyledLink to='/'>Research Proposal</StyledLink>
            <li>
              <StyledLink to='/'>Term paper Editing</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Write Essays</StyledLink>
            </li>
          </ul>
          <ul>
            <li>
              <StyledLink to='/'>Best Academic Essay Writers</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Admission Essay Help</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Article Critique Writing Help</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Biology Assignment Help</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Buy Custom Essay Online</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Buy Essay Papers</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Buy Report </StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Buy Term Paper</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Cheap Paper</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Best College GPA Calculator</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Computer Assignment</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Custom Book Reports</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Custom Term Paper</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Dissertation Help</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Economic Essays</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Eassy Writers</StyledLink>
            </li>
            <li>
              <li>
                <StyledLink to='/'>Geographic Assignment Help</StyledLink>
              </li>
            </li>
            <li>
              <StyledLink to='/'>Help With Thesis</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Hiring Essay Writers</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Marketing assignment Help</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Narrative Essay</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Paper Writing Service</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Psychology Assignment Help</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Sample Assignments</StyledLink>
            </li>
            <StyledLink to='/'>Research Proposal</StyledLink>
            <li>
              <StyledLink to='/'>Term Paper Help</StyledLink>
            </li>
          </ul>
          <ul>
            <li>
              <StyledLink to='/'>Best Academic Papers</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>APA Dissertation</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Best Article Reviews</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Best Article Reviews</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Best Biology-homework-help</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Buy Narrative Essay</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Buy Law Essays</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Buy Research Papers</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Buy Thesis</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Class Help</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>College Paper Writing Service</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Coursework Help Online</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Custom Book Reviews</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Custom Thesis</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Do My Essay</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>English Literature Essays</StyledLink>
            </li>
            <li>
              <li>
                <StyledLink to='/'>Free Essay Papers</StyledLink>
              </li>
            </li>
            <li>
              <StyledLink to='/'>Good Essay Writing</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>High School Essay</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>History Dissertation</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Master's Essay</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Nursing Essay Writing Service</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Papers For Money </StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Physiology Assignment Help</StyledLink>
            </li>
            <StyledLink to='/'>Shakespeare Essay</StyledLink>
            <li>
              <StyledLink to='/'>Thesis Statement Writing Help</StyledLink>
            </li>
          </ul>
          <ul>
            <li>
              <StyledLink to='/'>Best Academic Writing Service</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>APA Styled Papers</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>5 Best Essay Writing Services</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Book Report Help</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Buy Dissertation</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Buy Persuasive Essay</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Best Buy Scholarship essay</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Buy University Essays</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>College Papers</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>College Dissertation Writing</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Coursework Service</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Custom Essay</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Descriptive Essay Writing</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Do My Paper</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Entrance Essay</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Free Research Papers</StyledLink>
            </li>
            <li>
              <li>
                <StyledLink to='/'>Graduate Papers</StyledLink>
              </li>
            </li>
            <li>
              <StyledLink to='/'>Hire Case study Writer</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Informative Speech</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Mathematics Assignment Help</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Online Research Papers</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Papers For Sale</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Professional Thesis Writer</StyledLink>
            </li>
            <li>
              <StyledLink to='/'>Research Paper</StyledLink>
            </li>
            <StyledLink to='/'>Statistics Assignment Help</StyledLink>
            <li>
              <StyledLink to='/'>University Papers</StyledLink>
            </li>
          </ul>
          <div className='copy'>
            <p>&copy; 2010-2022 Glo Writers.</p>
            <p>All Rights Reserved.</p>
          </div>

          <p className='span'>
            Disclaimer: If you need a custom written term, thesis or research
            paper as well as an essay or dissertation sample, choosing glo
            writers- a relatively cheap custom writing service- is a great
            option. Get any needed writing assistance at a price that very
            average student can afford.
          </p>
        </StyledBottom>
      </div>
    </StyledFooter>
  );
};

export default Footer;

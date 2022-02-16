import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSection = styled.section`
  color: #10375a;
  margin-top: 10rem;

  .top {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5rem;

    .box-1 {
      /* h2 {
        font-size: 3.5rem;
        font-weight: 700;
        padding: 2rem;
        border-bottom: 2px solid #fec137;
        margin-bottom: 3rem;
      } */

      p {
        font-size: 1.8rem;

        &:not(:last-child) {
          margin-bottom: 2rem;
        }
      }
    }

    .box-2 {
      align-self: flex-end;

      p {
        font-size: 1.8rem;
      }

      .btn {
        display: inline-block;
        padding: 1.3rem 3rem;
        border: none;
        border-radius: 7px;
        font-size: 2rem;
        font-weight: 700;
        color: #fff;
        background-color: #fec137;
        margin-top: 3rem;
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.08), 0 5px 5px rgba(0, 0, 0, 0.08);
        cursor: pointer;
      }
    }
  }
`;

const StyledTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  padding: 2rem;
  border-bottom: 2px solid #fec137;
  margin-bottom: 3rem;
`;

const StyledMiddle = styled.div`
  margin-top: 8rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3rem;

  p {
    font-size: 1.8rem;
  }

  .border {
    flex: 0 0 50%;
    border-radius: 10px;
    border: 5px solid #eee;
    padding: 4rem 2rem;
  }
`;

const StyledBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3rem;

  margin-top: 5rem;

  div {
    flex: 0 0 33%;
    padding: 0 3rem;

    p {
      border-left: 2px solid #fec137;
      padding: 0 3rem;
      font-size: 1.8rem;
    }
  }
`;

const NoBorder = styled(StyledTitle)`
  border-bottom: none;
  margin-bottom: 0;
`;

const StyledLink = styled(Link)`
  border-bottom: 1px dotted #10375a;
  transition: all 0.3s;
  color: #10375a;

  &:hover {
    border-bottom: 1px solid currentColor;
  }
`;

const CheapSection = () => {
  return (
    <StyledSection>
      <div className='container'>
        <div className='top'>
          {' '}
          <div className='box-1'>
            <StyledTitle>Cheap essay writing sercice</StyledTitle>
            <p>
              If you need professional help with completing any kind of
              homework, Glo writers is the right place to get it. Whether you
              are looking for essay, coursework, research, or term paper help,
              or with any other assignments, it is no problem for us. At our
              cheap essay writing service, you can be sure to get credible
              academic aid for a reasonable price, as the name of our website
              suggests. For years, we have been providing online custom writing
              assistance to students from countries all over the world,
              including the US, the UK, Australia, Canada, Italy, New Zealand,
              China, and Japan.
            </p>
            <p>
              Our cheap essay writing service has already gained a positive
              reputation in this business field. Understandably so, since all
              custom papers produced by our academic writers are individually
              crafted from scratch and written according to all your
              instructions and requirements. We offer APA, MLA, or a Chicago
              style paper in almost 70 disciplines. Here, you can get quality
              custom essays, as well as a dissertation, a research paper, or
              term papers for sale. Any paper will be written on time for a
              cheap price.
            </p>
          </div>
          <div className='box-2'>
            <p>
              Using our cheap essay writing help is beneficial not only because
              of its easy access and low cost, but because of how helpful it can
              be to your studies. Buy custom written papers online from our
              academic company and we won't disappoint you with our high quality
              of university, college, and high school papers. Although our
              writing service is one of the cheapest you can find, we have been
              in the business long enough to learn how to maintain a balance
              between quality, wages, and profit. Whenever you need help with
              your assignment, we will be happy to assist you.
            </p>
            <button className='btn'>Proceed to order page</button>
          </div>
        </div>
        <StyledMiddle>
          <div className='border'>
            <StyledTitle>
              Cheap paper writing service provides high-quality essays for
              affordable prices
            </StyledTitle>
            <p>
              It might seem impossible to you that all custom-written essays,
              research papers, speeches, book reviews, and other custom task
              completed by our writers are both of high quality and cheap. It is
              surprising, but we do have some tricks to lower prices without
              hindering quality. To start using our services, it’s enough to
              place a request like “I need a writer to do my assignment” or
              “Please, write an essay for me.” We have a convenient order form,
              which you can complete within minutes and pay for the order via a
              secure payment system. The support team will view it after the
              order form and payment is complete and then they will find an
              academic writer who matches your order description perfectly. Once
              you submit your instructions, while your order is in progress and
              even after its completion, our support team will monitor it to
              provide you with timely assistance.
            </p>
          </div>
          <div>
            <StyledTitle>
              Affordable essay writing service: get custom papers created by
              academic experts
            </StyledTitle>
            <p>
              Hiring good writers is one of the key points in providing
              high-quality services. That’s why we have entry tests for all
              applicants who want to work for us. We try to make sure all
              writers working for us are professionals, so when you purchase
              custom-written papers, they are of high quality and
              non-plagiarized. Our cheap essay writing service employs only
              writers who have outstanding writing skills. The quality of all
              custom papers written by our team is important to us; that is why
              we are so attentive to the application process and employ only
              those writers who can produce great essays and other kinds of
              written assignments.
            </p>
          </div>
        </StyledMiddle>
        <StyledBottom>
          <div>
            <NoBorder>Plagiarism-free affordable papers</NoBorder>
            <p>
              All our cheap essays are customized to meet your requirements and
              written from scratch. Our writers have a lot of experience with
              academic papers and know how to write them without plagiarism.
              Moreover, at our academic service, we have our own
              plagiarism-detection software which is designed to find
              similarities between completed papers and online sources. You can
              be sure that our custom-written papers are original and properly
              cited.
            </p>
          </div>
          <div>
            <NoBorder>Money-back guarantee</NoBorder>
            <p>
              Our cheap essay writing service tries to always be at its best
              performance level, so each customer who pays money for paper
              writing can be sure that he or she will get what is wanted. On the
              off chance that you don’t like your order, you can request a
              refund and we will return the money according to our money-back
              guarantee. There can be a number of reasons why you might not like
              your order. If we honestly don’t meet your expectations, we will
              issue a refund. You can also request a free revision, if there are
              only slight inconsistencies in your order. Your writer will make
              the necessary amendments free of charge. You can find out more
              information by visiting our revision policy and{' '}
              <StyledLink to='/guarantees'>money-back guarantee </StyledLink>{' '}
              pages, or by contacting our support team via online chat or phone.
            </p>
          </div>
          <div>
            <NoBorder>Delivery</NoBorder>
            <p>
              We know how important any deadline is to you; that’s why everyone
              in our company has their tasks and perform them promptly to
              provide you with the required assistance on time. We even have an
              urgent delivery option for short essays, term papers, or research
              papers needed within 8 to 24 hours. We appreciate that you have
              chosen our cheap essay service, and will provide you with
              high-quality and low-cost custom essays, research papers, term
              papers, speeches, book reports, and other academic assignments for
              sale.
            </p>
          </div>
        </StyledBottom>
      </div>
    </StyledSection>
  );
};

export default CheapSection;

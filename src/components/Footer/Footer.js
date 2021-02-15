/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import { FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";
import Container from "../Container/";

const Section = styled.section`
  padding: 2em 0 0;
  margin-top: 2em;
  color: #cebbc9;
`;

const Div = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const FirstColumn = styled.div`
  &:first-child {
    margin: 0 0 1.5em;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

const SecondColumn = styled.div`
  a {
    color: #cebbc9;
  }
`;

const ThirdColumn = styled.div`
  a + a {
    margin-left: 2em;
  }

  a > span {
    font-size: 1.2rem;
  }

  .friend {
    margin: 1.5em 0 1em;
    font-size: 1rem;
  }
  @media screen and (min-width: 768px) {
    .friend {
      margin: 0 0 1em;
    }
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <Section>
        <Container>
          <Div>
            <FirstColumn>
              <Paragraph>&copy; {year} Abhee.</Paragraph>
            </FirstColumn>
            <SecondColumn>
              <Paragraph>
                Designed & Developed by{" "}
                <a
                  href="https://www.incubateind.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#ffc857" }}
                >
                  IncubateIND{" "}
                </a>{" "}
                with ❤️
              </Paragraph>
            </SecondColumn>
            <ThirdColumn>
              <a
                href="https://github.com/Novartus/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
              >
                <span>
                  <FiGithub />
                </span>
              </a>
              <a
                href="https://twitter.com/hudaniabhee"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="twitter"
              >
                <span>
                  <FiTwitter />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/hudaniabhee"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                <span>
                  <FiLinkedin />
                </span>
              </a>
            </ThirdColumn>
          </Div>
        </Container>
      </Section>
    </>
  );
};

export default Footer;

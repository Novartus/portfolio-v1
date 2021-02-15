/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import Container from "../../components/Container";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import MailTo from "../../components/Helper/MailTo";
import Footer from "../../components/Footer/Footer";

const Main = styled.main`
  color: #fdfffc;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 120px 0;

  h1 {
    color: #ffc857;
    margin-bottom: 1em;
  }

  h2,
  h3 {
    font-weight: 600;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 0.35em;
  }
  h3 {
    font-size: 2rem;
    color: #cebbc9;
    margin-bottom: 0.5em;
  }

  p {
    margin-bottom: 3em;
    font-size: 1.125rem;
    max-width: 500px;
  }

  a {
    color: #ffc857;
    border: 1px solid #ffc857;
    border-radius: 4px;
    padding: 0.75em 1em;
  }
  @media screen and (max-width: 320px) {
    p {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 768px) {
    h2 {
      font-size: 4.5rem;
    }
    h3 {
      font-size: 4rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;

const Home = () => {
  return (
    <>
      <Main>
        <Section id="home">
          <Container>
            <h1>Hey, I'm</h1>
            <h2>Abhee Hudani.</h2>
            <h3>I build things for the web.</h3>
            <p>
              I'm a software engineer based in Gujarat, IN specializing in
              building exceptional websites, applications, and everything in
              between.
            </p>
            <MailTo
              email="hudaniabhee@gmail.com"
              subject="Available ?"
              body="Hey Abhee,"
            >
              Get in Touch
            </MailTo>
          </Container>
        </Section>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Main>
    </>
  );
};

export default Home;

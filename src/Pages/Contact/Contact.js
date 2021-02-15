import React from "react";
import styled from "styled-components";
import Container from "../../components/Container";
import MailTo from "../../components/Helper/MailTo";

const Section = styled.section`
  padding: 2em 0;
  margin-top: 8.5em;
`;

const Div = styled.div`
  display: grid;
  place-items: center;

  h2 {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 0.75em;
  }

  p {
    text-align: center;
    color: #cebbc9;
    margin-bottom: 2.5em;
    font-size: 1.5rem;
  }

  a {
    background: transparent;
    border: 1px solid #ffc857;
    outline: unset;
    padding: 0.5em 2em;
    color: #ffc857;
  }

  @media screen and (min-width: 768px) {
    p {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 1024px) {
    p {
      max-width: 70%;
    }
  }
`;

const Contact = () => {
  return (
    <>
      <Section id="contact">
        <Container>
          <Div>
            <h2>Get In Touch</h2>
            <p>
              I'm always looking for new opportunities, my inbox is always open.
              Whether you have a question or just want to say hi,
              <br />
              I'll try my best to get back to you!
            </p>
            <MailTo
              email="hudaniabhee@gmail.com"
              subject="Available ?"
              body="Hey Abhee,"
            >
              Let's Connect
            </MailTo>
          </Div>
        </Container>
      </Section>
    </>
  );
};

export default Contact;

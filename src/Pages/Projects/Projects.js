/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import Container from "../../components/Container";
import Placeholder from "../../components/Placeholder/Placeholder";
import projects from "../../allprojects";
import { FiGithub } from "react-icons/fi";

const Section = styled.section`
  padding: 2em 0;
  margin-top: 3.5em;
  position: relative;
  .show {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 1.5em;
    border: 1px solid #ffc857;
    padding: 0.75em 1em;
    color: #ffc857;
    transition: all 0.3s ease;
    cursor: pointer;
  }
`;

const Div = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
    grid-auto-flow: dense;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Box = styled.div`
  background: #051620;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  margin-top: 1.5em;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  &:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.02);
  }
  h2 {
    font-size: 1.75rem;
    margin: 0.5em 0 0.75em;
  }

  @media screen and (max-width: 320px) {
    h2 {
      font-size: 1.3rem;
    }
    .desc {
      font-size: 1rem;
      color: #cebbc9;
    }
  }

  @media screen and (min-width: 768px) {
    margin: 0;
    transition: all 0.3s ease;
  }

  @media screen and (min-width: 1200px) {
    .desc {
      font-size: 1.1rem;
    }
  }
`;
const Icons = styled.div`
  align-self: flex-end;

  a + a {
    margin-left: 1.5em;
  }

  .icons {
    font-size: 1.75rem;
  }
`;

class Projects extends React.Component {
  state = {
    itemsToShow: 6,
    expanded: false,
  };

  showMore = () => {
    this.state.itemsToShow === 6
      ? this.setState({ itemsToShow: projects.length, expanded: true })
      : this.setState({ itemsToShow: 6, expanded: false });
  };

  render() {
    return (
      <>
        <Section id="Projects">
          <Container>
            <Placeholder title="Projects"></Placeholder>
            <Div>
              {projects.slice(0, this.state.itemsToShow).map((project) => {
                return (
                  <Box key={project.id}>
                    <Icons>
                      <a
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="go to repo"
                      >
                        <FiGithub className="icons" />
                      </a>
                    </Icons>
                    <h2>{project.title}</h2>
                    <p className="desc">{project.description}</p>
                  </Box>
                );
              })}
            </Div>
            <a onClick={this.showMore} className="show">
              {this.state.expanded ? "Show Less" : "Show More"}
            </a>
          </Container>
        </Section>
      </>
    );
  }
}

export default Projects;

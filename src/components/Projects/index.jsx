import { projects } from '../../data/constants'
import { ProjectCards } from '../Cards/ProjectCards'
import { Container, Wrapper, Title, Desc, CardContainer  } from './ProjectsStyle'


export const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. Here are some of my projects.
        </Desc>
        <CardContainer>
          {projects
            .map((project,index) => (
              <ProjectCards key={index} project={project} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}
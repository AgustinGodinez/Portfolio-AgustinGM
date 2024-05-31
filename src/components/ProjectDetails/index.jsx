/* eslint-disable react/prop-types */
import { Modal } from "@mui/material";
import {
  ButtonView,
  Container,
  Date,
  Desc,
  Image,
  Tag,
  Tags,
  Title,
  Wrapper,
} from "./ProjectDetailsStyle";
import { CloseRounded } from "@mui/icons-material";
import { ImgCarousel } from "./ImgCarousel";

export const ProjectDetails = ({ project, handleClose, open }) => {
  return (
    <Modal open={open}>
      <Container>
        <Wrapper>
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={handleClose}
          />
          {!project?.ImgCarous ? (
            <Image src={project?.image} style={{height: '50vh',}} />
          ) : (
            <ImgCarousel ImgCarous={project?.ImgCarous}  />
          )}

          <Title>{project?.title}</Title>
          <Date>{project.date}</Date>
          <Tags>
            {project?.tags.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
          </Tags>
          <Desc>{project?.description}</Desc>
          {project?.webapp ? (
            <ButtonView href={project?.webapp} target="display">
              View Live App
            </ButtonView>
          ) : (
            <ButtonView>
              lack of budget to keep the CMS strapi server online
            </ButtonView>
          )}
        </Wrapper>
      </Container>
    </Modal>
  );
};

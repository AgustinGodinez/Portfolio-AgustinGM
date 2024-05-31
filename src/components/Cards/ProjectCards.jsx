import { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  Date,
  Description,
  Details,
  Image,
  Tag,
  Tags,
  Title,
} from "./ProjectCardsStyle";
import { ProjectDetails } from "../ProjectDetails";

export const ProjectCards = ({ project }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Card>
        <Image src={project.image || project.ImgCarous[0] } alt={project.title} />
        <Tags>
          {project.tags?.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>
        <Details>
          <Title>{project.title}</Title>
          <Date>{project.date}</Date>
          <Description>{project.description}</Description>
          <Button onClick={handleOpen}>View More...</Button>
        </Details>
      </Card>
      <ProjectDetails project={project} handleClose={handleClose} open={open}/>
    </>
  );
};

ProjectCards.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string,
    ImgCarous: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    member: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.string,
        name: PropTypes.string,
      })
    ),
  }),
};

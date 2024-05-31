import PropTypes from "prop-types";
import {
  Card,
  Image,
  Top,
  Body,
  Name,
  Degree,
  Date,
  Grade,
  Description,
  Span,
} from "./EducationCardStyle";

export const EducationCard = ({ education }) => {
  return (
    <Card>
      <Top>
        <Image src={education.img} />
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>
      <Grade>
        {education.Aptitudes && (
          <>
            <b>Aptitudes:</b> ${education.Aptitudes}
          </>
        )}
      </Grade>
      <Description>
        <Span>{education.desc}</Span>
      </Description>
    </Card>
  );
};
EducationCard.propTypes = {
  education: PropTypes.shape({
    img: PropTypes.string,
    school: PropTypes.string,
    degree: PropTypes.string,
    date: PropTypes.string,
    Aptitudes: PropTypes.string,
    desc: PropTypes.string,
  }),
};

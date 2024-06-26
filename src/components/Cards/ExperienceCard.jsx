import PropTypes from 'prop-types';
import { Body, Card, Company, Date, Description, Document, Image, ItemWrapper, Role, Skill, Skills, Span, Top } from './ExperienceCardStyle';

export const ExperienceCard = ({ experience }) => {
  return (
    <Card>
      <Top>
        <Image src={experience.img} />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Date>{experience.date}</Date>
        </Body>
      </Top>
      <Description>
        {experience?.desc && <Span>{experience?.desc}</Span>}
        {experience?.skills && (
          <>
            <br />
            <Skills>
              <b>Skills:</b>
              <ItemWrapper>
                {experience?.skills?.map((skill, index) => (
                  <Skill key={index}>• {skill}</Skill>
                ))}
              </ItemWrapper>
            </Skills>
          </>
        )}
      </Description>
      {experience.doc && (
        <a href={experience.doc} target="new">
          <Document src={experience.docImg} />
        </a>
      )}
    </Card>
  );
};

ExperienceCard.propTypes = {
    experience: PropTypes.shape({
      img: PropTypes.string,
      role: PropTypes.string,
      company: PropTypes.string,
      date: PropTypes.string,
      desc: PropTypes.string,
      skills: PropTypes.arrayOf(PropTypes.string),
      doc: PropTypes.string,
      docImg: PropTypes.string,
    }),
  };
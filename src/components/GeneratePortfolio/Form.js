import FormGroup from "../Bootstrap/FormGroup";
import AwardList from "../Form/Awards/AwardList";
import EducationList from "../Form/Education/EducationList";
import ExperienceList from "../Form/Experience/ExperienceList";
import FactList from "../Form/Facts/FactList";
import InterestList from "../Form/Interests/InterestList";
import ServiceList from "../Form/Services/ServiceList";
import SkillsList from "../Form/Skills/SkillsList";

const Form = ({TemplateID, FormData, Desc, onChange }) => {
  
  return (
    <div className="Form">
      <h3>Basic Info</h3>
      {Object.keys(FormData).map(
        fd =>
          Object.keys(Desc).includes(fd) && (
            <FormGroup
              key={fd}
              Label={Desc[fd][1]}
              Type={Desc[fd][0]}
              Id={fd}
              Desc={Desc[fd][2]}
              Value={FormData[fd]}
              Placeholder={`Enter something for ${Desc[fd][1]}`}
              onChange={fd === "FullName" ? () => {} : onChange}
              readOnly={fd === "FullName" ? true : undefined}
            />
          )
      )}
      {FormData.Experience && 
        <>
            <h3>Experience</h3>
            <ExperienceList />
        </>
      }
      {FormData.Education && 
        <>
            <h3>Education</h3>
            <EducationList />
        </>
      }
      {FormData.Skills && 
        <>
            <h3>Skills</h3>
            <SkillsList />
        </>
      }
      {FormData.Interests && 
        <>
            <h3>Interests</h3>
            <InterestList />
        </>
      }
      {FormData.Awards && 
        <>
            <h3>Awards</h3>
            <AwardList />
        </>
      }
      {FormData.Services &&
        <>
          <h3>Services</h3>
          <ServiceList />
        </>
      }  
      {FormData.Facts &&
        <>
          <h3>Facts/Statistics</h3>
          <FactList />
        </>
      }
    </div>
  );
};

export default Form;

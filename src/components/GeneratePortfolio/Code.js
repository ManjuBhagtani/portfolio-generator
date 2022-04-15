import { connect } from "react-redux";
import Template0 from "./PortfolioTemplates/Template0/Template0";

const Code = ({FormData, FullName, TemplateID}) => {
  const renderTemplate = (templateID) =>{
    switch(templateID){
      case 0: return <Template0 FormData={FormData} FullName={FullName}/>
      default:  return <Template0 FormData={FormData} FullName={FullName}/>
    }
  }

  return (
    <>
        {renderTemplate(TemplateID)}
    </>
  );
};

const mapStateToProps = state => ({
  experiences: state.experiences,
  educations: state.educations,
  awards: state.awards,
  interests: state.interests,
  skills: state.skills
});

export default connect(mapStateToProps)(Code);

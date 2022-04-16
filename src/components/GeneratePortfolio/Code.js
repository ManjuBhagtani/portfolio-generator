import { connect } from "react-redux";
import Template0 from "./PortfolioTemplates/Template0/Template0";
import Template1 from "./PortfolioTemplates/Template1/Template1";
import Template2 from "./PortfolioTemplates/Template2/Template2";
import Template3 from "./PortfolioTemplates/Template3/Template3";

const Code = ({FormData, FullName, TemplateID}) => {
  const renderTemplate = (templateID) =>{
    console.log(FormData);
    switch(templateID){
      case 0: return <Template0 {...FormData} FullName={FullName}/>
      case 1: return <Template1 {...FormData} FullName={FullName}/>
      case 2: return <Template2 FormData={FormData} FullName={FullName}/>
      case 3: return <Template3 FormData={FormData} FullName={FullName}/>
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

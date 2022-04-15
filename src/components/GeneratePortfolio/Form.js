import FormGroup from "../Bootstrap/FormGroup";

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
    </div>
  );
};

export default Form;

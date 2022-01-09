import FormGroup from "./Bootstrap/FormGroup"

const Form = ({FormData, onChange}) => {
    const Desc = {
      FullName: [
          "text", 
          "Full Name", 
          "This is your full name. This has been generated using your first and last names."
        ],
      FirstName: [
          "text", 
          "First Name", 
          "Please enter your first name or given name."
        ],
      LastName: [
          "text", 
          "Last Name", 
          "Please enter your last name or surname"
        ],
      Thubmnail: [
          "text", 
          "Your Photo", 
          "Please upload your photo in a CDN(Ex. Imgur) and paste the direct image URL here."
        ],
      URL: [
          "text", 
          "Website link",
          "Please enter the URL of your website, where this page is going to be hosted"
        ],
      Description: [
          "text", 
          "About you", 
          "Write something nice about you."
        ],
      Keywords: [
          "text", 
          "Keywords", 
          "If someone wants to search for you, what keywords should they use?"
        ],
      Address: [
          "text", 
          "Where are you?", 
          "Type in your full address to get kidnapped!"
        ],
      Phone: [
          "text", 
          "Phone Number", 
          "Please enter your phone number, so we can call you in the midnight!"
        ],
      Email: [
          "text", 
          "Email Address", 
          "Tell us your primary email address"
        ]
    }
    return (
        <div className="Form">
            {Object.keys(FormData).map(fd => (
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
            ))}
        </div>
    )
}

export default Form

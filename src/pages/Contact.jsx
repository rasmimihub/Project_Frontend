import '../styles/Contact.css';
function Contact () {
    return (
        <div className="contact-container">
            <div className="contact-form">
                <h2>Fill the form</h2>
                <form>
                    <label>Name:</label>
                    <input type='text' /> <br />
                    <label >Age:</label>
                    <input type='text' /> <br />
                    <label>Dob:</label>
                    <input type='date' />  <br />
                    <label>Gender:</label> 
                    <input type='radio' name='gender'/> Male
                    <input type='radio' name='gender'/> Female <br />
                    <label>Remarks:</label> <br />
                    <textarea /> <br />
                    <input type='submit' name='Submit' /> 
                    <input type='reset' name='Clear' />
                </form>
            </div>
        </div>

    );
}
export default Contact;
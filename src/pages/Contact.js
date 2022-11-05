import { useState } from 'react';
const Contact = () => {
  const name = "Chioma Nkanmuo";

  const [message, setMessage] = useState("")
  const [err, setErr] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!message){
      setErr(true);
    }else {setErr(false)}
  }
  return (
    <section className="container">
      <header className="header">
        <h1 className="heading">Contact Me</h1>
        <p className="description">
          Hi there, contact me to ask me about everything you have in mind
        </p>
      </header>

      {/* form section */}
         <div className="form__section">
         <form onSubmit={handleSubmit} id="form">
             <div className='name'>
             <div className="form__control">
                <label htmlFor="first_name">First name</label>
                <input
                  type="text"
                  id="first_name"
                  placeholder="Enter your first name"
                  required 
                />
               
              </div>
              <div className="form__control">
                <label htmlFor="last_name">Last name</label>
                <input
                  type="text"
                  id="last_name"
                  placeholder="Enter your last name"
                  required 
                />
              </div>
             </div>
              <div className="form__control">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="yourname@email.com"
                  required 
                />
              </div>
              <div className="form__control message">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={message}
                  placeholder="Send me a message and I'll reply as soon as possible..."
                  onChange={(e) => setMessage(e.target.value)}
                />
               {err?<p className='error'>Please enter a message</p>:null}
              </div>
              <div className="check-box">
                <input type="checkbox" id="checkbox" required />
                  <label htmlFor="checkbox" className="agree">
                    You agree to providing your data to {name} who may contact
                    you.
                  </label>
               
              </div>
            <button type="submit" id="btn__submit">Send message</button>
          </form>
         </div>
    </section>
  );
};

export default Contact;

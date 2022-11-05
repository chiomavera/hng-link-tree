const contact = () => {
  const name = "Chioma Nkanmuo";

  const formSubmit = (e) => {
    alert('sent');
    e.preventDefault();
  }

  return (
    <section class="container">
      <header className="header">
        <h1 className="heading">Contact Me</h1>
        <p className="description">
          Hi there, contact me to ask me about everything you have in mind
        </p>
      </header>

      {/* form section */}
         <div className="form__section">
         <form onSubmit={formSubmit} id="form">
              <div className="form__control">
                <label for="first_name">First name</label>
                <input
                  type="text"
                  id="first_name"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="form__control">
                <label for="last_name">Last name</label>
                <input
                  type="text"
                  id="last_name"
                  placeholder="Enter your last name"
                  required
                />
              </div>
              <div className="form__control">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="yourname@email.com"
                  required
                />
              </div>
              <div className="form__control message">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Send me a message and I'll reply as soon as possible..."
                  required
                />
                <small className="error">please enter message</small>
              </div>
              <div className="check-box">
                <input type="checkbox" id="checkbox"/>
                  <label for="checkbox" className="agree">
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

export default contact;

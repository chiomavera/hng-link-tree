import profilePicture from "../assets/profile.jpg";
const main = () => {
  return (
    <main id="wrapper">
      <div className="content_section">
        <header className="profile_section">
          <img src={profilePicture} alt="profile" id="profile_img" />
          <div id="twitter">
          <h3 className="twitter-username">
            <a href="https://twitter.com/nkanmuo_vera">nkanmuo_vera</a>
            </h3>
          </div>
          <p id="slack">Chioma Nkanmuo</p>
          
          <div>
          <button className="share-btn">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <g><path fill="none" d="M0 0h24v24H0z"></path><path d="M13 14h-2a8.999 8.999 0 0 0-7.968 4.81A10.136 10.136 0 0 1 3 18C3 12.477 7.477 8 13 8V2.5L23.5 11 13 19.5V14zm-2-2h4v3.308L20.321 11 15 6.692V10h-2a7.982 7.982 0 0 0-6.057 2.773A10.988 10.988 0 0 1 11 12z"></path>
              </g>
              </svg>
          </button>
          </div>
        </header>

        <section className="links-section">
         <div id="btn_zuri">
          <a className="links" href="https://training.zuri.team/">Zuri Team</a>
          </div>
         <div id="books">
          <a className="links"  href="http://books.zuri.team/" title="this is where you find books about design and coding">Zuri books</a>
          </div>
         <div id="book_python">
          <a className="links" href="https://books.zuri.team/python-for-beginners?ref_id=<Chioma Nkanmuo>" title="Get your Python books here, 20% discount">Python Books</a>
          </div>
         <div id="pitch">
          <a className="links" href="https://background.zuri.team/" title="At Zuri Team, we offer a service that runs background checks on Coders">Background Checks for Coders</a>
          </div>
         <div id="book-design" >
          <a className="links"href="https://training.zuri.team/" title="Looking for a free book on design? Click here">Design Books</a>
          </div>
        </section> 
      </div>

      <div className="socials">
        <div id="slack">
          {/* <a href=""></a> */}
        </div>
      </div>

      <footer>
        <div>
          <div id="zuriIntershipLogo"></div>
          <div id="footer-text">
            <p>HNG 9 Frontend Task</p>
          </div>
          <div id="I4GLogo"></div>
        </div>
      </footer>
    </main>
  );
};

export default main;

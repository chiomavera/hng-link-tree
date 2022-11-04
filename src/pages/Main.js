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
        <div className="slack">
          <a href="https://github.com/chiomavera">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"></path></svg>
          </a>
        </div>
        <div>
          <a href="https://github.com/chiomavera">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
          </a>
        </div>
      </div>

      <footer id="footer">
          <div id="zuriIntershipLogo">
            <img src="data:image/png;base64,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" class="zuriLogo" alt="zuri__logo"></img>
          </div>
          <div>
            <p id="footer-text">HNG 9 internship Frontend Task</p>
          </div>
          <div id="I4GLogo">
            <img src="data:image/png;base64,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" alt="i4g__logo"></img>
          </div>
      </footer>
    </main>
  );
};

export default main;

import profilePicture from "../assets/profile.jpg";
const main = () => {
  return (
    <main>
      <section className="content_section">
         {/* profile section */}
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

        {/* link section */}
        <div className="links-section">
        <div>
          <a className="links" id="btn_twitter" href="https://twitter.com/nkanmuo_vera">Twitter Link</a>
          </div>
         <div>
          <a className="links" id="btn_zuri" href="https://training.zuri.team/">Zuri Team</a>
          </div>
         <div>
          <a className="links" id="books"  href="http://books.zuri.team/" title="this is where you find books about design and coding">Zuri books</a>
          </div>
         <div>
          <a className="links"  id="book_python" href="https://books.zuri.team/python-for-beginners?ref_id=<Chioma Nkanmuo>" title="Get your Python books here, 20% discount">Python Books</a>
          </div>
         <div>
          <a className="links" id="pitch" href="https://background.zuri.team/" title="At Zuri Team, we offer a service that runs background checks on Coders">Background Checks for Coders</a>
          </div>
         <div>
          <a className="links" id="book_design"  href="https://training.zuri.team/" title="Looking for a free book on design? Click here">Design Books</a>
          </div>
          <div>
          <a className="links" id="contact" href="/contact" title="Leave me a quick message">Contact Me</a>
          </div>
        </div> 
      </section>

       {/* social section */}
      <section className="socials">
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
      </section>
    </main>
  );
};

export default main;

import "./App.css";
import mj from "./assets/mj.jpg";

function App() {
  function sendMessage() {
    document.getElementById("email").value = "";
    document.getElementById("username").value = "";
    alert("Message Sent!");
  }

  return (
    <>
      <form method="post" id="contactForm"></form>

      <div className="container">
        <nav className="navbar">
          {/* <button className="menu-btn" id="menu-btn">=</button> */}
          <ul className="navLinks" id="navLinks">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <section id="hero" className="hero">
          <div className="hero-left-content">
            <h1>Micheal</h1>
            <p>
              Music and motion creator focused on sharp dance moves and perfect
              stage production.
            </p>
          </div>

          <div className="hero-right-content">
            <img src={mj} alt="Picture of me" />
          </div>
        </section>

        <section id="about" className="about">
          <div className="about-mj">
            <label>
              <h1>About Me</h1>

              <p>
                "The music is everything. If you can’t feel it, the audience
                won’t either. We aren't just making records anymore; we are
                creating visual universes."
              </p>
            </label>
          </div>
        </section>

        <section id="contact" className="contact">
          <h1>Any Enquiries...?</h1>

          <div className="queries">
            <label htmlFor="username">Name :</label>
            <input type="text" id="username" name="username" />

            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" />

            <button type="button" onClick={sendMessage}>
              Send Message
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;

import { Link } from "react-router";
import img from "../assets/logo.jpg";



const Main = () => (
  <section id="he" className="hero-container">
    <div className="hero-content">
      <div className="left-part">
        <h2>
          Test Your Knowledge, <br></br> Compete Globally!
        </h2>
        <p>
          Quizzes and tests aren't just for education and learning. Our quiz
          also include fun and unique questions. Fans of tricky questions and
          riddles can enjoy brain test: Tricky Puzzles. If humor and laughter is
          your thing, then you will enjoy the impossible quiz.
        </p>

        <div className="start-btn">
          <Link to="/login"><button class="button">Start Session</button></Link>
        </div>
      </div>
      <div className="right-part">
        <img src={img}></img>
      </div>
    </div>
  </section>
);

export default Main;

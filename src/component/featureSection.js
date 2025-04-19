import img from "../assets/ai.jpg";
import ar from "../assets/imglogo/Multiplayer.png"
import ar1 from "../assets/imglogo/Leaderboards.png"
import ar2 from "../assets/imglogo/progress.png"
import ar3 from "../assets/imglogo/Rewards.png"
import ar4 from "../assets/imglogo/Security.png"
import ar5 from "../assets/imglogo/Social interaction.png"

const FeatureSection = () => (
  <div className="feature-container" id="feature-id">
    <div className="feature-content">
      <h2>Features</h2>
      <div className="feature-grid">
        {/* card1 */}
        <div class="card">
          <div className="card-icon">
            <img className="card-img" src={ar}></img>
          </div>
          <h3>Multiplayer Interaction</h3>
          <p>
            The system supports both cooperative and competitive modes, enabling
            players to work together or challenge each other. A matchmaking
            system ensures fair play by pairing users based on skill level or
            preferences.{" "}
          </p>
        </div>
        {/* card2 */}
        <div className="feature-card">
        <div className="card">
        <div className="card-icon">
            <img className="card-img" src={ar2}></img>
          </div>
          <h3>Progress Tracking</h3>
          <p>
            It provides progress tracking helps in personalizing the experience,
            providing feedback on areas for improvement or unlocking new content
            as users reach specific goals.
          </p>
        </div>
        </div>
        {/* card3 */}
        <div className="feature-card">
         <div className="card">
         <div className="card-icon">
            <img className="card-img" src={ar3}></img>
          </div>
          <h3>Rewards</h3>
          <p>
            It provides the game or app enhances the player's sense of
            accomplishment and satisfaction, making the experience more engaging
            and encouraging continued participation.
          </p>
         </div>
        </div>
        {/* card4 */}
        <div className="feature-card">
        <div className="card">
        <div className="card-icon">
            <img className="card-img" src={ar1}></img>
          </div>
          <h3>Leaderboard</h3>
          <p>
            They serve to highlight top players or teams, fostering a sense of
            competition and motivation among users. This system encourages
            players to strive for improvement in order to climb the ranks and
            gain recognition.
          </p>
        </div>
        </div>
        {/* card5 */}
        <div className="feature-card">
         <div className="card">
         <div className="card-icon">
            <img className="card-img" src={ar4}></img>
          </div>
          <h3>Security</h3>
          <p>
            This include anti-cheat systems to maintain fair play,use
            third-party tools to gain an unfair advantage. Secure authentication
            methods, like two-factor authentication (2FA), can be used to verify
            user identity and prevent account theft.{" "}
          </p>
         </div>
        </div>
        {/* card6 */}
        <div className="feature-card">
          <div className="card">
          <div className="card-icon">
            <img className="card-img" src={ar5}></img>
          </div>
          <h3>Social Interaction</h3>
          <p>
            This can include chat systems that enable real-time communication,
            allowing players to strategize, socialize, or just interact
            casually. Social interaction also encompasses features like sharing
            stats with friends via social platforms.{" "}
          </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FeatureSection;

import "./App.css";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <Container fluid className="portfolioDesign">
      <Row className="rowDesign">
        <div className="fistBoxHome">
          <div className="firstInsideBox">
            <div className="hiDesign">Hola, soy...</div>
            <div className="nameDesign">Vanessa Brito.</div>
            <div className="developerDesign">Web developer.</div>
          </div>
          <div className="secondInsideBox">
            <div className="socialMedia">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/F2F8F8/linkedin.png"
                alt="linkedin"
              /><br/>
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/glyph-neue/64/F2F8F8/github.png"
                alt="github"
              /><br/>
              <img 
                width="50" 
                height="50" 
                src="https://img.icons8.com/ios/50/F2F8F8/mail.png" 
                alt="mail"
              />
            </div>
          </div>
        </div>
        <div className="fistBoxHome"></div>
      </Row>
    </Container>
  );
}

export default App;

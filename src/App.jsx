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
      <Row>
        <div className="stackDesign">
          <div className="tecDesign">Tecnologías</div>
          <div className="tecInside">
            <div>
              <h2>Frontend</h2>
              <div>
              <img width="30" height="30" src="https://img.icons8.com/ios/30/e9ecf0/html-5--v2.png" alt="html-5--v2"/> HTML<br/>
              <img width="30" height="30" src="https://img.icons8.com/ios/30/e9ecf0/css3.png" alt="css3"/> CSS<br/>
              <img width="30" height="30" src="https://img.icons8.com/ios/30/e9ecf0/react-native--v1.png" alt="react-native--v1"/> React<br/>
              <img width="30" height="30" src="https://img.icons8.com/ios/30/e9ecf0/javascript--v1.png" alt="javascript--v1"/> JavaScript<br/>
              <img width="30" height="30" src="https://img.icons8.com/ios/30/e9ecf0/typescript.png" alt="typescript"/> TypeScript<br/>
              <img width="30" height="30" src="https://img.icons8.com/ios/30/e9ecf0/redux.png" alt="redux"/> Redux<br/>
              <img width="30" height="30" src="https://img.icons8.com/ios/30/e9ecf0/bootstrap.png" alt="bootstrap"/> Bootstrap<br/>
              </div>
            </div>
            <div>
              <h2>Backend</h2>
              <div>
              <img width="30" height="30" src="https://img.icons8.com/ios/30/1A1A1A/php-logo.png" alt="php-logo"/> PHP<br/>
                Laravel<br/>
                SQL<br/>
                MySQL<br/>
                Node.js<br/>
                Express<br/>
                MongoDB<br/>
              </div>
            </div>
            <div>
              <h2>Herramientas</h2>
              <div>
                Git<br/>
                GitHub<br/>
                ThunderClient<br/>
                Postman<br/>
                Docker<br/>
                Deploy AWS<br/>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default App;

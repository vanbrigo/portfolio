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
              <a href="https://www.linkedin.com/in/vanessabritogonzalez/" target="_blank" rel="noopener noreferrer">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/F2F8F8/linkedin.png"
                alt="linkedin"
              /></a><br/>
              <a href="https://github.com/vanbrigo" target="_blank" rel="noopener noreferrer">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/glyph-neue/64/F2F8F8/github.png"
                alt="github"
              /></a><br/>
              <a href="mailto:vanessabritogonzalez@gmail.com" title="Envíame un correo">
              <img 
                width="50" 
                height="50" 
                src="https://img.icons8.com/ios/50/F2F8F8/mail.png" 
                alt="mail"
              /></a>
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
              <img width="30" height="30" src="https://img.icons8.com/ios/30/e9ecf0/php-logo.png" alt="php-logo"/> PHP<br/>
              <img width="30" height="30" src="https://img.icons8.com/ios/30/e9ecf0/laravel.png" alt="laravel"/> Laravel<br/>
              <img width="30" height="30" src="https://img.icons8.com/external-outline-juicy-fish/30/e9ecf0/external-sql-coding-and-development-outline-outline-juicy-fish.png" alt="external-sql-coding-and-development-outline-outline-juicy-fish"/> SQL<br/>
              <img width="30" height="30" src="https://img.icons8.com/material-rounded/30/e9ecf0/mysql-logo.png" alt="mysql-logo"/> MySQL<br/>
              <img width="30" height="30" src="https://img.icons8.com/windows/30/e9ecf0/node-js.png" alt="node-js"/> Node.js<br/>
              <img width="30" height="30" src="https://img.icons8.com/ios/30/e9ecf0/express-js.png" alt="express-js"/> Express<br/>
              <img width="30" height="30" src="https://img.icons8.com/external-tal-revivo-light-tal-revivo/30/e9ecf0/external-mongodb-a-cross-platform-document-oriented-database-program-logo-light-tal-revivo.png" alt="external-mongodb-a-cross-platform-document-oriented-database-program-logo-light-tal-revivo"/> MongoDB<br/>
              </div>
            </div>
            <div>
              <h2>Herramientas</h2>
              <div>
              <img width="30" height="30" src="https://img.icons8.com/ios/30/e9ecf0/git.png" alt="git"/> Git<br/>
              <img width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/30/e9ecf0/github.png" alt="github"/> GitHub<br/>
              <img width="30" height="30" src="https://img.icons8.com/wired/30/e9ecf0/postman-api.png" alt="postman-api"/> Postman<br/>
              <img width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/30/e9ecf0/docker.png" alt="docker"/> Docker<br/>
              <img width="30" height="30" src="https://img.icons8.com/windows/30/e9ecf0/amazon-web-services.png" alt="amazon-web-services"/> Deploy AWS<br/>
              </div>
            </div>
          </div>
        </div>
      </Row>
      <Row className="rowDesign">
        <div className="studiesDesign">
          <h2>Formacion academica</h2>
        </div>
        <div className="studiesDesign">
          <h2></h2>
        </div>
      </Row>
    </Container>
  );
}

export default App;

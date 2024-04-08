import gmail from "../../img/gmail.png";
import linkedin from "../../img/linkedin.png";
import github from "../../img/github.png";

function Contatos() {
  return (
    <main>
      <div className="contatos">
        <a href="https://www.google.com">
          <img src={gmail} alt="gmail" className="redes" />
        </a>
        <a href="https://www.linkedin.com/in/enzo-brincalepe/">
          <img src={linkedin} alt="gmail" className="redes" />
        </a>
        <a href="https://github.com/E-brinca64">
          <img src={github} alt="gmail" className="redes" />
        </a>
      </div>
    </main>
  );
}

export default Contatos;

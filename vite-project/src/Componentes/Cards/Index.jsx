import htmlImg from "../../img/html-5.png";
import cssImg from "../../img/css-3.png";
import javascriptImg from "../../img/js.png";
import powerpoinImg from "../../img/powerpoint.png";
import excelImg from "../../img/excel.png";

function Habilidades() {
  return (
    <main>
      <div className="habilidades">
        <div className="card">
          <img src={htmlImg} alt="Html" />
          <h2>Html</h2>
        </div>
        <div className="card">
          <img src={cssImg} alt="Css" />
          <h2>Css</h2>
        </div>
        <div className="card">
          <img src={javascriptImg} alt="JavaScript" />
          <h2>JavaScript</h2>
        </div>
        <div className="card">
          <img src={powerpoinImg} alt="PowerPoint" />
          <h2>PowerPoint</h2>
        </div>
        <div className="card">
          <img src={excelImg} alt="Excel" />
          <h2>Excel</h2>
        </div>
      </div>
    </main>
  );
}

export default Habilidades;
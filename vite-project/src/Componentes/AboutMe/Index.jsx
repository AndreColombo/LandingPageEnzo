import zenzo from '../../img/Zenzo.jpg'

function AboutMe() {
  return (
    <main>
      <div className="banner">
        <img className="meImg" src={zenzo} alt="Me" />
        <div className="sobreMim">
          <p className="aboutMe">😐 About Me</p>

          <p className="aboutMeFact1">
            🔭 Desvendando O Universo Da Programação
          </p>
          <p className="aboutMeFact2">🎓 Estudante Front e Back End</p>
          <p className="aboutMeFact3">🎸 Guitarrista No Tempo Livre</p>
          <p className="aboutMeFact4">🚀 Buscando Oportunidades De Trabalho</p>
        </div>
      </div>
    </main>
  );
}

export default AboutMe;

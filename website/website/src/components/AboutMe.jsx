import melanie from '../img/melanie.jpeg';
export default function AboutMe() {
  return (
      <>
<section id="about">
  <div className="container">
    <div className="row">
      <h1>About</h1>
      <div className="block"></div>
      <div className="row">
        <div className="six columns">
          <p>Welcome to my corner of the digital world! I'm currently pursuing a master's degree in software
            development at the University of Utah, where I bring together my technical prowess with a solid background
            in biochemistry.
            My career kick-started in pivotal roles within laboratory and clinical settings, where I fueled
            groundbreaking research and provided crucial support to patients and healthcare professionals.
            Now, embarking on a new path, I'm diving into the world of software development, eager to hone my
            technical skills and broaden my knowledge. Proficient in an array of coding languages-including C++, Java,
            JavaScript, REACT, and android app development in Android Studios-I bring a diverse skill set to the
            table.
            My expertise extends beyond software development, allowing me to navigate intricate codebases and bring
            innovative solutions to life.
            Beyond coding, I revel in hobbies like D&D, board games, hiking, backpacking, skiing, and the thrill of
            rollerblading.</p>
        </div>
        <div className="six columns">
          <div className="well">
            <img src={melanie} style={{height: '70%', width: '100%'}}/>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</>
    );
    }


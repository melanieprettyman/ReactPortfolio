
export default function Contact() {
  return (
  <>
      <section id="contact">

          <div className="container">
              <h1>Contact</h1>
              <div className="block"></div>

              <div className="col-lg-4 col-md-4 hidden-sm hidden-xs">
                  <h5>240 587-8545</h5>
                  <div className="spacer"></div>
                  <h5>melanie.prettyman98@gmail.com</h5>
                  <div className="spacer"></div>
                  <a href="https://www.linkedin.com/in/melanie-prettyman-875189289/"><h5>Linkedin</h5></a>

                  <div className="spacer"></div>
                  {/* Link to open the PDF file */}
                  <a href="/Melanie Prettyman Resume.pdf" target="_blank" rel="noopener noreferrer"><h5>View My
                      Resume</h5></a>
          </div>
          </div>

    </section>


  </>
    );

}

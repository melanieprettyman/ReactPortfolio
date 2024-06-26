import projects from "./projectList";
import ProjectTile from "./ProjectTile";

export default function Portfolio() {
    const row1 = projects.row1;
    const row2 = projects.row2;

    return (
        <>
      <section id="portfolio">
        <div className="container">

            <h1>Portfolio</h1>
            <div className="block"></div>

            <div className="row">
             {row1.map((project, index) => (
                  <ProjectTile
                    key={index}
                    url={project.url}
                    img={project.img}
                    title={project.title}
                    toolTags={project.toolTags}
                  />
                ))}
             </div>
            <div className="row" style={{marginTop: '30px'}}>
                 {row2.map((project, index) => (
                      <ProjectTile
                        key={index}
                        url={project.url}
                        img={project.img}
                        title={project.title}
                        toolTags={project.toolTags}

                      />
                    ))}
            </div>
      </div>
    </section>
    </>

  );
}

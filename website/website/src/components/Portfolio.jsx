import projects from "./projectList";
import PortfolioCard from "./Card";
import {Box, Grid} from "@mui/material";

export default function Portfolio() {
    const row1 = projects.row1;
    const row2 = projects.row2;

    return (
            <Box sx={{flexGrow: 1, padding: 15}}>
                <div className="container">
                    <h1>Portfolio</h1>
                    <div className="block"></div>
                </div>
                <Grid container spacing={2}>
                    {row1.map((project, index) => (
                        <PortfolioCard
                            key={index}
                            url={project.url}
                            img={project.img}
                            title={project.title}
                            tags={project.tags}
                        />
                    ))}
                    {row2.map((project, index) => (
                        <PortfolioCard
                            key={index}
                            url={project.url}
                            img={project.img}
                            title={project.title}
                            tags={project.tags}

                        />
                    ))}
                </Grid>

            </Box>
    );
};



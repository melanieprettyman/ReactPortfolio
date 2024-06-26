import Card from 'react-bootstrap/Card';

export default function ProjectTile({ url, img, title, toolTags }) {
    return (
        <a href={url} style={{ textDecoration: 'none' }}>
            <div className="three columns">
                <Card className="project-card">
                    <Card.Img variant="top" src={img} className="card-image"/>
                    <Card.Body>
                        <Card.Title className="card-title">{title}</Card.Title>
                        <div className="tags">
                            {toolTags.map((tag, index) => (
                                <span key={index} className="tag">{tag.label}</span>
                            ))}
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </a>
    );
}

import Card from 'react-bootstrap/Card';
import Tag from "./Tag";

export default function ProjectTile({ url, img, title, tags }) {
    return (
        <a href={url} style={{ textDecoration: 'none' }}>
            <div className="three columns">
                <Card className="project-card">
                    <Card.Img variant="top" src={img} className="card-image"/>
                    <Card.Body>
                        <Card.Title className="card-title">{title}</Card.Title>
                        <div className="tags">
                            {tags?.map(tag => (
                                <Tag key={tag.label} label={tag.label} type={tag.type}/>
                            ))}
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </a>
    );
}

import React from 'react';
import { Card, CardMedia, CardContent, Grid, Typography } from '@mui/material';
import Tag from "./Tag";

export default function PortfolioCard({ url, img, title, tags }) {
     const styles = {
        card: {
            display: 'flex', // Using flex to manage internal spacing
            flexDirection: 'column', // Stack media and content vertically
            cursor: 'pointer',
            transition: 'box-shadow 0.3s',
            '&:hover': {
                opacity: 0.6,
                transition: '0.3s',
                backgroundImage: 'url(./img/white.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            },
            height: '100%', // Make card fill the parent container
        },
        media: {
            height: 300, // Consistent height for all images
        },
        content: {
            flexGrow: 1, // Allows content to expand and fill the space
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between', // Space distribution for title and tags
            padding: '16px' // Padding inside content for overall spacing
        },
        title: {
            marginBottom: '10px' // Space between title and tags
        },
        tagsContainer: {
            display: 'flex', // Optional: for layout of tags
            flexWrap: 'wrap', // Optional: allows tags to wrap
            gap: '4px' // Optional: space between tags
        }
    };

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <a href={url} style={{textDecoration: 'none'}}>
                <Card sx={styles.card} >
                    <CardMedia
                        component="img"
                        sx={styles.media}
                        image={img}
                        alt={title}
                    />
                    <CardContent sx={styles.content}>
                        <h5 className={styles.title}>{title}</h5>
                        <div style={styles.tagsContainer}>
                            {tags?.map((tag, index) => (
                                <Tag key={index} label={tag.label} type={tag.type}/>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </a>
        </Grid>
);
};

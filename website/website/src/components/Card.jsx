import React from 'react';
import { Card, CardMedia, CardContent, Grid } from '@mui/material';
import Tag from "./Tag";

export default function PortfolioCard({ url, img, title, tags }) {
    const styles = {
        card: {
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer',
            transition: 'box-shadow 0.3s',
            '&:hover': {
                opacity: 0.6,
                transition: '0.3s',
                backgroundImage: 'url(./img/white.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            },
            height: '100%',
            maxWidth: { xs: '100%', sm: '300px', md: '300px', lg: '300px', xl: '300px' }, // Limit max width for large screens
        },
        media: {
            height: { xs: 150, sm: 250, md: 300 },
            width: '100%', // Make media width 100% of the card width
        },
        content: {
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '16px'
        },
        title: {
            marginBottom: '10px',
            display: 'block',
            whiteSpace: 'normal',
        },
        tagsContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '4px'
        }
    };

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <a href={url} style={{ textDecoration: 'none' }}>
                <Card sx={styles.card}>
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
                                <Tag key={index} label={tag.label} type={tag.type} />
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </a>
        </Grid>
    );
}

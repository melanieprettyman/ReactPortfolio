import React from 'react';
import Chip from '@mui/material/Chip';

export default function Tag({label, type}) {
    const getTypeColor = (type) => {
        const typeColors = {
            java: {backgroundColor: '#fda72e'}, // Yellow for Java
            javascript: {backgroundColor: '#F0DB4F'}, // Yellow for JavaScript
            android: {backgroundColor: '#3DDC84'}, // Green for Android Studio
            web: {backgroundColor: '#E34C26'}, // Red for Web Technologies
            threading: {backgroundColor: '#6890F0'}, // Blue for Threading
            router: {backgroundColor: '#78C850'}, // Green for Object-Oriented Programming
            query: {backgroundColor: '#b953ec'}, // Darker tone for Algorithms
            react: {backgroundColor: '#61DAFB'},
            cpp: {backgroundColor: '#ff7c2f'},
            os: {backgroundColor: '#F44336'},
            reactContext: {backgroundColor: '#f182a8'},
            express: {backgroundColor: '#009688'},
            nodejs: {backgroundColor: '#e3b6ff'},
            rf: {backgroundColor: '#0e8ef8'},
            storage: {backgroundColor: '#bfe7f8'},
            cd: {background: 'linear-gradient(to right, #f12711, #f5af19)'},
            ts: {background: 'linear-gradient(to right, #9bf8f4, #6f7bf7)'},
            oop: {background: 'linear-gradient(to right, #11998e, #38ef7d)'},
            c2: {background: 'linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)'}

        };
        return typeColors[type] || {backgroundColor: '#A0A0A0'};
    };

    return (
        <Chip
            label={label}
            size="small"
            sx={{
                ...getTypeColor(type),
                color: '#070707',
                fontSize: {xs: '0.6rem', sm: '1rem', md: '1.1rem'},
                height: 24,
                borderRadius: '9px',
                marginRight: '3px',
                '& .MuiChip-label': {
                    display: 'block',
                    whiteSpace: 'normal',
                },
            }}
        />
    );
}


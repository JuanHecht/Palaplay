import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function FriendCard({ friend }) {
    return (
        <Card style={{ margin: 20, backgroundColor: '#CBD5C0', height: '400px'}}>
            <CardContent>
            <img src={friend.profile_img} alt={friend.name} style={{ width: '230px', marginTop: 10, height: '230px', objectFit: 'cover' }} />
                <Typography variant="h5" component="h2">
                    {friend.name}
                </Typography>
                <Typography color="textSecondary">
                    Age: {friend.age} | Gender: {friend.gender}
                </Typography>
                <Typography variant="body2" component="p">
                    Level: {friend.level}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default FriendCard;

import friendsData from '../data/friends.json'; 
import FriendCard from '../components/FriendCard';
import { Grid } from '@mui/material';

function MyFriends() {
    const { friends } = friendsData; 

    return (
        <div>
            <Grid container spacing={3}>
                {friends.map((friend) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={friend.name} >
                        <FriendCard key={friend.name} friend={friend} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default MyFriends;

/* 
Displaying cards without MUI (In case we need it)

{friends.map((friend) => {
                return (
                    <div>
                        <img src={friend.profile_img} height={50} width={50} alt="Profile" />
                        <div>
                            <p>Name: {friend.name}</p>
                            <p>Age: {friend.age}</p>
                            <p>Gender: {friend.gender}</p>
                            <p>Level/Experience: {friend.level}</p>
                        </div>
                                               
                    </div>
                );
            })} */

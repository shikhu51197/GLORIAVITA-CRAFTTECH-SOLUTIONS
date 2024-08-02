import React from 'react';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography, Box, Paper } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { styled } from '@mui/material/styles';

const feedbacks = [
  { id: 1, img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzI2NjB8MHwxfGFsbHwxfHx8fHx8fHwxNjQ0NzUyMTI4&ixlib=rb-1.2.1&q=80&w=400", customer: 'Wade Warren', rating: 4, comment: 'Excellent service!' },
  { id: 2, img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzI2NjB8MHwxfGFsbHwxfHx8fHx8fHwxNjQ0NzUyMTI4&ixlib=rb-1.2.1&q=80&w=400", customer: 'Jane Cooper', rating: 2, comment: 'Very good, but room for improvement lorem Ipsum is simply dummy text et just another.' },
  { id: 3, img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzI2NjB8MHwxfGFsbHwxfHx8fHx8fHwxNjQ0NzUyMTI4&ixlib=rb-1.2.1&q=80&w=400", customer: 'Guy Hawkins', rating: 4, comment: 'Fast delivery, highly recommend!lorem Ipsum is simply dummy text et just another' },
  { id: 4, img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzI2NjB8MHwxfGFsbHwxfHx8fHx8fHwxNjQ0NzUyMTI4&ixlib=rb-1.2.1&q=80&w=400", customer: 'Kristin Watson', rating: 3, comment: 'Average experiencelorem Ipsum is simply dummy text et just another.' },
  { id: 5, img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzI2NjB8MHwxfGFsbHwxfHx8fHx8fHwxNjQ0NzUyMTI4&ixlib=rb-1.2.1&q=80&w=400", customer: 'Cody Fisher', rating: 5, comment: 'Fantastic products and service lorem Ipsum is simply dummy text et just another!' },
   { id: 6, img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzI2NjB8MHwxfGFsbHwxfHx8fHx8fHwxNjQ0NzUyMTI4&ixlib=rb-1.2.1&q=80&w=400", customer: 'Kristin Watson', rating: 3, comment: 'Average experiencelorem Ipsum is simply dummy text et just another.' },
  { id: 7, img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzI2NjB8MHwxfGFsbHwxfHx8fHx8fHwxNjQ0NzUyMTI4&ixlib=rb-1.2.1&q=80&w=400", customer: 'Cody Fisher ', rating: 5, comment: 'Fantastic products and service! lorem Ipsum is simply dummy text et just another' },
  { id: 8, img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzI2NjB8MHwxfGFsbHwxfHx8fHx8fHwxNjQ0NzUyMTI4&ixlib=rb-1.2.1&q=80&w=400", customer: 'Cody Fisher ', rating: 5, comment: 'Fantastic products and service! lorem Ipsum is simply dummy text et just another' }
];


const StyledStarIcon = styled(StarIcon)(({ theme }) => ({
  color: theme.palette.warning.main,
}));

const StyledStarBorderIcon = styled(StarBorderIcon)(({ theme }) => ({
  color: theme.palette.warning.main,
}));

const renderRating = (rating) => {
  return (
    <>
      {[...Array(5)].map((star, index) => {
        return index < rating ? <StyledStarIcon key={index} /> : <StyledStarBorderIcon key={index} />;
      })}
    </>
  );
};

const Feedback = () => {
  return (
    <Box component={Paper} sx={{ overflowY: 'auto', maxHeight: 550, p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Customer's Feedback 
      </Typography>
      <List>
        {feedbacks.map((feedback) => (
          <ListItem key={feedback.id} alignItems="flex-start" sx={{ borderBottom: '1px solid #444', padding: 2 }}>
            <ListItemAvatar>
              <Avatar src={feedback.img} alt={feedback.customer} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Box display="flex" flexDirection="column">
                  <Typography variant="body1">
                    {feedback.customer}
                  </Typography>
                  <Box display="flex" alignItems="center">
                    {renderRating(feedback.rating)}
                  </Box>
                </Box>
              }
              secondary={
                <Typography variant="body2">
                  {feedback.comment}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Feedback;

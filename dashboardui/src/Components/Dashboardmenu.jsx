import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Paper, Box, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags'; 
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuBookIcon from '@mui/icons-material/MenuBook'; 


const Chevron = styled(ChevronRightIcon)`
  color: #fff;`
;

const DashboardMenu = () => {
  const menuItems = [
    { text: 'Goals', icon: <EmojiFlagsIcon css={css`color: teal;`} /> },
    { text: 'Popular Dishes', icon: <FastfoodIcon css={css`color: red;`} /> },
    { text: 'Menus', icon: <MenuBookIcon css={css`color: blue;`} /> },
  ];

  return (
 
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} button sx={{ mb: 2, p: 1.5 }}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={<Typography>{item.text}</Typography>} />
            <Chevron />
          </ListItem>
        ))}
      </List>
 
  );
};

export default DashboardMenu;

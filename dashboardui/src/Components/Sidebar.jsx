import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Box,
} from "@mui/material";
import { Home, Assessment, Settings, Feedback } from "@mui/icons-material";

const Sidebar = ({ variant, open, onClose }) => {
  return (
    <Drawer
      variant={variant}
      open={open}
      onClose={onClose}
      spacing={2}
      sx={{
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: 60, mt: 7},
      }}
    >
      <Box>
        <List>
          <ListItem button>
            <ListItemIcon>
              <Home sx={{  color: 'blue' }}/>
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Assessment />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Feedback />
            </ListItemIcon>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;

import React, { useState } from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  CircularProgress,
  IconButton,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CancelIcon from "@mui/icons-material/Cancel";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ActivityChart from "./ActivityChart";
import Orders from "./Orders";
import Sidebar from "./Sidebar";
import Feedback from "./Feedback";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import DashboardMenu from "./Dashboardmenu";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* sidebar */}
      <Sidebar
        variant={isMobile ? "temporary" : "permanent"}
        open={sidebarOpen}
        onClose={handleSidebarToggle}
      />
      <Box
        sx={{
          flexGrow: 1,
          p: 2,
          ml: { xs: 2, sm: 3, md: 4 }, // Adjusts the left margin based on screen size
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          ...(sidebarOpen &&
            !isMobile && {
              marginLeft: "300px",
            }),
        }}
      >
        {isMobile && (
          <IconButton onClick={handleSidebarToggle}>
            <MenuIcon />
          </IconButton>
        )}
        {/* dashboard cards in one line */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">Dashboard</Typography>
          </Grid>

          <Grid container spacing={2} justifyContent="space-between" mt={3}>
            <Grid item xs={12} sm={4} md={2}>
              <Paper sx={{ p: 5 }}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <ShoppingBagIcon sx={{ fontSize: 40, color: "blue" }} />
                  <Typography variant="body1">Total Orders</Typography>
                  <Typography variant="h4">75</Typography>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={4} md={2}>
              <Paper sx={{ p: 5 }}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <LocalShippingIcon sx={{ fontSize: 40, color: "green" }} />
                  <Typography variant="body1">Total Delivered</Typography>
                  <Typography variant="h4">70</Typography>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={4} md={2}>
              <Paper sx={{ p: 5 }}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <CancelIcon sx={{ fontSize: 40, color: "red" }} />
                  <Typography variant="body1">Total Cancelled</Typography>
                  <Typography variant="h4">5</Typography>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={4} md={2}>
              <Paper sx={{ p: 5 }}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <MonetizationOnIcon sx={{ fontSize: 40, color: "pink" }} />
                  <Typography variant="body1">Total Revenue</Typography>
                  <Typography variant="h4">12k</Typography>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper
                sx={{
                  p: { xs: 2, sm: 3 },
                  height: "100%",
                }}
              >
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
                  >
                    Net Profit ⬆️
                  </Typography>
                  <Box
                    display="flex"
                    alignItems="center"
                  
                    position="relative"
                  >
                    <Typography variant="h5" mr={5}>
                      $6759.25
                    </Typography>

                    <CircularProgress
                      size={100}
                      value={70}
                      variant="determinate"
                    />
                    <Box
                      position="absolute"
                      top={0}
                      left={{ xs: '140px', sm: '150px' }} 
                      bottom={0}
                      right={0}
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography
                        variant="body2"
                        color="blue"
                        sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
                      >
                        70%
                      </Typography>
                      <Typography
                        variant="caption"
                        color="gray"
                        sx={{ fontSize: { xs: 8, sm: 10 } }}
                      >
                        Goal Completed
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="caption" color="gray" sx={{ fontSize: { xs: 8, sm: 10 } }}>
                    *The Values here have been rounded off
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>

          {/* activity chart and dashboard menu */}
          <Grid container spacing={2} mt={3}>
            <Grid item xs={12} md={8}>
              <Paper sx={{ p: 1, height: "300px" }}>
                {" "}
                {/* Set height to 300px */}
                <Typography variant="h6">Activity</Typography>
                <ActivityChart />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 5, height: "300px" }}>
                {" "}
                {/* Set height to 300px */}
                <DashboardMenu />
              </Paper>
            </Grid>
          </Grid>

          {/* orders and feedback */}
          <Grid container spacing={2} mt={3}>
            <Grid item xs={12} md={8}>
              <Paper
                sx={{
                  p:1,
                  display: "flex",
                  flexDirection: "column",
                  height: 550,
                  overflow: "hidden",
                }}
              >    <Typography variant="h6" >Recent Orders</Typography>
                <Orders />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: 550,
                  overflow: "hidden",
                }}
              >
                <Feedback />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;

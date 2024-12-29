import { Box } from '@mui/material'
import React from 'react'
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

import Grid from '@mui/material/Grid';
import PopularTimesChart from './Dashboard/PopularTimesChart';
import Profit from './Dashboard/Profit';
import LikedDishes from './Dashboard/LikedDishes';
import ProfitCalculator from './Dashboard/ProfitCalculator';
import UserRatings from './Dashboard/UserRatings';

const Dashboard = () => {

    return (
        <Box sx={{ padding: "2rem", height: "100vh", fontSize: 25, fontWeight: "bold", width: "100%", display: "flex", flexDirection: "column", bgcolor: "#E7EFFA" }}>
            <Box sx={{ fontSize: 30 }}>DashBoard</Box>
            {/* TOP Box for four sub boxes */}
            <Box sx={{ height: "20%", width: "100%", gap: "3rem", display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>
                <Box sx={{ width: "100%", display: "flex", bgcolor: "white", alignItems: "center", padding: "1rem", borderRadius: "5px" }}>
                    <Box sx={{ width: "80%" }}>
                        <Box>580</Box>
                        <Box sx={{ fontSize: 15, fontWeight: "500", color: "grey" }}>Visitors</Box>
                    </Box>
                    <Box sx={{ bgcolor: "#F5E6C4", padding: "1rem", borderRadius: "50%" }}><PeopleIcon sx={{ fontSize: 40 }} /></Box>
                </Box>
                <Box sx={{ width: "100%", display: "flex", bgcolor: "white", alignItems: "center", padding: "1rem", borderRadius: "5px" }}>
                    <Box sx={{ width: "80%" }} >
                        <Box>1080</Box>
                        <Box sx={{ fontSize: 15, fontWeight: "500", color: "grey" }}>Orders Receieved</Box>
                    </Box>
                    <Box sx={{ bgcolor: "#F5E6C4", padding: "1rem", borderRadius: "50%" }}><ShoppingCartCheckoutIcon sx={{ fontSize: 40 }} /></Box>
                </Box>
                <Box sx={{ width: "100%", display: "flex", bgcolor: "white", alignItems: "center", padding: "1rem", borderRadius: "5px" }}>
                    <Box sx={{ width: "80%" }} >
                        <Box>₹ 3,50,000</Box>
                        <Box sx={{ fontSize: 15, fontWeight: "500", color: "grey" }}>Net Earnings</Box>
                    </Box>
                    <Box sx={{ bgcolor: "#F5E6C4", padding: "1rem", borderRadius: "50%" }}><CurrencyRupeeIcon sx={{ fontSize: 40 }} /></Box>
                </Box>
                <Box sx={{ width: "100%", display: "flex", bgcolor: "white", alignItems: "center", padding: "1rem", borderRadius: "5px" }}>
                    <Box sx={{ width: "80%" }}>
                        <Box>4.0</Box>
                        <Box sx={{ fontSize: 15, fontWeight: "500", color: "grey" }}>Customer Satisfaction</Box>
                    </Box>
                    <Box sx={{ bgcolor: "#F5E6C4", padding: "1rem", borderRadius: "50%" }}><PeopleIcon sx={{ fontSize: 40 }} /></Box>
                </Box>

            </Box>
            {/* bottom box for two sub boxes */}
            <Box sx={{ width:"100%",height: "80%", display: "flex", flexDirection: "row" ,marginTop:"3rem"}}>
                {/* left box */}
                <Box sx={{ height: "100%", width: "70%", display: "flex", flexDirection: "column" }}>
                    <Grid container columnSpacing={3}  rowSpacing={5}>
                        <Profit/>
                        <LikedDishes/>
                        <PopularTimesChart />
                        <ProfitCalculator/>
                    </Grid>

                </Box >


                {/* right box */}
                <Box sx={{ width: "40%",marginLeft:"1rem"}}>
                    <UserRatings/>
                </Box>





            </Box>
        </Box>
    )
}

export default Dashboard

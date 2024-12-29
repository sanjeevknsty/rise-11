import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import { Avatar, Rating } from '@mui/material';



const UserRatings = (props) => {
    const ratings = [
        {
            "name": "Rohan Sharma",
            "rating": 5,
            "description": "Amazing Butter Chicken! Perfect blend of spices.",
            "orders": ["Butter Chicken", "Gulab Jamun"]
        },
        {
            "name": "Priya Verma",
            "rating": 4,
            "description": "Paneer Tikka was delicious, but the spice level was high.",
            "orders": ["Paneer Tikka", "Chole Bhature"]
        },
        {
            "name": "Ankit Mehra",
            "rating": 5,
            "description": "The Tandoori Chicken was cooked to perfection.",
            "orders": ["Tandoori Chicken", "Rogan Josh"]
        },
        {
            "name": "Sneha Agarwal",
            "rating": 4,
            "description": "Enjoyed the Masala Dosa, but the chutney was average.",
            "orders": ["Masala Dosa", "Mango Lassi"]
        },
        {
            "name": "Vikram Singh",
            "rating": 3,
            "description": "Veg Biryani was decent, but lacked aroma.",
            "orders": ["Veg Biryani", "Kheer"]
        },
        {
            "name": "Meena Joshi",
            "rating": 4,
            "description": "Loved the Pav Bhaji! Very authentic taste.",
            "orders": ["Pav Bhaji", "Rasgulla"]
        },
        {
            "name": "Rajiv Gupta",
            "rating": 5,
            "description": "The Chicken Biryani was flavorful and satisfying.",
            "orders": ["Chicken Biryani", "Gulab Jamun"]
        },
        {
            "name": "Tanya Kapoor",
            "rating": 5,
            "description": "Shahi Paneer and Aloo Paratha were a perfect combo.",
            "orders": ["Shahi Paneer", "Aloo Paratha"]
        },
        {
            "name": "Sandeep Malhotra",
            "rating": 4,
            "description": "Fish Curry was delicious but a little expensive.",
            "orders": ["Fish Curry", "Palak Paneer"]
        },
        {
            "name": "Kiran Rao",
            "rating": 3,
            "description": "The Rogan Josh had good flavor, but the meat was tough.",
            "orders": ["Rogan Josh", "Butter Chicken"]
        },
        {
            "name": "Alok Jain",
            "rating": 4,
            "description": "Loved the Vada Pav and Pani Puri combo!",
            "orders": ["Vada Pav", "Pani Puri"]
        },
        {
            "name": "Geeta Nair",
            "rating": 5,
            "description": "The Tandoori Chicken and Mango Lassi were a hit.",
            "orders": ["Tandoori Chicken", "Mango Lassi"]
        },
        {
            "name": "Ravi Iyer",
            "rating": 5,
            "description": "Authentic Chicken Curry, just like homemade!",
            "orders": ["Chicken Curry", "Kheer"]
        },
        {
            "name": "Aarti Shah",
            "rating": 4,
            "description": "Palak Paneer and Rasgulla were a delightful combo.",
            "orders": ["Palak Paneer", "Rasgulla"]
        },
        {
            "name": "Sunil Chawla",
            "rating": 3,
            "description": "The Pav Bhaji lacked the buttery richness I expected.",
            "orders": ["Pav Bhaji", "Chaat"]
        },
        {
            "name": "Deepak Kumar",
            "rating": 4,
            "description": "Chicken Tikka was juicy and well-spiced.",
            "orders": ["Chicken Tikka", "Shahi Paneer"]
        },
        {
            "name": "Rita Mehta",
            "rating": 5,
            "description": "Kadai Chicken was delicious, perfect spice level.",
            "orders": ["Kadai Chicken", "Gulab Jamun"]
        },
        {
            "name": "Mohit Anand",
            "rating": 5,
            "description": "Dal Makhani and Aloo Paratha - ultimate comfort food!",
            "orders": ["Dal Makhani", "Aloo Paratha"]
        },
        {
            "name": "Arjun Sethi",
            "rating": 3,
            "description": "The Biryani was good, but the portion was small.",
            "orders": ["Chicken Biryani", "Mango Lassi"]
        },
        {
            "name": "Neha Gupta",
            "rating": 4,
            "description": "Rasgulla was fresh and perfectly sweetened.",
            "orders": ["Rasgulla", "Paneer Butter Masala"]
        },
        {
            "name": "Sameer Joshi",
            "rating": 4,
            "description": "Chole Bhature was authentic and very filling.",
            "orders": ["Chole Bhature", "Gulab Jamun"]
        },
        {
            "name": "Pooja Bansal",
            "rating": 5,
            "description": "Loved the Malai Kofta and Butter Naan combo!",
            "orders": ["Malai Kofta", "Butter Chicken"]
        },
        {
            "name": "Nikhil Verma",
            "rating": 5,
            "description": "The Aloo Gobi had a homely taste. Delicious!",
            "orders": ["Aloo Gobi", "Kheer"]
        },
        {
            "name": "Anita Desai",
            "rating": 4,
            "description": "Pani Puri was refreshing and perfect for an evening snack.",
            "orders": ["Pani Puri", "Rasgulla"]
        },
        {
            "name": "Gaurav Singh",
            "rating": 3,
            "description": "Vada Pav was good but could have been spicier.",
            "orders": ["Vada Pav", "Chaat"]
        }
    ]

    function ScrollTop(props) {
        const { children, window } = props;
        // Note that you normally won't need to set the window ref as useScrollTrigger
        // will default to window.
        // This is only being set here because the demo is in an iframe.
        const trigger = useScrollTrigger({
            target: window ? window() : undefined,
            disableHysteresis: true,
            threshold: 100,
        });

        const handleClick = (event) => {
            const anchor = (event.target.ownerDocument || document).querySelector(
                '#back-to-top-anchor',
            );

            if (anchor) {
                anchor.scrollIntoView({
                    block: 'center',
                });
            }
        };

        return (
            <Fade in={trigger}>
                <Box
                    onClick={handleClick}
                    role="presentation"
                //   sx={{ position: 'fixed', bottom: 16, right: 16 }}
                >
                    {children}
                </Box>
            </Fade>
        );
    }


    return (

        <Box sx={{ width: "100%", height: "97.8%", backgroundColor: "white", overflow: "hidden" }}>
            {/* <Toolbar id="back-to-top-anchor" /> */}
            <Box padding={"1rem"}>
                <p>User Ratings</p>
            </Box>
            <Container className='example' sx={{ width: "100%", height: "100%", display: "flex" }}  >
                {/* <Box className='example' sx={{display:"flex"}}> */}
                <Box sx={{ width: "100%", height: "100%" }}>

                    {ratings.map(
                        (element,i) => <Card key={i}>
                            <CardActionArea>

                                <CardContent>
                                    <Typography gutterBottom variant="body" component="div" sx={{ display: "flex", flexDirection: "row", alignItems: " center", gap: "0.5rem" }}>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="/static/images/avatar/1.jpg"
                                            sx={{ width: 24, height: 24 }}
                                        />
                                        <h6 style={{ fontWeight: "300", fontSize: 15 }}>{element.name}</h6>
                                        <Rating name="size-small" defaultValue={element.rating}  size="small" />
                                    </Typography>

                                    <Typography variant="body" sx={{ color: 'text.secondary', fontWeight: "300", fontSize: 15 }}>
                                        <p> {element.description} </p>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )
                    }
                        
                </Box>
                {/* </Box> */}
            </Container>
        </Box>


    )
}

export default UserRatings

import React from 'react'
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/material';


const LikedDishes = () => {

    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Omlet',
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Vada Pav',
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: '',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: '',
        },
    ];
    return (
        <Grid item xs={6} >
            <Box sx={{width:"100%",height:"100%",fontSize:15,fontWeight:300,bgcolor:"white",padding:"1rem",borderRadius:"5px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <Box>
                <h1 style={{fontSize:20,fontWeight:600}}>Liked Dishes</h1>
                    <ImageList  cols={4} rowHeight={"auto"}>
                        {itemData.map((item, i) => (

                            i < 4 && <ImageListItem key={item.img} sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                <img
                                    srcSet={`${item.img}`}
                                    src={`${item.img}`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <p >{item.title}</p>
                            </ImageListItem>

                        ))}
                    </ImageList>
                </Box>
                <Box>
                <p style={{fontSize:20,fontWeight:600}}>Uniked Dishes</p>
                    <ImageList cols={4} rowHeight={"auto"}>
                        {itemData.map((item, i) => (

                            (i > 4 && i< 9)  && <ImageListItem key={item.img} sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                <img
                                    srcSet={`${item.img}`}
                                    src={`${item.img}`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <p>{item.title}</p>
                            </ImageListItem>

                        ))}
                    </ImageList>
                </Box>
            </Box>
        </Grid>
    )
}

export default LikedDishes

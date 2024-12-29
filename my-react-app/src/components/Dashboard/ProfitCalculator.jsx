import { Box, styled, alpha, autocompleteClasses } from '@mui/material'
import Grid from '@mui/material/Grid'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';


const ProfitCalculator = () => {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        // backgroundColor:"white",
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            // [theme.breakpoints.up('sm')]: {
            //     width: '12ch',
            //     '&:focus': {
            //         width: '20ch',
            //     },
            // },
        },
    }));


    const [value, setValue] = React.useState(null);

    return (
        <Grid item xs={6} sx={{  fontSize: 20, fontWeight: 600,marginTop:"2rem" }}>
            <Box sx={{borderRadius: "5px",padding: "1rem",width:"100%",height:"100%",backgroundColor: "white"}}>

            <p>Profit Calculator</p>
            <Box sx={{width:"100%",height:"100%",display: "flex", flexDirection: "column",alignItems:"center", justifyContent: "space-around" }}>
                <Box sx={{ fontSize: 13, fontWeight: 300 }}>Calculate the profit of any menu item by searching below.we will give you estimated prift for selected duration</Box>
                <Box sx={{  display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Box sx={{ width: "50%", backgroundColor: "#e5e7eb" }}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Box>
                    <Box>Weeks </Box>
                    <Box sx={{ width: "30%" }}>
                        <input style={{ fontSize:"15",width:"100%",backgroundColor: "#e5e7eb" }} type="number" name="ticketNum" ></input>
                    </Box>
                </Box>
                <Box sx={{ fontWeight: 300, fontSize: 15 }}>Estimated Profit you eill earn by selling <b>"panner tikka"</b> is <b>2323</b></Box>
                <Box sx={{ fontWeight: 300, fontSize: 15 }}>Apply Discount of  the profit will be <b>11101</b></Box>
            </Box>
            </Box>

        </Grid>
    )
}

export default ProfitCalculator

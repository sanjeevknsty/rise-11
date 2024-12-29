import React from 'react'
import { useEffect,useRef } from 'react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import Chart from 'chart.js/auto';

const Profit = () => {
    
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        // Updated data: Profit data fluctuates but trends upwards overall
        const data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    data: [102819, 118351, 124982, 131059, 139421, 148627, 159823, 172351, 184219, 201463, 221987, 241539],
                    borderColor: 'rgb(104, 152, 220)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderWidth: 2,
                    tension: 0.4,
                },
            ],
        };
        const config = {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                    },
                },
                scales: {
                    x: {
                        // title: {
                        //     display: true,
                        //     text: 'Months',
                        // },
                    },
                    y: {
                        title: {
                            display: true,
                            // text: 'Profit',
                        },
                        beginAtZero: true,
                        ticks: {
                            display: false // Hide numbers on the y-axis
                        },
                        grid: {
                            drawTicks: false, // Hide tick marks
                            tickLength: 0,    // No tick lines
                        },
                        stepSize: 5000,
                    },
                },
            },
        };

        const chart = new Chart(ctx, config);

        // Cleanup function to destroy chart instance
        return () => chart.destroy();
    }, []);
  return (
    <Grid item xs={6}>
                            <Box sx={{ display: "flex", flexDirection: "column",bgcolor:"white",padding:"1rem",borderRadius:"5px"}}>
                                <Box>
                                <p style={{fontSize:20}}>Profit</p>
                                    <Box>₹ 2,50,000</Box>
                                </Box>
                                <div id="chart-container" style={{ width: "100%" }}>
                                    <canvas ref={chartRef} />
                                </div>
                            </Box>
                        </Grid>
  )
}

export default Profit

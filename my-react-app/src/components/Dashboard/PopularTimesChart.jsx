
import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';

const PopularTimesChart = () => {
    const chartRef = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);
    const [selectedDay, setSelectedDay] = useState('monday');

    const timeLabels = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'];

    const dataByDay = {
        monday: [10, 15, 20, 30, 40, 35, 50, 60, 70, 80, 90, 85, 75, 50, 30],
        tuesday: [5, 10, 15, 25, 35, 30, 45, 55, 65, 75, 85, 80, 70, 45, 25],
        wednesday: [8, 12, 18, 28, 38, 34, 48, 58, 68, 78, 88, 82, 72, 48, 28],
        thursday: [6, 11, 16, 26, 36, 31, 46, 56, 66, 76, 86, 81, 71, 46, 26],
        friday: [12, 18, 25, 35, 45, 40, 55, 65, 75, 85, 95, 90, 80, 55, 35],
        saturday: [20, 25, 30, 40, 50, 45, 60, 70, 80, 90, 100, 95, 85, 60, 40],
        sunday: [18, 22, 28, 38, 48, 43, 58, 68, 78, 88, 98, 93, 83, 58, 38]
    };

    const descriptions = {
        low: "Usually not too busy.",
        moderate: "Usually a bit busy.",
        high: "Usually very busy!"
    };

    const calculateDescription = (value) => {
        if (value < 40) return descriptions.low;
        if (value < 80) return descriptions.moderate;
        return descriptions.high;
    };

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        const newChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: timeLabels,
                datasets: [
                    {
                        label: 'Number of Customers',
                        data: dataByDay[selectedDay],
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                const value = context.raw;
                                return calculateDescription(value);
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: `Popular Times for ${selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1)}`,
                    },
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Time of Day',
                        },
                    },
                    y: {
                        display: false // Hide y-axis entirely
                    },
                },
            },
        });

        setChartInstance(newChartInstance);

        return () => newChartInstance.destroy();
    }, [selectedDay]);

    const handleDayChange = (event) => {
        setSelectedDay(event.target.value);
    };


    return (
        <Grid item xs={6}  >
            <Box sx={{ marginTop: "2rem", padding: "1rem", borderRadius: "5px", bgcolor: "white" }}>
                <Box sx={{ fontSize: 20, display: "flex", justifyContent: "space-between", }} >

                    <Box>Popular Times</Box>
                    {/* <label htmlFor="weekdaySelect">Select a Day:</label> */}
                    <Box >
                        <select sx={{ bgcolor: "#EBEBEB" }} id="weekdaySelect" onChange={handleDayChange} value={selectedDay}>
                            <option value="monday">Monday</option>
                            <option value="tuesday">Tuesday</option>
                            <option value="wednesday">Wednesday</option>
                            <option value="thursday">Thursday</option>
                            <option value="friday">Friday</option>
                            <option value="saturday">Saturday</option>
                            <option value="sunday">Sunday</option>
                        </select>
                    </Box>
                </Box>
                <canvas ref={chartRef}></canvas>
            </Box>
        </Grid>
        //   <div style={{  }}>




        // </div>
    )
}

export default PopularTimesChart

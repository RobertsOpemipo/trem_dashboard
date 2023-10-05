import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Stack, Typography } from '@mui/material';
// components



// You may need to import additional components and styles for your page
const VehicleDetailPage = () => {
    const [openFilter, setOpenFilter] = useState(false);

    const handleOpenFilter = () => {
    setOpenFilter(true);
    };

    const handleCloseFilter = () => {
    setOpenFilter(false);
    };
  // Use the useParams hook to access the `vehicleId` parameter from the URL
    const { vehicleId } = useParams();
    
    // Define a state to store the vehicle details
    const [vehicleDetails, setVehicleDetails] = useState(null);

    // You can fetch the vehicle details from an API or your data source here
    // Example API call (replace with your actual API endpoint)
    useEffect(() => {
        // Replace this with your actual API endpoint to fetch vehicle details
        fetch(`/api/vehicles/${vehicleId}`)
        .then((response) => response.json())
        .then((data) => {
            setVehicleDetails(data); // Update the state with the fetched vehicle details
        })
        .catch((error) => {
            console.error('Error fetching vehicle details:', error);
        });
    }, [vehicleId]);

    // Render the vehicle details once they are loaded
    return (
        <>
            <Helmet>
                <title> Dashboard: Vehicle Opp | Minimal UI </title>
            </Helmet>

            <Container>
                <Typography variant="h4" sx={{ mb: 5, fontWeight: 'bold', color: 'blue', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                Vehicle Opp
                </Typography>

                    <div className="p-2 max-w-5xl mx-auto">
                            {vehicleDetails ? (
                                <div>
                                {/* Display vehicle details here */}
                                <h2>Vehicle Details</h2>
                                <p>Vehicle ID: {vehicleDetails.vehicleId}</p>
                                <p>Owner FirstName: {vehicleDetails.ownerFName}</p>
                                {/* Add more fields as needed */}
                                </div>
                            ) : (
                                <p>Loading vehicle details...</p>
                            )}
                    </div>
            
            </Container>
        </>
        
    );
    };

export default VehicleDetailPage;

import React from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Typography,
    TextField,
    Button,
    Box,
} from '@mui/material';

function NewUserPage() {
  // You can handle form submission and user creation logic here

    return (
        <Container>
        <Typography variant="h4" gutterBottom>
            New User
        </Typography>

        <form>
            <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            // Add appropriate state and change handlers for the input fields
            />

            <TextField
            label="Company"
            variant="outlined"
            fullWidth
            margin="normal"
            // Add appropriate state and change handlers for the input fields
            />

            <TextField
            label="Role"
            variant="outlined"
            fullWidth
            margin="normal"
            // Add appropriate state and change handlers for the input fields
            />

            {/* Add more form fields for user creation, e.g., email, password, etc. */}

            <Box mt={2}>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                // Add a submit handler to create the new user
            >
                Create User
            </Button>

            <Link to="/dashboard/user">
                <Button variant="outlined" color="primary" style={{ marginLeft: '8px' }}>
                Cancel
                </Button>
            </Link>
            </Box>
        </form>
        </Container>
    );
}

export default NewUserPage;

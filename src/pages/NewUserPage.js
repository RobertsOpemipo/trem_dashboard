import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Typography,
    TextField,
    Button,
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';

function NewUserPage() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        role: '',
        email: '',
        password: '',
        confirmPassword: '',
        isVerified: false,
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your logic here to create the new user using formData
        console.log('Form Data:', formData);
    };

    return (
        <Container>
        <Typography variant="h4" gutterBottom>
            New User
        </Typography>

        <form onSubmit={handleSubmit}>
            <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            />

            <TextField
            label="Company"
            variant="outlined"
            fullWidth
            margin="normal"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            />

            <TextField
            label="Role"
            variant="outlined"
            fullWidth
            margin="normal"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            />

            <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            />

            <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            />

            <TextField
            label="Confirm Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            />

            <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel htmlFor="isVerified">Verified</InputLabel>
            <Select
                label="Verified"
                name="isVerified"
                value={formData.isVerified}
                onChange={handleChange}
                inputProps={{
                name: 'isVerified',
                id: 'isVerified',
                }}
            >
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
            </Select>
            </FormControl>

            <Box mt={2}>
            <Button type="submit" variant="contained" color="primary">
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

import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Checkbox,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
} from '@mui/material';

// Create a dummy user for the UserDetailPage
const dummyUser = {
  name: 'John Doe',
  company: 'Dummy Company',
  role: 'Dummy Role',
  isVerified: true,
  carDocuments: ['Document 1', 'Document 2', 'Document 3'], // Example car documents
};

// Sample activity log for the user
const activityLog = [
  {
    action: 'Retrieved Document 1',
    timestamp: '2023-10-01 09:00 AM',
  },
  {
    action: 'Document 1 Expires Soon',
    timestamp: '2023-11-15 10:30 AM',
  },
];

function UserDetailPage() {
  const [checkedDocuments, setCheckedDocuments] = useState([]);

  const handleToggleDocument = (document) => () => {
    const currentIndex = checkedDocuments.indexOf(document);
    const newCheckedDocuments = [...checkedDocuments];

    if (currentIndex === -1) {
      newCheckedDocuments.push(document);
    } else {
      newCheckedDocuments.splice(currentIndex, 1);
    }

    setCheckedDocuments(newCheckedDocuments);
  };

  const handleBack = () => {
    // You can handle navigation as needed here
    // history.goBack(); // Navigate back to the previous page
  };

  return (
    <Container>
      <Paper style={{ padding: '1.5rem' }}>
        <Typography variant="h4" gutterBottom>
          User Detail Page
        </Typography>

        {/* Display the dummyUser details */}
        <>
          <div>
            <Typography variant="h5">User Information</Typography>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell style={{ fontWeight: 'bold' }}>Name:</TableCell>
                  <TableCell>{dummyUser.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: 'bold' }}>Company:</TableCell>
                  <TableCell>{dummyUser.company}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: 'bold' }}>Role:</TableCell>
                  <TableCell>{dummyUser.role}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: 'bold' }}>Verified:</TableCell>
                  <TableCell>{dummyUser.isVerified ? 'Yes' : 'No'}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Car Documents and Activity Log */}
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <div style={{ marginBottom: '1rem' }}>
                <Typography variant="h5">Car Documents</Typography>
                {/* Display car documents as checkboxes */}
                {dummyUser.carDocuments.map((document) => (
                  <div key={document} style={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox
                      checked={checkedDocuments.includes(document)}
                      onChange={handleToggleDocument(document)}
                    />
                    <span style={{ marginLeft: '0.5rem' }}>{document}</span>
                  </div>
                ))}
              </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ marginBottom: '1rem' }}>
                <Typography variant="h5">Activity Log</Typography>
                <List>
                  {activityLog.map((logEntry, index) => (
                    <div key={index}>
                      <ListItem>
                        <ListItemText
                          primary={logEntry.action}
                          secondary={logEntry.timestamp}
                        />
                      </ListItem>
                      {index < activityLog.length - 1 && <Divider />}
                    </div>
                  ))}
                </List>
              </div>
            </Grid>
          </Grid>
        </>
        {/* Remove the user not found message */}
        {/* <div>User not found</div> */}

        {/* You can handle navigation as needed */}
        <Box mt={3}>
          <Button variant="contained" onClick={handleBack}>
            Back to User Page
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default UserDetailPage;

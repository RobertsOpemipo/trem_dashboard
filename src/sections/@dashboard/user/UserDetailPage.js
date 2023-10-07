import React from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';
import USERLIST from '../_mock/user';

function UserDetailPage() {
  const { userId } = useParams();
  const history = useHistory();

  const user = USERLIST.find((user) => user.id === userId);

  const handleBack = () => {
    history.goBack(); // Navigate back to the previous page
  };

  return (
    <Container>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          User Detail Page
        </Typography>

        {user ? (
          <>
            <div>
              <Typography variant="h5">User Information</Typography>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Name:</TableCell>
                    <TableCell>{user.name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Company:</TableCell>
                    <TableCell>{user.company}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Role:</TableCell>
                    <TableCell>{user.role}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Verified:</TableCell>
                    <TableCell>{user.isVerified ? 'Yes' : 'No'}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <Typography variant="h5">Car Documents</Typography>
              {/* Display car documents here */}
            </div>
          </>
        ) : (
          <div>User not found</div>
        )}

        <Button variant="contained" onClick={handleBack}>
          Back to User Page
        </Button>
      </Paper>
    </Container>
  );
}

export default UserDetailPage;

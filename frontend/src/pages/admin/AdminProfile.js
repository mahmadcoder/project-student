
import { useSelector } from 'react-redux';
import { Box, Container, Typography } from '@mui/material';

const AdminProfile = () => {
        const { currentUser } = useSelector((state) => state.user);
    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop:4,
                    textAlign: 'center',
                    padding: 2,
                    boxShadow: 3,
                    borderRadius: 2,
                    bgcolor: 'background.paper'
                }}
            >
                <Typography variant="h4" component="div" gutterBottom>
                   Admin Name: {currentUser.name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Email: {currentUser.email}
                </Typography>
                <Typography variant="body1">
                    School Name: {currentUser.schoolName}
                </Typography>
            </Box>
        </Container>

    )
}

export default AdminProfile

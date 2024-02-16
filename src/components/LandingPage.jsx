import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography } from '@mui/material';

const LandingPage = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const navigateToUserProfile = () => {
    if(username === "" ||username === " "||username === "  "){
      return
    }
    navigate(`/user/${username}`);
  }

  return (
    <div className='mainbox'>
    <Container maxWidth="sm" className="maincontent" >
        <h1 >Welcome</h1>
      <Typography variant="h4" gutterBottom>
        GitHub Profile Viewer
      </Typography>
      <TextField
        label="Enter GitHub Username"
        variant="outlined"
        fullWidth
        value={username}
        onChange={handleInputChange}
        style={{ marginBottom: '20px' }}
      />
      <Button variant="contained" color="primary" onClick={navigateToUserProfile}>
        View Profile
      </Button>
    </Container>
    </div>
  );
};

export default LandingPage;



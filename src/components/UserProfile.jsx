// UserProfile.js
import React, { useState, useEffect } from 'react';
import { useParams  } from 'react-router-dom';
import axios from 'axios';
import UserCard from './UserCard'

const UserProfile = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);


  return (
    <div className='mainbox'>
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <UserCard user={user}/>
      ) : (
        <p>User not found</p>
      )}

    
    </div>
  );
};

export default UserProfile;

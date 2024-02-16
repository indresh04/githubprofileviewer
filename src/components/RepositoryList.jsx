// Repository.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import RepositoryCard from './RepositoryCard';
import './RepositoryList.css'

const Repository = () => {
  const { username } = useParams();
  const [repositories, setRepositories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const perPage = 10;
        const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
          params: {
            page: currentPage,
            per_page: perPage,
          },
        });
        let totalPage = await axios.get(`https://api.github.com/users/${username}`);
        totalPage = totalPage.data.public_repos
        setRepositories(response.data);
        setTotalPages(Math.ceil(totalPage / perPage));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching repositories:', error);
        setLoading(false);
      }
    };

    fetchRepositories();
  }, [username, currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : repositories.length ? (
        <div>
          <h2 style={{color:"white",marginLeft:"2rem"}}>  All Public Repositories of @<i>{username}</i></h2>
          <div className='reposbody'>
          {/* <ul> */}
            {repositories.map((repo) => (
              <RepositoryCard key={repo.id} userdata ={repo}/>
            ))}
          {/* </ul> */}
          </div>

          <div className='footerpager'>
            <p >Page {currentPage} of {totalPages}</p>
            <div>
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              Previous Page
            </button>
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
              Next Page
            </button>
            </div>
          </div>
        </div>
      ) : (
        <p>No repositories found</p>
      )}
    </div>
  );
};

export default Repository;

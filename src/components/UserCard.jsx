import React from 'react'
import { useNavigate  } from 'react-router-dom';

function UserCard({user}) {
  const navigate = useNavigate();
  const navigateToRepositories = () => {
    navigate(`/user/${user.login}/repositories`);
  };
  return (
    <div className='usercard maincontent'>
      <div className='cardImage'>
        <img alt='user' src={`${user.avatar_url}`}></img>
      </div>
      <div className='cardbody'>
        <div className='carddescription'>
          
        <h1>{ user.name === null ? "no user name" :user.name }</h1>
        <h3>@<i>{user.login}</i></h3>
        <p>{user.bio}</p>
        </div>
      
      <div className='cardbuttons'>
        <div>
            <button>
            <h4>{user.followers}</h4>
            <b>Followers</b>
            </button>
        </div>
        <div>
            <button>
            <h4>{user.following}</h4>
            <b>Following</b>
            </button>
        </div>
        <div >
            <button onClick={navigateToRepositories} className='activebutton'>
            <h4>{user.public_repos}</h4>
            <b>Repositories</b>
            </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard

import React from 'react'

function RepositoryCard({userdata}) {
  const user = userdata;
  return (
    <div className='publicrepos'>
      <img alt='profileimage' src=''></img>
      <h4>{user.name}</h4>
      <p>{user.description}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer" ><button>visit repo</button></a>
    </div>
  )
}

export default RepositoryCard

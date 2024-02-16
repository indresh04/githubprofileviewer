import React from 'react';
import { useNavigate  } from 'react-router-dom';


function WrongPath({route="nillsjd"}) {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate(`/`);
  };
  return (
    <div>
      <h1>
      {`the path doesnt exist`}
      </h1>
      <button onClick={navigateToHome} >
        Navigate to Home Page
      </button>
    </div>
  )
}

export default WrongPath

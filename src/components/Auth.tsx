import { useState } from 'react';
import Login from './Login';
import Register from './Register';

const Auth = () => {

  const [login, setLogin] = useState(true);

  const handleAuthMode = (e: unknown) =>{
    console.log("received : ",e);    
    setLogin((prev: boolean )=>!prev);
  }

  return (
    <>
      {
        login ? <Login switchAuthMode={handleAuthMode} /> : <Register switchAuthMode={handleAuthMode} />
      }
      {/* <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Button variant="outlined" onClick={handleAuthMode}>
          {login ? 'Switch to Register' : 'Switch to Login'}
        </Button>
      </Box> */}
    </>
  )
}

export default Auth;

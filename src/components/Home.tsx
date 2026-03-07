import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


const Home = () => {

  const navigate = useNavigate();

  const goToProfile = () =>{
    navigate('../profile');
  }

  const goToAbout = () =>{
    navigate('../about');
  }

  return (
    <div>
      <Button type="button" colorPalette={'teal'} color={'black'} variant="outline" size="lg" w="full" onClick={goToProfile}>
        goto home
      </Button>
      <Button type="button" colorPalette={'teal'} color={'black'} variant="outline" size="lg" w="full" onClick={goToAbout}>
        goto about
      </Button>
    </div>
  )
}

export default Home;

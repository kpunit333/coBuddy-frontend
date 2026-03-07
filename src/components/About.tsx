import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

  const goToAbout = () =>{
    navigate('../about');
  }

  return (
    <div>
      <Button type="button" colorPalette={'teal'} color={'black'} variant="outline" size="lg" w="full" onClick={goToAbout}>
              goto about
            </Button>
    </div>
  )
}

export default About

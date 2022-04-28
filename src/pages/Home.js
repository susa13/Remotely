import { Link } from "react-router-dom";
import styled from "styled-components";
import Guy from "../styles/guy.jpg";
import Media from "../styles/media.jpg";

const MainDiv = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: space-evenly;
  padding: 43.4236px 20px;

  max-height: 79vh;

  h1 {
    font-weight: 900;
    font-size: 70px;
    width: 60%;
  }

  .link {
    text-decoration: none;
  }
`;
const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0px 70px;

  color: #555555;
  span {
    color: #ff5a5f;
  }

  h2 {
    font-weight: normal;
    font-size: 35px;
    max-width: 1000px;
  }

`;
const TrustedDiv = styled.div``;
const RightDiv = styled.div`
  max-height: 90vh;
  img {
    height: 100%;
    display: block;
    margin-left: auto;
    margin-right: 75px;
  }
`;
const BigBoxButton = styled.div`
  margin: auto;

  text {
    font-family: "Poppins", sans-serif;
    font-size: 27px;
    font-weight: bold;
    color: #FFFFFF;
    letter-spacing: 1.21px;
    filter: drop-shadow(0px 5px 3px #555555);
  }
`;
const OrangeBackground = styled.div`
  display: flex;
  justify-content: center;
  width: 250px;
  height: 70px;
  background-color: #ff5a5f;
  border-radius: 20px;
`
//border: 2px solid #ff5a5f;
//border-radius: 25px;

const Home = () => {
  return (
    <MainDiv>
      <LeftDiv>
        <h1>
          Find Your Dream Remote <span>Job</span> In One Place
        </h1>
        <p>
          <h2>Looking for a job? Remotely is the best open source platform to find
          remote jobs for FREE!
          </h2>
        </p>
        <OrangeBackground>
        <Link to="/search" className="link">
          <BigBoxButton>
            <p><text>SEE JOBS</text></p>
          </BigBoxButton>
        </Link>
        </OrangeBackground>
        <TrustedDiv>
          <p>Trusted by:</p>
          <img src={Media} alt="guy"></img>
        </TrustedDiv>
      </LeftDiv>
      <RightDiv>
        <img src={Guy} alt="guy"></img>
      </RightDiv>
    </MainDiv>
  );
};

export default Home;

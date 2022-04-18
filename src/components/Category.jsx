import { FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks,GiBowlOfRice} from "react-icons/gi";

import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <List>
      <SLink to={"/cuisines/Indian"}>
        <GiBowlOfRice />
        <h4>Indian</h4>
      </SLink>
      <SLink to={"/cuisines/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisines/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/cuisines/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 0 1rem 0 1rem;
  text-decoration: none;
  width: 6rem;
  height: 6rem;
  background: linear-gradient(35deg, #494949, #313131);
  cursor: pointer;
  transform: scale(0.8);
  @media screen and (max-width: 600px) {
    margin: 0 0.5rem 0 0.5rem;
    width: 4rem;
    height: 4rem;
    }

  h4 {
    color: #fff;
    font-size: 0.8rem;
    @media screen and (max-width: 600px) {
      font-size: 0.6rem;
      }
  }
  svg {
    color: #fff;
    font-size: 1.5rem;
    @media screen and (max-width: 600px) {
      font-size: 1rem;
      }
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: #fff;
    }
    h4 {
      color: #fff;
    }
  }
`;
export default Category;

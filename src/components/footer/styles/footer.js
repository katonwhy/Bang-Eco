import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
  padding: 20px 80px;
  background-color: #219653;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1500px;
    margin: 0 auto;
    // background: red;
`

export const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 470px;
  img{
    height: 100px;
  }
  // background: grey;
  @media (max-width: 1000px) {
    width: auto;
  }
`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 150px;
  @media (max-width: 1000px) {
    margin-left: 0;
  }
  // background: blue;
`;

export const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  // background: yellow;
`;

export const Column4 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 50px;
  // background: yellow;
`;

export const Wrapper1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    max-width: 1500px;
    // background: blue;
`

export const Column5 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 20px;
  margin-right: 20px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 120px;
  // background: black;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 50px;
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 10px;
  font-size: 18px;
  text-decoration: none;
  // background: yellow;
  // &:hover {
  //     color: #ff9c00;
  //     transition: 200ms ease-in;
  // }
`;

export const Title = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
  // background: green;
`;

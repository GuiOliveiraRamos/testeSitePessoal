import { GrMenu } from "react-icons/gr";
import styled from "styled-components";

export default function App() {
  return (
    <>
      <NavBar>
        <MenuItens>
          <Icon />
          <div>
            <p>Guilherme</p>
          </div>
        </MenuItens>
      </NavBar>
      <body>
        <Container>
          <ContainerImg>
            <h2>SERVIÇOS DE PROGRAMAÇÃO</h2>
            <h4>Desenvolvedor Front-end</h4>
          </ContainerImg>
          <ContainerInfo>
            <h3>
              Desenvolvimento de sites, aplicativos e softwares.
            </h3>
          </ContainerInfo>
        </Container>
      </body>
    </>
  );
}

const NavBar = styled.div`
  width: 100%;
  height: 70px;
  background-color: #b9edb7;
  padding-left: 20px;
`;

const MenuItens = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-family: "Quicksand", sans-serif;
    font-size: 30px;
    font-weight: bold;
  }
`;

const Icon = styled(GrMenu)`
  font-size: 30px;
  line-height: 100px;
`;

const Container = styled.div`
  background-color: #c7eac7;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
`;

const ContainerImg = styled.div`
  width: 300px;
  height: 150px;
  padding: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
  background-image: url(https://blog.xpeducacao.com.br/wp-content/uploads/2022/08/o-que-faz-um-programador-1.jpg);
  background-repeat: no-repeat;
  opacity: 0.9;
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: red;

  h4 {
      font-size: 20px;
      font-weight: bold;
    }

  h2 {
    color: #000000;
    &:hover {
      color: green;
    }

  }

  h2 {
    font-family: "anton";
    font-size: 45px;
  }
`;

const ContainerInfo = styled.div`
  width: 410px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3 {
    font-size: 20px;
    margin-bottom: 30px;
    font-weight: 300;
    line-height: 20px;
  }
`;

import styled from "styled-components";
import { IoPersonAddOutline } from "react-icons/io5";

export default function EmployeesPage(){
    return (
        <CardsContainer>
            <Card contrast={false}>
                <p>Registrar</p>
                <h2>Funcionário</h2>
                <IoPersonAddOutline />
                
            </Card>
            <Card contrast={false} />
            <Card contrast={true} />
        </CardsContainer>
    );
}

const CardsContainer = styled.div`
    width: 65vw;
    height: 15vh;
    position: fixed;
    top: 12vh;
    left: calc(50vw - 32.5vw);
    display: flex;
    justify-content: space-between;
`

const Card = styled.div`
    width: 27%;
    height: 100%;
    background-color: ${(props) => props.contrast ? "#E89D17" : "#EAEAEA"};
    color: ${(props) => props.contrast ? "white" : "black"};
    border-radius: 4px;
`


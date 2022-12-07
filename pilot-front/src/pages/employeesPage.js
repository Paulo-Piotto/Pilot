import { useEffect, useState } from "react";
import { getAllEmployees } from "../services/api.services";
import { CardsContainer } from "../styles/cardStyles";
import Card from "../components/card";

export default function EmployeesPage(){    
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getAllEmployees().then((resp) =>{
            setEmployees(resp.data);
        })
    }, [])

    return (
        <CardsContainer>
            <Card contrast={false} subtitle='Registrar' title='Funcionário' iconName='person-add-outline' />
            <Card contrast={false} subtitle='Buscar' title='Funcionário' iconName='search-outline' />
            <Card contrast={true} subtitle='Funcionários registrados' number={employees.length} />
        </CardsContainer>
    );
}


import { useEffect, useState } from "react";
import { getAllEmployees } from "../services/api.services";
import { CardsContainer } from "../styles/cardStyles";
import Card from "../components/card";
import RegisterEmployeeDialog from "../components/registerEmployeeDialog";

export default function EmployeesPage(){    
    const [employees, setEmployees] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        getAllEmployees().then((resp) =>{
            setEmployees(resp.data);
        })
    }, [employees])

    function handleCloseDialog(){
        setOpenDialog(false);
    }

    return (
        <>
        <CardsContainer>
            <Card contrast={false} subtitle='Registrar' title='Funcionário' iconName='person-add-outline' action={() => setOpenDialog(true)}/>
            <Card contrast={false} subtitle='Buscar' title='Funcionário' iconName='search-outline' />
            <Card contrast={true} subtitle='Funcionários registrados' number={employees.length} />
        </CardsContainer>
        <RegisterEmployeeDialog openDialog={openDialog} handleCloseDialog={handleCloseDialog} setEmployees={setEmployees} />
        </>
    );
}


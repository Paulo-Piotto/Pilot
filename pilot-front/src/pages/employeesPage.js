import { useEffect, useState } from "react";
import { getAllEmployees } from "../services/api.services";
import { CardsContainer } from "../styles/cardStyles";
import Card from "../components/card";
import RegisterEmployeeDialog from "../components/registerEmployeeDialog";
import SearchEmployeeDialog from "../components/searchEmployeeDialog";
import { TableContainer, TableHeader } from "../styles/tableStyles";
import TableItem from "../components/tableItem";

export default function EmployeesPage(){    
    const [employees, setEmployees] = useState([]);
    const [absoluteEmployees, setAbsoluteEmployees] = useState(0)
    const [openRegister, setOpenRegister] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);

    useEffect(() => {
        getAllEmployees().then((resp) =>{
            setEmployees(resp.data);
            setAbsoluteEmployees(resp.data.length);
        })
    }, [])

    function handleCloseDialog(){
        setOpenRegister(false);
        setOpenSearch(false);
    }

    return (
        <>
        <CardsContainer>
            <Card contrast={false} subtitle='Registrar' title='Funcionário' iconName='person-add-outline' action={() => setOpenRegister(true)}/>
            <Card contrast={false} subtitle='Buscar' title='Funcionário' iconName='search-outline' action={() => setOpenSearch(true)} />
            <Card contrast={true} subtitle='Funcionários registrados' number={absoluteEmployees} />
        </CardsContainer>
        <RegisterEmployeeDialog openDialog={openRegister} handleCloseDialog={handleCloseDialog} setEmployees={setEmployees} setAbsoluteEmployees={setAbsoluteEmployees} />
        <SearchEmployeeDialog openDialog={openSearch} handleCloseDialog={handleCloseDialog} setEmployees={setEmployees} />
        <TableHeader>
            <p>Nome</p>
            <p>Salário Base</p>
            <p>Tel.</p>
            <p>Data de início</p>
        </TableHeader>
        {employees[0] ? (
            <TableContainer>
            {employees.map((employee) => 
                <TableItem rowData={employee} type='employee' />
            )}
        </TableContainer>
        ): ''}
        
        </>
    );
}


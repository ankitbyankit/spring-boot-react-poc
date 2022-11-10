import React from "react";
import EmployeeService from "../services/EmployeeService";
import withRouter from "./withRouter";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
//import List from '@mui/material/List';
//import ListItem from '@mui/material/ListItem';
//import { ListItemText } from "@mui/material";

import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";

const columns = [
    {id: 'id', label: 'ID'},
    {id: 'first_name', label: 'First Name'},
    {id: 'last_name', label: 'Last Name'},
    {id: 'email_id', label: 'Email'},
    {id: 'actions', label: 'Actions'}
];


class ListEmployeeComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {employees:[]}
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
        this.addEmployee = this.addEmployee.bind(this);
    }

    editEmployee(employee){
        console.log("edit employee called", [employee]);
    }

    deleteEmployee(employee){
        //console.log("delete employee called", [employee]);
        EmployeeService.deleteEmployee(employee.id).then(response => {
                console.log(response);
                this.setState({
                    employees: this.state.employees.filter((emp) => emp.id !== employee.id)
                })
            }
        ).catch(error => {
            console.log(`delete block: ${error}`);
        });
    }

    viewEmployee(employee){
        //console.log("view employee called", [employee]);
        // this.props.history.push(`/view-employee/${employee.id}`);
        this.props.navigate(`/view-employee/${employee.id}`)
    }

    addEmployee(){
        //console.log("add employee called");
        this.props.navigate(`/add-employee/_add`);
    }

    componentDidMount(){
        EmployeeService.gettEmployeess().then(data => {
            //console.log(data);
            this.setState({
                employees : data
            })
        }).catch( error => {
            console.log("inside catch block", [error]);
        })
    }

    render(){
        return(
            <React.Fragment>
                <Box sx={{margin: '0px 0px 10px 20px'}}>
                    <Button variant="outlined" onClick={() => this.addEmployee()}>Add Employee</Button>
                </Box>
                <Box>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell key={column.id}>{column.label}</TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.employees && 
                                    this.state.employees.map((employee,index) => (
                                        <TableRow key={index}>
                                            {columns.map((column) => {
                                                    const value = employee[column.id];
                                                    return (
                                                        <TableCell key={value+":"+index}>
                                                                {value 
                                                                ? value 
                                                                : <React.Fragment>
                                                                        {/* <Button onClick={() => this.editEmployee(employee)}>Update</Button> */}
                                                                        <Button onClick={() => this.deleteEmployee(employee)}>Delete</Button>
                                                                        <Button onClick={() => this.viewEmployee(employee)}>View</Button>
                                                                  </React.Fragment>}
                                                        </TableCell>
                                                    )
                                                }
                                            )}
                                        </TableRow>
                                    ))

                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                {/*<Box>
                    <List>
                        {this.state.employees &&
                            this.state.employees.map((employee,index) => (
                                <ListItem key={index}>
                                    <ListItemText>{employee.first_name}</ListItemText>
                                </ListItem>
                            ))
                        }
                    </List>
                    </Box>*/}
            </React.Fragment>
        )
    }
}

export default withRouter(ListEmployeeComponent);


 /*fetch("http://localhost:8080/api/v1/employeess")
            .then(response => {
                if(response.ok){
                    // console.log(response.json());
                    //console.log(JSON.stringify(response.body, null, 2));
                    let data = response.json();
                    // let data = response.text();
                    //console.log(JSON.stringify(data, null, 2));
                    console.log(data);
                    return data;
                }
                else 
                throw new Error("Something went wrong");
            }).catch(
                (error) => {
                    console.log("inside catch block");
                    return [];
                }
            ).then(data => {
                console.log(data);
                this.setState({employees: data});
                console.log(`Length of users: ${this.state.employees.length}`);
            });*/
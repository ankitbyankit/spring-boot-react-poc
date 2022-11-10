import React from "react";
import withRouter from "./withRouter";
import EmployeeService from "../services/EmployeeService";

import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import { Typography } from "@mui/material";

class EmployeeComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            employee: {
                firstName: '',
                lastName: '',
                emailId: ''
            },
            showValidationMessage: false
        }

        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFirstNameChange(event) {
        event.preventDefault();
        this.setState({
            showValidationMessage: false,
            employee: {...this.state.employee, firstName: event.target.value}
        });
    }

    handleLastNameChange(event) {
        event.preventDefault();
        this.setState({
            showValidationMessage: false,
            employee: {...this.state.employee, lastName: event.target.value}
        });
    }

    handleEmailChange(event) {
        event.preventDefault();
        this.setState({
            showValidationMessage: false,
            employee: {...this.state.employee, emailId: event.target.value}
        });
    }

    listEmployee(){
        //console.log("add employee called");
        this.props.navigate(`/`);
    }

    handleSubmit(event) {
        event.preventDefault()
        //console.log(`${this.state.employee.firstName} ${this.state.employee.lastName} : ${this.state.employee.emailId}`);
        for(let key in this.state.employee){
            if(this.state.employee[key] === '' || this.state.employee[key] === undefined){
                this.setState({
                    showValidationMessage: true
                });
                return false;
            }
        }
        EmployeeService.createEmployee(this.state.employee);
    }

    render(){
        return(
            <React.Fragment>
                <Box sx={{margin: '10px 0px 10px 20px'}}>
                    <form onSubmit={this.handleSubmit}>
                        <div><TextField id="outlined-firstName" label="First Name" variant="outlined" value={this.state.employee.firstName} onChange={this.handleFirstNameChange} margin="normal"></TextField></div>
                        <div><TextField id="outlined-lastName" label="Last Name" variant="outlined" value={this.state.employee.lastName} onChange={this.handleLastNameChange} margin="normal"></TextField></div>
                        <div><TextField id="outlined-email" label="Email" variant="outlined" value={this.state.employee.emailId} onChange={this.handleEmailChange} margin="normal"></TextField></div>
                        <div>   
                            <Button sx={{margin: '0px 0px 10px 0px'}} variant="outlined" type="submit">Submit</Button>
                            <Button sx={{margin: '0px 0px 10px 5px'}} variant="outlined" onClick={() => this.listEmployee()}>View List</Button>
                        </div>
                    </form>
                </Box>
                { this.state.showValidationMessage &&
                    <Box sx={{margin: '10px 0px 10px 20px'}}>
                        <Typography sx={{color:'red'}}>Please enter employee details</Typography>
                    </Box>
                }
            </React.Fragment>
        )
    }
}

export default withRouter(EmployeeComponent);
import React from "react";
import withRouter from "./withRouter";
import EmployeeService from "../services/EmployeeService";

import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

class ViewEmployeeComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            employee: {}
        }
        this.listEmployee = this.listEmployee.bind(this);
    }

    listEmployee(){
        this.props.navigate(`/`);
    }

    componentDidMount() {
        //console.log("Employee id: ",[this.props.params.id]);
        EmployeeService.getEmployeebyId(this.props.params.id).then( response => {
            this.setState({
                employee : response
            });
        }).catch( (error) => {
            console.log(error);
        })
    }

    render(){
        return(
            <React.Fragment>
                <Box sx={{margin: '10px 0px 10px 20px'}}>
                    <Typography>Id: {this.state.employee.id}</Typography>
                    <Typography>first Name: {this.state.employee.first_name}</Typography>
                    <Typography>Last Name: {this.state.employee.last_name}</Typography>
                    <Typography>Email: {this.state.employee.email_id}</Typography>
                </Box>
                <Box sx={{margin: '10px 0px 10px 20px'}}>
                    <Button variant="outlined" onClick={() => this.listEmployee()}>View List</Button>
                </Box>
            </React.Fragment>
        )
    }
}

export default withRouter(ViewEmployeeComponent);
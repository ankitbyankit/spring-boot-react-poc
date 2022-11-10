import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { Box } from "@mui/material";


const StyledButton = styled(Button) `
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
`;

class TestComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {employees: []};
    }
    
    render() {
        return (
            <React.Fragment>
                <Box>
                    <StyledButton variant="contained">myButton</StyledButton>
                </Box>
            </React.Fragment>
        )
    }

}

export default TestComponent;
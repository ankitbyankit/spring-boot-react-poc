import React from "react";
import Box from "@mui/system/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
//import Button from "@mui/material/Button";

class HeaderComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <React.Fragment>
                <Box sx={{flexGrow:1, alignContent: 'flex-start'}}>
                    <AppBar position="fixed">
                        <Toolbar>
                            <Typography component="div" sx={{flexGrow:1, textAlign:'left'}}>Employees</Typography>
                            {/*<Button sx={{color:'red'}}>Login</Button>*/}
                        </Toolbar>
                        
                    </AppBar>
                </Box>
                
            </React.Fragment>
        )
    }
}

export default HeaderComponent;
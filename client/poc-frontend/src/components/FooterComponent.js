import React from "react";
import Box from "@mui/system/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

class FooterComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <React.Fragment>
                <Box sx={{flexGrow:1}}>
                    <AppBar>
                        <Toolbar>
                            <Typography component="div" sx={{flexGrow:1, textAlign:'left'}}>Rights Reserved</Typography>
                        </Toolbar>
                        
                    </AppBar>
                </Box>
                
            </React.Fragment>
        )
    }
}

export default FooterComponent;
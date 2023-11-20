// import React, { Component } from "react";
// import Dialog from "@mui/material/Dialog";
// import AppBar from "@mui/material/AppBar";
// import { ThemeProvider, createTheme } from "@mui/material/styles";


// const theme = createTheme();

// export class Success extends Component {
//   render() {

//     return (
//       <ThemeProvider theme={theme}>
//         <Dialog open fullWidth maxWidth="lg">
//           <AppBar position="static"  >
//            <h1>"Thank you for your submission"</h1> 
//           <p>you will be informed via email for further process</p>
//           </AppBar>
//         </Dialog>
//       </ThemeProvider>
//     );
//   }
// }

// export default Success;
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Define a theme (optional, if you need custom theming)
const theme = createTheme();

const Success = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Typography variant="h6">Success</Typography>
      </AppBar>
      <Box textAlign="center" mt={4}>
        <Typography variant="h4">Thank You For Your Submission</Typography>
        <Typography variant="body1">
          You will get an email with further instructions
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default Success;

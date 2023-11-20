// import React, { Component } from 'react';
// import Dialog from '@mui/material/Dialog';
// import AppBar from '@mui/material/AppBar';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';

// const theme = createTheme();

// export class FormUserDetails extends Component {
//   continue = e => {
//     e.preventDefault();
//     this.props.nextStep();
//   };

//   render() {
//     const { values, handleChange } = this.props;
//     return (
//       <ThemeProvider theme={theme}>
//         <Dialog open fullWidth maxWidth='lg'>
//           <AppBar position="static">
//             <div>Enter User Details</div>
//           </AppBar>
//           <TextField
//             placeholder="Enter Your First Name"
//             label="First Name"
//             onChange={handleChange('firstName')}
//             value={values.firstName}
//             margin="normal"
//             fullWidth
//           />
//           <br />
//           <TextField
//             placeholder="Enter Your Last Name"
//             label="Last Name"
//             onChange={handleChange('lastName')}
//             value={values.lastName}
//             margin="normal"
//             fullWidth
//           />
//           <br />
//           <TextField
//             placeholder="Enter Your Email"
//             label="Email"
//             onChange={handleChange('email')}
//             value={values.email}
//             margin="normal"
//             fullWidth
//           />
//           <br />
//           <Button
//             color="primary"
//             variant="contained"
//             onClick={this.continue}
//           >
//             Continue
//           </Button>
//         </Dialog>
//       </ThemeProvider>
//     );
//   }
// }

// export default FormUserDetails;
import React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const theme = createTheme();

const FormUserDetails = ({ values, handleChange, nextStep }) => {
  const continueHandler = e => {
    e.preventDefault();
    nextStep();
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog open fullWidth maxWidth='lg'>
        <AppBar position="static">
          <div>Enter User Details</div>
        </AppBar>
        <TextField
          placeholder="Enter Your First Name"
          label="First Name"
          onChange={handleChange('firstName')}
          value={values.firstName}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="Enter Your Last Name"
          label="Last Name"
          onChange={handleChange('lastName')}
          value={values.lastName}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="Enter Your Email"
          label="Email"
          onChange={handleChange('email')}
          value={values.email}
          margin="normal"
          fullWidth
        />
        <br />
        <Button
          color="primary"
          variant="contained"
          onClick={continueHandler}
        >
          Continue
        </Button>
      </Dialog>
    </ThemeProvider>
  );
};

export default FormUserDetails;

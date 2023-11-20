// import React, { Component } from 'react';
// import Dialog from '@mui/material/Dialog';
// import AppBar from '@mui/material/AppBar';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';

// const theme = createTheme();

// export class FormPersonalDetails extends Component {
//   continue = e => {
//     e.preventDefault();
//     this.props.nextStep();
//   };

//   back = e => {
//       e.preventDefault();
//       this.props.prevStep();  
//   }
//   render() {
//     const { values, handleChange } = this.props;
//     return (
//       <ThemeProvider theme={theme}>
//         <Dialog open fullWidth maxWidth='lg'>
//           <AppBar position="static">
//             <div>Enter User Details</div>
//           </AppBar>
//           <TextField
//             placeholder="What's your occupation"
//             label="occupation"
//             onChange={handleChange('occupation')}
//             value={values.occupation}
//             margin="normal"
//             fullWidth
            
//           />
//           <br />
//           <TextField
//             placeholder="enter your city"
//             label="city"
//             onChange={handleChange('city')}
//             value={values.city}
//             margin="normal"
//             fullWidth
//           />
//           <br />
//           <TextField
//             placeholder="Enter Your bio"
//             label="bio"
//             onChange={handleChange('bio')}
//             value={values.bio}
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
//           <Button
//             color="primary"
//             variant="contained"
//             onClick={this.back}
//           >
//             Back
//           </Button>
//         </Dialog>
//       </ThemeProvider>
//     );
//   }
// }

// export default FormPersonalDetails;
import React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const theme = createTheme();

const FormPersonalDetails = ({ values, handleChange, nextStep, prevStep }) => {
  const continueHandler = e => {
    e.preventDefault();
    nextStep();
  };

  const backHandler = e => {
    e.preventDefault();
    prevStep();
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog open fullWidth maxWidth='lg'>
        <AppBar position="static">
          <div>Enter User Details</div>
        </AppBar>
        <TextField
          placeholder="What's your occupation"
          label="occupation"
          onChange={handleChange('occupation')}
          value={values.occupation}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="enter your city"
          label="city"
          onChange={handleChange('city')}
          value={values.city}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="Enter Your bio"
          label="bio"
          onChange={handleChange('bio')}
          value={values.bio}
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
        <Button
          color="primary"
          variant="contained"
          onClick={backHandler}
        >
          Back
        </Button>
      </Dialog>
    </ThemeProvider>
  );
};

export default FormPersonalDetails;

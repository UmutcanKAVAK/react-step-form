// import React, { Component } from 'react';
// import Dialog from '@mui/material/Dialog';
// import AppBar from '@mui/material/AppBar';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import  List  from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import { ListItemText } from '@mui/material';
// import Button from '@mui/material/Button';

// const theme = createTheme();

// export class Confirm extends Component {
//   continue = e => {
//     e.preventDefault();
//     this.props.nextStep();
//   };

//   back = e => {
//       e.preventDefault();
//       this.props.prevStep();  
//   }
//   render() {
//     const { firstName, lastName , email , occupation , city , bio} = this.props.values;
//     return (
//       <ThemeProvider theme={theme}>
//         <Dialog open fullWidth maxWidth='lg'>
//           <AppBar position="static">
//             <div></div>
//           </AppBar>
//           <List>
//       <ListItem>
//         <ListItemText primary="First Name"  secondary={firstName}/>
//       </ListItem>
//       <ListItem>
//         <ListItemText primary="Last Name"  secondary={lastName}/>
//       </ListItem>
//       <ListItem>
//         <ListItemText primary="Email"  secondary={email}/>
//       </ListItem>
//       <ListItem>
//         <ListItemText primary="Occupation"  secondary={occupation}/>
//       </ListItem>
//       <ListItem>
//         <ListItemText primary="city "  secondary={city}/>
//       </ListItem>
//       <ListItem>
//         <ListItemText primary="bio"  secondary={bio}/>
//       </ListItem>
//     </List>
//     <Button
//             color="primary"
//             variant="contained"
//             onClick={this.continue}
//           >
//          Confirm & Submit
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

// export default Confirm;
import React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

const theme = createTheme();

const Confirm = ({ values, nextStep, prevStep }) => {
  const continueHandler = e => {
    e.preventDefault();
    nextStep();
  };

  const backHandler = e => {
    e.preventDefault();
    prevStep();
  };

  const { firstName, lastName, email, occupation, city, bio } = values;

  return (
    <ThemeProvider theme={theme}>
      <Dialog open fullWidth maxWidth='lg'>
        <AppBar position="static">
          <div></div>
        </AppBar>
        <List>
          <ListItem>
            <ListItemText primary="First Name" secondary={firstName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary={email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Occupation" secondary={occupation} />
          </ListItem>
          <ListItem>
            <ListItemText primary="City" secondary={city} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Bio" secondary={bio} />
          </ListItem>
        </List>
        <Button
          color="primary"
          variant="contained"
          onClick={continueHandler}
        >
          Confirm & Submit
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

export default Confirm;

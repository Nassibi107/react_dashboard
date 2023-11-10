import  './Setting.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

 function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' ,direction:'column'}}>



      <FormControl variant="filled"  sx={{ m: 1, width: '100%' }}>
        <InputLabel htmlFor="you cN ">First Name</InputLabel>
        <FilledInput id="component-fillaaed" />
      </FormControl>

      <FormControl variant="filled"  sx={{ m: 1, width: '100%' }}>
        <InputLabel htmlFor="component-filled"> Last Name</InputLabel>
        <FilledInput id="component-fillaaed" />
      </FormControl>
      <FormControl variant="filled"  sx={{ m: 1, width: '100%' }}>
        <InputLabel htmlFor="component-filled">email</InputLabel>
        <FilledInput id="component-filled" />
      </FormControl>

        <FormControl sx={{ m: 2, width: '100%' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="component-filled"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

    </Box>
  );
}
function Setting() {
  return (

      <div className="center-flex">
        <div className="settings-page  gap-20">
        
          <div className="p-20 bg-white rad-10">
            <h2 className="mt-0 mb-10">General Info</h2>
            <p className="mt-0 mb-20 c-grey fs-15">General Information About Your Account</p>
              <InputAdornments/>
              <a className="c-blue" href="#">Change</a>

            <div className="sec-box mb-15 between-flex">
              <div>
                <p className="c-grey mt-5 mb-0 fs-13">Last Change On 25/10/2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}



export default Setting;

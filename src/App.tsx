import React from 'react';
import {
  Grid,
  Button,
  TextField,
  Typography,
  MenuItem,
  Box,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  InputLabel
} from '@mui/material';

function SignUp() {
  return (
    <div>
      <Grid container>
        <Grid
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <div style={{ padding: '20px' }}>
            <Box>
              <form>
                <Typography>
                  Sign Up
                </Typography>

                <TextField
                  data-testid='firstname'
                  label="First name"
                  type="text"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  data-testid='lastname'
                  label="Last name"
                  type="text"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  data-testid='email'
                  label="Email"
                  type="text"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  data-testid='password'
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                  data-testid='radioGroup'
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel data-testid='female' value="female" control={<Radio />} label="Female" />
                  <FormControlLabel data-testid='male' value="male" control={<Radio />} label="Male" />
                  <FormControlLabel data-testid='other' value="other" control={<Radio />} label="Other" />
                </RadioGroup>

                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                  data-testid='country'
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Country"
                  variant="outlined"
                  fullWidth
                  defaultValue="Zambia"
                >
                  <MenuItem data-testid='zambia' value="Zambia">Zambia</MenuItem>
                  <MenuItem data-testid='uk' value="UK">UK</MenuItem>
                  <MenuItem data-testid='usa' value="USA">USA</MenuItem>
                </Select>
                <br />
                <br />
                <Button
                  data-testid='submit'
                  type="submit"
                  variant="contained"
                  fullWidth
                >
                  Sign Up
                </Button>
              </form>
            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default SignUp;

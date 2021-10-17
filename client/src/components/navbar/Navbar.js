import React, { useState, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import UserContext from '../../providers/UserContext';

import CustomButton from '../button/CustomButton';
import Heading from '../heading/Heading';
import Login from "../login/Login";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);


  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState("");

  const handleOpen = ({ target }) => {
    setLabel(target.innerText);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setLabel("");
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Heading variant={"h6"} component={"div"} sx={{ flexGrow: 1 }} label={"Reddit"} />
          {!user
            ? <>
              <CustomButton
                color={"inherit"}
                label={"Login"}
                onClick={handleOpen}
              />
              <CustomButton
                color={"inherit"}
                label={"Signup"}
                onClick={handleOpen}
              />
            </>
            : <CustomButton
              color={"inherit"}
              label={"Logout"}
              onClick={handleLogout}
            />
          }
        </Toolbar>
      </AppBar>
      <Login handleClose={handleClose} open={open} label={label} setOpen={setOpen} />
    </Box>
  );
}

export default Navbar;
import React, { useContext, useState } from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import CustomButton from '../button/CustomButton';
import CustomTextField from '../textfield/CustomTextField';
import Heading from '../heading/Heading';
import UserContext from '../../providers/UserContext';
import {BASE_URL} from './../../common/constants'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Login = ({ open, handleClose, label, setOpen }) => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [disabled, setDisabled] = useState(true);

  const handleSubmitButton = () => {
    if (6 <= username.length && 6 <= password.length) {
      setDisabled(false);
      return;
    }
    setDisabled(true);
  };

  const handleUsername = ({ target }) => {
    setUsername(target.value);
    handleSubmitButton();
  };
  const handlePassword = ({ target }) => {
    setPassword(target.value);
    handleSubmitButton();
  }

  const { setUser } = useContext(UserContext);

  const submitForm = (label) => {
    const path = label === 'LOGIN'
    ? "login"
    : "signup";

    const user = {
      username,
      password,
    };

    fetch(`${BASE_URL}/user/${path}`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
          'Content-Type': 'application/json'
      }})
      .then(r => {
        if (r.status === 200 || r.status === 201) {
          setUser(user.username);
          setOpen(false);
        }
        else {
          const error = path === 'login'
          ? "User does not exist"
          : "User already exists"
          alert(error)
        }
      })
      .catch(error => console.log(error))
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Heading label={label} variant={"h6"} component={"div"} sx={{ flexGrow: 1 }} />
          <CustomTextField
            id={"outlined-username-input"}
            label={"Username"}
            type={"text"}
            onChange={handleUsername}
            helperText={"minimum 6 symbols"}
          />
          <CustomTextField
            id={"outlined-password-input"}
            label={"Password"}
            type={"password"}
            onChange={handlePassword}
            helperText={"minimum 6 symbols"}
          />
          <CustomButton variant={"outlined"} onClick={() => submitForm(label)} label={label} disabled={disabled} />
        </Box>
      </Modal>
    </div>
  );
}

export default Login;
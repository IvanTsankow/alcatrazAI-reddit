import React, { useContext, useState } from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import CustomButton from '../button/CustomButton';
import CustomTextField from '../textfield/CustomTextField';
import Heading from '../heading/Heading';
import UserContext from '../../providers/UserContext';

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

const Login = ({ open, handleClose, label }) => {
  
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

  const { user, setUser } = useContext(UserContext);

  const submitForm = () => {
    //fetch -> setUser(user);
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
          <CustomButton variant={"outlined"} onClick={submitForm} label={label} disabled={disabled} />
        </Box>
      </Modal>
    </div>
  );
}

export default Login;
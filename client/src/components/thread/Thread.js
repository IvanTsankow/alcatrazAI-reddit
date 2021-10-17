import React, { useEffect, useState, useContext } from 'react';
import UserContext from '../../providers/UserContext';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Comment from "./comment/Comment";
import ThreadItem from "./thread-item/ThreadItem";
import CustomButton from '../button/CustomButton';
import Heading from '../heading/Heading';
import NotFound from "./../not-found/NotFound";
import { BASE_URL } from '../../common/constants';

const Thread = ({ history, match }) => {

  const { user } = useContext(UserContext);

  const [thread, setThread] = useState({});

  useEffect(() => {
    fetch(`${BASE_URL}/r/${match.params.id}`)
          .then(response => response.json())
          .then(setThread)
          .catch(error => console.log(error))
  }, [match]);

  const closeThread = () => {
    history.push("/home");
  };

  return (
    <>
      {thread
        ? <>
          <CssBaseline />
          <Container fixed>
            <Heading label={thread.name} variant={"h4"} component={"div"} sx={{ flexGrow: 1 }} />
            <hr />
            {thread.comments &&
              <>
                <CustomButton
                  variant={"outlined"}
                  onClick={closeThread}
                  label={"CLOSE THREAD"}
                />
                <ThreadItem thread={thread} setThread={setThread} />
              </>}
            {user
            ? <Comment thread={thread} setThread={setThread} />
            : <Heading label={"You must login to comment in this thread"} variant={"h6"} component={"div"} sx={{ flexGrow: 1 }} />
            }
          </Container>
        </>
        : <NotFound />}
    </>
  );
};

export default Thread;

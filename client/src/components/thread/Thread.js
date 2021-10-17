import React, { useEffect, useState, useContext } from 'react';
import UserContext from '../../providers/UserContext';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Comment from "./comment/Comment";
import ThreadItem from "./thread-item/ThreadItem";
import CustomButton from '../button/CustomButton';
import Heading from '../heading/Heading';
import NotFound from "./../not-found/NotFound";

const Thread = ({ history }) => {

  const { user, setUser } = useContext(UserContext);

  const [thread, setThread] = useState({
    name: "NEW THREAD",
    comments: [
      {
        user: "az",
        body: "comentiram",
        likes: 0,
        dislikes: 1
      },
      {
        user: "ti",
        body: "ala bala",
        likes: 0,
        dislikes: 0
      }
    ]
  });

  useEffect(() => {
    // fetch match.params.id
  }, []);

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
                <ThreadItem comments={thread.comments} />
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

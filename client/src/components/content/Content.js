import React, { useEffect, useState, useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';

import ContentItem from './content-item/ContentItem';
import CustomButton from '../button/CustomButton';
import CustomTextField from '../textfield/CustomTextField';
import Heading from '../heading/Heading';

import { BASE_URL, labels, threadCountProperties } from '../../common/constants';
import UserContext from '../../providers/UserContext';

const Content = () => {
    const { user } = useContext(UserContext);


    const [threads, setThreads] = useState([]);
    const [threadName, setThreadName] = useState("");
    const [disabled, setDisabled] = useState(true);


    useEffect(() => {
        fetch(`${BASE_URL}/r`)
          .then(response => response.json())
          .then(setThreads)
          .catch(error => console.log(error))

    }, []);

    const handleSubmitButton = () => {
        if (7 <= threadName.length) {
            setDisabled(false);
            return;
        }
        setDisabled(true);
    };

    const handleChange = ({ target }) => {
        setThreadName(target.value);
        handleSubmitButton();
    }

    const createNewThread = async () => {
        const newThread = {
            name: threadName,
            likes: 0,
            dislikes: 0,
            comments_total: 0,
        };
        setThreads([...threads, newThread]);

        fetch(`${BASE_URL}/r`, {
            method: 'POST',
            body: JSON.stringify(newThread),
            headers: {
                'Content-Type': 'application/json'
            }})
            .then()
            .catch(error => console.log(error))
      
    };

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <ContentItem
                            key={"content-heading"}
                            align={"center"}
                            labels={labels}
                        />
                    </TableHead>
                    <TableBody>
                        {threads.map((thread, i) => (
                            <ContentItem
                                key={i}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                component={"th"}
                                scope={"row"}
                                align={"center"}
                                data={thread}
                                labels={threadCountProperties}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {user
                ? <>
                    <CustomTextField
                        id={"outlined-threadname-input"}
                        label={"Thread name"}
                        type={"text"}
                        onChange={handleChange}
                        helperText={"minimum 7 symbols"}
                    />
                    <CustomButton
                        variant={"outlined"}
                        onClick={createNewThread}
                        disabled={disabled}
                        label={"CREATE THREAD"}
                    />
                </>
                : <Heading label={"You must login to create a new thread"} variant={"h6"} component={"div"} sx={{ flexGrow: 1 }} />
            }
        </>
    );
}

export default Content;

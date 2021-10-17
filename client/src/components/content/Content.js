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

import { labels, threadCountProperties } from '../../common/constants';
import UserContext from '../../providers/UserContext';

const Content = () => {
    const { user, setUser } = useContext(UserContext);


    const [threads, setThreads] = useState([
        {
            id: "123",
            name: "ALABALA",
            comments_total: 159,
            likes: 10,
            dislikes: 10,
            members: 10,
        },
    ]);
    const [threadName, setThreadName] = useState("");
    const [disabled, setDisabled] = useState(true);


    useEffect(() => {
        //fetch db for all r/
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

    const createNewThread = async (event) => {
        const newThread = {
            name: threadName,
            admin: "", //user
            likes: 0,
            comments: 0,
        };
        setThreads([...threads, newThread]);

        // fetch().then();
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
                        {threads.map((thread) => (
                            <ContentItem
                                key={thread.id}
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

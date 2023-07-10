import React from 'react';
import { Box, Button } from '@chakra-ui/react'
import { fakeUserData } from '../api';
import { useDispatch } from 'react-redux';
import { addUser, deleteUsers } from '../store/slices/UserSlice';
import DisplayUsers from '../Components/DisplayUsers';

const UserDetails = () => {
    const dispatch = useDispatch();

    const addNewUser = (payload) => {
        dispatch(addUser(payload))
    };

    const RemoveUsers = () => {
        dispatch(deleteUsers());
    };

    return (
        <Box>
            <Button onClick={() => addNewUser(fakeUserData())}>Add New User</Button>

            <ul>
                <DisplayUsers />
            </ul>

            <hr></hr>
            <Button onClick={RemoveUsers}>Clear All</Button>
        </Box>
    );
};


export default UserDetails
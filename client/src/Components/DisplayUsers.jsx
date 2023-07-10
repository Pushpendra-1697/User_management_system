import { Button } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillDelete } from 'react-icons/ai';
import { removeUser } from '../store/slices/UserSlice';

const DisplayUsers = () => {
    const dispatch = useDispatch();
    const data = useSelector((store) => store.users);
    const deleteUser = (id) => {
        dispatch(removeUser(id));
    };

    return (
        <>
            {
                data.map((user, id) => {
                    return <li key={id}>{user}
                        <Button ml='2%' color={"red"} onClick={() => deleteUser(id)}><AiFillDelete /></Button>
                    </li>
                })
            }
        </>
    );
}

export default DisplayUsers;
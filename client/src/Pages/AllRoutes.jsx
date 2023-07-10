import { Box } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import ContactDetails from './ContactDetails';
import SingleContact from './SingleContact';
import UserDetails from './UserDetails';


const AllRoutes = () => {
    return (
        <Box>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/register' element={<Signup />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/contact' element={<ContactDetails />}></Route>
                <Route path='/contact/:contact_id' element={<SingleContact />}></Route>
                <Route path='/users' element={<UserDetails />}></Route>
            </Routes>
        </Box>
    );
}

export default AllRoutes;
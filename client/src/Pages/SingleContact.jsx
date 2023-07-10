import { Alert, AlertIcon, Box, Container, Img, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { backend_url } from './BackendURL';
import { useSelector } from 'react-redux';
import { BiLoaderCircle } from "react-icons/bi";

function getPostById(id) {
    return fetch(`${backend_url}/contact/single/${id}`).then((res) => res.json());
};

const SingleContact = () => {
    const params = useParams();
    const [data, setData] = useState(null);
    const { loading, error } = useSelector((store) => store.contactManager);

    useEffect(() => {
        getPostById(params.contact_id).then((res) => setData(res.contact)).catch((err) => console.log(err));
    }, []);


    if (data == null) {
        return (<h1 style={{ textAlign: "center", fontSize: "23px" }}>Loading....</h1>)
    };
    return (
        <Container boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" padding={"10px"} borderRadius={"10px"} mt={["15%", "15%", "5%"]}>
            {(loading) && (
                <Box display={"flex"} justifyContent="center" alignItems={"center"}>
                    {" "}
                    <BiLoaderCircle fontSize={"34px"} />{" "}
                </Box>
            )}
            {error && <Box display={"flex"} justifyContent="center" alignItems={"center"}>
                <Alert status='error' w="300px" >
                    <AlertIcon />
                    {`Something went Wrong`}
                </Alert>
            </Box>}

            <Img borderRadius={'50%'} w='150px' h={'150px'} src={data.profile} alt='Profile' />
            <Text>ID: {data._id}</Text>
            <Text>Name: {data.name}</Text>
            <Text>Email: {data.email}</Text>
            <Text>Address: {data.address}</Text>
            <Text mb="13px">Phone No.: {data.phone}</Text>
            <Link style={{ textDecoration: "none", color: "red", background: "black", padding: "8px", borderRadius: "10px" }} to='/contact'>Go Back</Link>
        </Container>
    );
}

export default SingleContact;
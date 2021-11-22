import React, {useState, useEffect} from "react"

import { Container } from "@chakra-ui/react"
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react"
import { Button } from "@chakra-ui/button"
import { FormControl, FormLabel, FormHelperText } from "@chakra-ui/react"
import { Input } from "@chakra-ui/input"
import { Select } from "@chakra-ui/select"

import { useFormik } from 'formik';
import axios from "axios"

import Modal from "../../components/modal"

const UserPage = () => {
    const [usersData, setUsersData] =  useState([])
    const [isModalShow, setIsModalShow] =  useState(false)

    const getusers = async () => {

        try {
            const {data} = await axios.get("http://localhost:5000/users")
            
            setUsersData(data.users)
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        getusers()
    }, [])

    const showModal = () => {
        setIsModalShow(true)
    }
    const closeModal = () => {
        setIsModalShow(false)
    }

    const formik = useFormik({
     initialValues: {
       fullName: '',
       Password: '',
       email: '',
       role: ''
     },
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
    });

    return (
        <Container maxW="container.lg" py={10}>
        <Button size="md" colorScheme="facebook" onClick={showModal} mb={5} >Buat User</Button>
 <Table variant="simple">
  
  <Thead>
    <Tr>
      <Th>Full Name</Th>
      <Th>Email</Th>
      <Th>Role</Th>
    </Tr>
  </Thead>
  <Tbody>
    {usersData.map(user => (

    <Tr key={user.id}>
      <Td>{user.fullName}</Td>
      <Td>{user.email}</Td>
      <Td>{user.role}</Td>
    </Tr>
    ))}
    
  </Tbody>
  
</Table>
<Modal isOpen={isModalShow} onClose={closeModal} title="Buat User Form">
<form onSubmit={formik.handleSubmit}>
    <FormControl isRequired>
    <FormLabel>Full Name</FormLabel>
    <Input placeholder="Your Full Name" name="fullName" onChange={formik.handleChange}
        value={formik.values.fullName} />
    </FormControl>

    <FormControl isRequired>
    <FormLabel>Password</FormLabel>
    <Input type="password" placeholder="Your Password" name="password" onChange={formik.handleChange}
        value={formik.values.password} />
    </FormControl>

    <FormControl>
    <FormLabel>Email address</FormLabel>
    <Input type="email" placeholder="Your Email" name="email" onChange={formik.handleChange}
        value={formik.values.email} />
    <FormHelperText>We will never share your email.</FormHelperText>
    </FormControl>

    <FormControl>
    <FormLabel>Role</FormLabel>
    <Select
        placeholder="Select Your Role"
        name="role" 
        onChange={formik.handleChange}
        value={formik.values.role}
        >
        <option>Admin</option>
        <option>User</option>
    </Select>
    </FormControl>

            <Button
                my={2}
                colorScheme="whatsapp"
                variant="ghost"
                width="100%"
                type="submit">
                Submit
            </Button>
</form>

</Modal>
</Container>
    )
}

export default UserPage

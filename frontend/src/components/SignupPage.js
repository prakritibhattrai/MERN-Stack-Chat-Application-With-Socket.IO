import { Button, FormControl, FormHelperText, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const SignupPage = () => {
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [email, setEmail] = useState();
    const [pic, setPic] = useState();
    const [show, setShow] = useState(false);

    return (
        <VStack spacing="5px">
            <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input type='name' placeholder='Enter Name' size='sm' onClick={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type='email' placeholder='Enter Email' size='sm' onClick={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup size='md'>
                    <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter Password'
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={(e) => setShow(!show)}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <Input type='password' placeholder='Enter Confirm Password' size='sm' onClick={(e) => setConfirmPassword(e.target.value)} />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Upload Image</FormLabel>
                <Input type='file' size='sm' placeholder='Enter your Pic' onClick={(e) => setPic(e.target.value)} />
            </FormControl>

            <Button colorScheme='blue' size='sm' width='100%' p={2}>Sign Up</Button>
        </VStack>
    )
}

export default SignupPage

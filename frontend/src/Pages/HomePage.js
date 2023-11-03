import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import LoginPage from '../components/LoginPage'
import SignupPage from '../components/SignupPage'

const HomePage = () => {
    return (<>
        <Container maxW="xl" centerContent>
            <Box d="flex" justifyContent="center" bg="white" w="100%" p={3} m="40px 0 15px 0" borderRadius="lg" borderWidth="1px">
                <Text fontFamily="sans-serif" fontSize="2xl">CHIT-CHAT</Text>
            </Box>
            <Box bg='white' w='100%' mt={2} p={4} borderRadius="lg">
                <Tabs variant='soft-rounded'>
                    <TabList mb="1em">
                        <Tab width="50%"><Text>Login</Text></Tab>
                        <Tab width="50%"><Text>Sign Up</Text></Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <LoginPage />
                        </TabPanel>
                        <TabPanel>
                            <SignupPage />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>


        </Container>
    </>)
}

export default HomePage

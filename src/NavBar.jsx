import React from 'react'
import { Box, Button, Flex, Image, Link, Spacer } from '@chakra-ui/react';
import Facebook from './Assets/facebook_32x32.png';
import Twitter from './Assets/twitter_32x32.png';
import Email from './Assets/email_32x32.png';
import Opensea from './Assets/opensea_32x32.png';
import About from './About';

const NavBar = ({ accounts, setAccounts }) => {

    const isConnected = Boolean(accounts[0]);

     async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }
    return (
        <Flex justify="space-between" align="center" padding="30px">
            <Flex justify="space-around" width="40%" padding="0 15rem">
                <Link href="https://www.facebook.com/profile.php?id=100081332770181">
                    <Image src={Facebook} boxSize="42px" margin="0 15px" />
                </Link>
                <Link href="https://www.twitter.com/off2eth">
                    <Image src={Twitter} boxSize="42px" margin="0 15px" />
                </Link>
                <Link href="mailto:brodyamcfarland@gmail.com">
                    <Image src={Email} boxSize="42px" margin="0 15px" />
                </Link>
                <Link href="https://testnets.opensea.io/collection/cybropunks">
                    <Image src={Opensea} boxSize="42px" margin="0 15px" />
                </Link>
            </Flex>
            
            <Flex justify="space-around" align="center" bwidth="40%" padding="30px">
                <About />
                <Spacer/>
                <Spacer/>
                <Spacer/>
            
            {isConnected ? (
                <Box margin="0 15px" textColor="#57f078" textShadow="0 3px #01362b">Connected</Box>
            ) : (
                <Button backgroundColor="#b34147" borderRadius="5px" boxShadow="0px 2px 2px 1px #0F0F0F" color="white" cursor="pointer" fontFamily="inherit" padding="15px" margin="0 15px" onClick={connectAccount}>
                    Connect
                </Button>
            )}
            </Flex>
        </Flex>
  );
};

export default NavBar;
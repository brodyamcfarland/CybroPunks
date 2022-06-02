import React from 'react'
import './about.css'
import { useState } from 'react'
import { Button } from '@chakra-ui/react';

const About = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
      setModal(!modal)
  }

  return (
      <>
        <Button onClick={toggleModal} backgroundColor="transparent" border="none" margin="0 15px" color="white" cursor="pointer" fontFamily="inherit" boxShadow="0px 3px 3px 3px #0F0F0F">About</Button>
        {modal && (
        <div className='about__container'>
            <Button className='close__about' backgroundColor="#b34147" borderRadius="5px" boxShadow="0px 2px 2px 1px #0F0F0F" color="white" cursor="pointer" fontFamily="inherit" padding="5px" onClick={toggleModal}>x</Button>
            -- ABOUT --
            <div className="about__content">
                <br></br>
                <section>This NFT Project is created solely by Brody McFarland to ensure everybody is blessed with the best NFT's on Ethereum's Rinkeby Test Network.</section>
                <ul>1. Connect to Rinkeby Test Network via MetaMask</ul>
                <ul>2. Obtain test Ethereum via a faucet</ul>
                <ul>3. Choose up to 3 NFT's to Mint (each Mint costs .05 ETH)</ul>
            </div>
        </div>
        )}
     </>
  )
}

export default About
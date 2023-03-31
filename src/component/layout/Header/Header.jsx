import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure, VStack } from '@chakra-ui/react'
import React from 'react'
import ColorModeSwitcher from "../../../ColorModeSwitcher"
import { RiMenu5Fill } from "react-icons/ri"
import { Link } from 'react-router-dom'




const LinkButton = ({url ="/", title ="Home"}) => (
    <Link to={url} >
        <Button variant={"ghost"}>
            {title}
        </Button>
    </Link>
)



const Header = () => {

    const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <>
       <ColorModeSwitcher /> 
       <Button onClick={onOpen}
       colorScheme={"yellow"} width="12" height={"12"} rounded="full" position={"fixed"} top={"6"} left={"6"}>
        <RiMenu5Fill />
       </Button>

       <Drawer placement='left' onClose={onClose} isOpen={isOpen} >
        <DrawerOverlay backdropFilter={"blur(20px)"} />
        <DrawerContent>
            <DrawerHeader borderBottomWidth={"1px"}>Courses</DrawerHeader>
            <DrawerBody>

           <VStack spacing={"4"}>
            <LinkButton url="/" title="Home"/>
            <LinkButton url="/lecture1" title="Day1"/>
            <LinkButton url="/lecture2" title="Day2"/>
            <LinkButton url="/lecture3" title="Day3"/>
            <LinkButton url="/lecture4" title="Day4"/>
            <LinkButton url="/lecture5" title="Day5"/>
            <LinkButton url="/lecture6" title="Day6"/>
            <LinkButton url="/lecture7" title="Day7"/>
            <LinkButton url="/lecture8" title="Day8"/>
            <LinkButton url="/lecture9" title="Day9"/>
            <LinkButton url="/lecture10" title="Day10"/>
            <LinkButton url="/about" title="About"/>
           </VStack> 

            </DrawerBody>
        </DrawerContent>
       </Drawer>
    </>
  )
}

export default Header


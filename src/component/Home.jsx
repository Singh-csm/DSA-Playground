import React from 'react'
import { Heading, Stack ,Text, VStack, Button, Image, Box, HStack} from '@chakra-ui/react'
import vg from "../assets/images/bg.png"
import { Link } from 'react-router-dom'
import {CgGoogle, CgYoutube} from 'react-icons/cg'
import {SiCoursera,SiUdemy} from "react-icons/si"
import {DiAws} from "react-icons/di"
// import introvideo from "../assets/videos/vid.mp4"
import "./home.css"
const Home = () => {
  return (
        <section className='home'>
            <div className="container">
               
               <Stack
               direction={["column", "row"]}
               right="100%"
               justifycontent={["center", "space-between"]}
               alignitems="center"
               spacing={["16","56"]}
               >

        <VStack width={"full"} alignItems={["center", 'flex-start']}> 
            <Heading children="Dsa" size={"2*1"} />
            <Text children="Hello Developers!" />
            {/* button of lectures  */}
            <Link to="/lecture1">
            <Button size={"lg"} colorScheme="yellow"> Big O Notation</Button>
           </Link>  


           
           <Link to="/lecture3">
            <Button size={"lg"} colorScheme="green"> Insertion Sort</Button>
           </Link>  


    
           
           <Link to="/lecture5">
            <Button size={"lg"} colorScheme="blue"> Merge Sort</Button>
           </Link>  



           <Link to="/lecture7">
            <Button size={"lg"} colorScheme="telegram"> Binary Search</Button>
           </Link>  


           <Link to="/lecture9">
            <Button size={"lg"} colorScheme="red"> Call Stack</Button>
           </Link>






        </VStack>

        <VStack width={"full"} alignItems={["center", 'flex-start']}> 
            <Heading children="DSA " size={"2*1"} />
            <Text children="Practice!" />
            {/* button of lectures  */}



           <Link to="/lecture2">
            <Button size={"lg"} colorScheme="red"> Quick Sort</Button>
           </Link>  



           <Link to="/lecture4">
            <Button size={"lg"} colorScheme="orange"> Selection Sort</Button>
           </Link>  


           <Link to="/lecture6">
            <Button size={"lg"} colorScheme="pink"> Bubble Sort</Button>
           </Link>  



           <Link to="/lecture8">
            <Button size={"lg"} colorScheme="linkedin"> Recursion</Button>
           </Link>



           <Link to="/lecture10">
            <Button size={"lg"} colorScheme="green"> Data Structure </Button>
           </Link>






        </VStack>

    <Image className='vector-graphics' boxSize={"md"} src={vg} objectFit="contain"   />

               </Stack>
                
            </div>

            <Box padding={"8"} bg="blackAlpha.800">
        <Heading
        textAlign={"center"}
        fontFamily="body"
        color={"yellow.400"}
        children="OurCourses"
        >

        <HStack className='OurCourses' justifyContent={"space-between"} marginTop="4">
            <CgGoogle />
            <CgYoutube />
            <SiCoursera />
            <SiUdemy />
            <DiAws />

        </HStack>

        </Heading>
            </Box>

            {/* <div className='container2'>
            <video
            autoPlay={true}
            controls 
            controlsList='nodownload nofullscreen noremoteplayback'
            disablePictureInPicture
            disableRemotePlayback
            src={introvideo}
            
            >

            </video>

            </div> */}
        </section>
  )
}

export default Home

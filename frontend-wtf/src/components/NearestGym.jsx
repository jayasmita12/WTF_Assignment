import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios"
import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    Divider,
    HStack,
    Tag,
    Wrap,
    WrapItem,
    useColorModeValue,
    Container,
    VStack,
    Button,
  } from '@chakra-ui/react';

export const NearestGym = () => {
    const [gymdata,setGymData]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:8080/data")
        .then(res=>{
            setGymData(res.data)
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

  return (
    <div>
        {gymdata.map((e)=>{
            return(
                <Box 
                key={e.id}
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box 
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box 
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={
                  e.cover_image
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          {/* <BlogTags tags={['Engineering', 'Product']} /> */}
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
             {e.gym_name}
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg"
            fontWeight="bold">
            {e.address1},{e.address2},{e.city}
          </Text>
          
        </Box>
        <Box style={{}}>
          <Button colorScheme='red' color="black">Book Now</Button>
        </Box>
      </Box>
            )
        })}
        
    </div>
  )
}






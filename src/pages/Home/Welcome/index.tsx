import { FC } from 'react';
import illustration from 'assets/chart.png';
import { Button, Image, Text, Heading, Flex, Box, useColorMode } from '@chakra-ui/react';
import styles from './index.module.css';
import { BiChevronRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const Welcome: FC = () => {
  return (
    <Flex justify="center" h={{md:"calc(100vh - (81px * 2))"}} w="full" mt={[10,10,0]}>
    <Flex maxW="800px" mx={6} direction={{base:"column",sm:"row",md:"row"}} justify="center" align="center">
        <Box mr={[0,8]} w={{base:"100%",sm:"380px"}}>
          <Heading as="h1" size="4xl">
            Lightweight JSON hosting
          </Heading>
          <Text>
            A simple-to-use JSON files hosting. You can change the contents with
            API or website UI.
          </Text>
          <Link to="/auth/register">
            <Button variant="brand" rightIcon={<BiChevronRight fontSize="20px"/>}>
              Get started
            </Button>
          </Link>
        </Box>
        <Box mt={["20px",0]}>{<Image w={["250px","100%"]} mt="13px" mr="10px" maxW="300px" transform="rotate(25deg)" src={illustration} alt="Illustration"/>}</Box>
     
    </Flex>
    </Flex>
  );
};

export default Welcome;

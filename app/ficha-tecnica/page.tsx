import { 
    Box,
    Text,
    Title,

 } from '@mantine/core';

import Link from 'next/link';

import back from './background.module.css';

export default function HomePage() {
    return(
    <div className={back.back}>
    <Box ml="20%" mr="20%" mt={100} ta="center" h="100vh"  bg="light-dark(white, rgb(27,27,27))">
        <Title w="full" order={3} pt="30px" mb={50} c="light-dark(  rgba(197, 123, 55), rgba(219, 138, 53))">
                Ficha técnica
        </Title>
        Acesse a ficha técnica completa da AICAS no link abaixo:
        <br></br>
        <Link href="#">Ficha técnica</Link>
    </Box>
    </div>
    )
}
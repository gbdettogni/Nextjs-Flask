import { 
    Box,
    Text,
    Title,

 } from '@mantine/core';

 import back from './background.module.css';

export default function HomePage() {
    return(
    <div className={back.back}>
    <Box ml="20%" mr="20%" mt={100} ta="center"  bg="light-dark(white, rgb(27,27,27))">
        <Title w="full" order={3} pt="30px" mb={50} c="light-dark(  rgba(197, 123, 55), rgba(219, 138, 53))">
                Conselhos
        </Title>
        <Box bg="light-dark(  rgba(197, 123, 55), rgba(219, 138, 53))" w="80%" ml="10%" mb={50} h={300}></Box>
        <Title w="full" order={3} pt="30px" mb={50} c="light-dark(  rgba(197, 123, 55), rgba(219, 138, 53))" ta="left" ml="5%">
                Conselho 1
        </Title>
        <Text ta="justify" mr="5%" ml="5%">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim lorem, accumsan sit amet interdum non, condimentum id nisl. Sed ultrices aliquam ligula, consectetur tempor mauris consectetur ac. Nunc nec odio quis nisl vulputate porta non ut purus. Cras et lectus at felis convallis laoreet. Cras iaculis augue pulvinar orci venenatis, eu bibendum mi vulputate. Etiam posuere eget enim ut hendrerit. Praesent bibendum consequat cursus. Duis vitae mauris vel ex tempor dapibus. Integer nec odio ac risus tincidunt hendrerit. Aenean dignissim aliquet purus eget tristique. Mauris volutpat nunc in ex blandit porta. Duis vel pharetra sem.
        </Text >
        <Title w="full" order={3} pt="30px" mb={50} c="light-dark(  rgba(197, 123, 55), rgba(219, 138, 53))" ta="left" ml="5%">
                Conselho 2
        </Title>
        <Text ta="justify" mr="5%" ml="5%">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim lorem, accumsan sit amet interdum non, condimentum id nisl. Sed ultrices aliquam ligula, consectetur tempor mauris consectetur ac. Nunc nec odio quis nisl vulputate porta non ut purus. Cras et lectus at felis convallis laoreet. Cras iaculis augue pulvinar orci venenatis, eu bibendum mi vulputate. Etiam posuere eget enim ut hendrerit. Praesent bibendum consequat cursus. Duis vitae mauris vel ex tempor dapibus. Integer nec odio ac risus tincidunt hendrerit. Aenean dignissim aliquet purus eget tristique. Mauris volutpat nunc in ex blandit porta. Duis vel pharetra sem.
        </Text >
        <Title w="full" order={3} pt="30px" mb={50} c="light-dark(  rgba(197, 123, 55), rgba(219, 138, 53))" ta="left" ml="5%">
                Conselho 3
        </Title>
        <Text ta="justify" mr="5%" ml="5%">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim lorem, accumsan sit amet interdum non, condimentum id nisl. Sed ultrices aliquam ligula, consectetur tempor mauris consectetur ac. Nunc nec odio quis nisl vulputate porta non ut purus. Cras et lectus at felis convallis laoreet. Cras iaculis augue pulvinar orci venenatis, eu bibendum mi vulputate. Etiam posuere eget enim ut hendrerit. Praesent bibendum consequat cursus. Duis vitae mauris vel ex tempor dapibus. Integer nec odio ac risus tincidunt hendrerit. Aenean dignissim aliquet purus eget tristique. Mauris volutpat nunc in ex blandit porta. Duis vel pharetra sem.
        </Text >
        
    </Box>
    </div>
    )
}
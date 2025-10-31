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
        <Title w="full" order={3} pt="30px" mb={50} c="light-dark(  rgba(80, 60, 87), rgba(96, 72, 103))">
                Quem somos nós?
        </Title>
        <Box bg="light-dark(  rgba(80, 60, 87), rgba(96, 72, 103))" w="80%" ml="10%" mb={50} h={300}/>
        <Text ta="justify" mr="5%" ml="5%">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim lorem, accumsan sit amet interdum non, condimentum id nisl. Sed ultrices aliquam ligula, consectetur tempor mauris consectetur ac. Nunc nec odio quis nisl vulputate porta non ut purus. Cras et lectus at felis convallis laoreet. Cras iaculis augue pulvinar orci venenatis, eu bibendum mi vulputate. Etiam posuere eget enim ut hendrerit. Praesent bibendum consequat cursus. Duis vitae mauris vel ex tempor dapibus. Integer nec odio ac risus tincidunt hendrerit. Aenean dignissim aliquet purus eget tristique. Mauris volutpat nunc in ex blandit porta. Duis vel pharetra sem.
        Integer nec eros ullamcorper, feugiat nisl a, interdum tortor. Curabitur malesuada neque quis nisl commodo consectetur. Etiam eget mi mattis, vulputate metus nec, viverra massa. Donec at dignissim lectus. Nunc ut euismod tortor. Donec varius, sem id scelerisque luctus, ligula justo volutpat sem, et tincidunt neque arcu sed nunc. Nulla pharetra dictum accumsan. Mauris quis est feugiat orci interdum ultricies eget eget felis. Vivamus rutrum suscipit ante, at rutrum leo euismod vitae. Praesent id gravida mauris.
        </Text>
        <Text ta="justify" mr="5%" ml="5%">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim lorem, accumsan sit amet interdum non, condimentum id nisl. Sed ultrices aliquam ligula, consectetur tempor mauris consectetur ac. Nunc nec odio quis nisl vulputate porta non ut purus. Cras et lectus at felis convallis laoreet. Cras iaculis augue pulvinar orci venenatis, eu bibendum mi vulputate. Etiam posuere eget enim ut hendrerit. Praesent bibendum consequat cursus. Duis vitae mauris vel ex tempor dapibus. Integer nec odio ac risus tincidunt hendrerit. Aenean dignissim aliquet purus eget tristique. Mauris volutpat nunc in ex blandit porta. Duis vel pharetra sem.
        Integer nec eros ullamcorper, feugiat nisl a, interdum tortor. Curabitur malesuada neque quis nisl commodo consectetur. Etiam eget mi mattis, vulputate metus nec, viverra massa. Donec at dignissim lectus. Nunc ut euismod tortor. Donec varius, sem id scelerisque luctus, ligula justo volutpat sem, et tincidunt neque arcu sed nunc. Nulla pharetra dictum accumsan. Mauris quis est feugiat orci interdum ultricies eget eget felis. Vivamus rutrum suscipit ante, at rutrum leo euismod vitae. Praesent id gravida mauris.
        </Text>
        
    </Box>
    </div>
    )
}
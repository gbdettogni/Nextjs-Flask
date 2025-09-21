"use client"
import { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery, useDisclosure } from '@mantine/hooks';
import carouselUI from './CardsCarousel.module.css';
import '@mantine/carousel/styles.css';
import Autoplay from 'embla-carousel-autoplay';
import {
  Paper, 
  Title,
  AspectRatio,
  useMantineColorScheme,
  Box,
  Burger,
  Button,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  Text,
  useMantineTheme,
  Container, 
  Overlay, 
  ActionIcon 
} from '@mantine/core';

import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import footerUI from './FooterSocial.module.css';
import HeaderUI from './HeaderMegaMenu.module.css';
import HeroUI from './HeroContentLeft.module.css';
interface CardProps {
  image: string;
  title: string;
  category: string;
}


import logo from './logo.module.css'


function Card({ image, title, category }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={carouselUI.card}
    >
      <div>
        <Text className={carouselUI.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={carouselUI.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
}

export default function HomePage() {

  const { toggleColorScheme } = useMantineColorScheme();
  const autoplay = useRef(Autoplay({ delay: 5000 }));


  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const theme = useMantineTheme();

  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));
  
  return (
    <>
      <Box>
            <header className={HeaderUI.header}>
              <Group justify="space-between" h="100%">
                <div className={logo.logo}>Logo</div>
      
                <Group h="100%" gap={0} visibleFrom="sm">
                  <a href="#" className={HeaderUI.link}>
                    Página 1
                  </a>
                  <a href="#" className={HeaderUI.link}>
                    Página 2
                  </a>
                  <a href="#" className={HeaderUI.link}>
                    Página 3
                  </a>
                  <a href="#" className={HeaderUI.link}>
                    Página 4
                  </a>
                </Group>
                <Group>
                  <Button onClick={() => toggleColorScheme()} visibleFrom='sm' variant="outline" radius="xl">Tema</Button>
                </Group>
                
      
                <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
              </Group>
            </header>
      
            <Drawer
              opened={drawerOpened}
              onClose={closeDrawer}
              size="100%"
              padding="md"
              title="Navigation"
              hiddenFrom="sm"
              zIndex={1000000}
            >
              <ScrollArea h="calc(100vh - 80px" mx="-md">
                <Divider my="sm" />
      
                <a href="#" className={HeaderUI.link}>
                  Página 1
                </a>
                <a href="#" className={HeaderUI.link}>
                  Página 2
                </a>
                <a href="#" className={HeaderUI.link}>
                  Página 3
                </a>
                <a href="#" className={HeaderUI.link}>
                  Página 4
                </a>
                <Button onClick={() => toggleColorScheme()} variant="transparent">Tema</Button>
                
                <Divider my="sm" />
      
      
              </ScrollArea>
            </Drawer>
          </Box>
           <div className={HeroUI.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={HeroUI.inner}>
        <Title className={HeroUI.title}>
          Lorem ipsum dolor sit amet
        </Title>

        <Container size={640}>
          <Text size="lg" className={HeroUI.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          </Text>
        </Container>

          <div className={HeroUI.controls}/>
      </div>
    </div>

    <div style={{textAlign: 'center', marginTop: 40}}>
    <Title w="full" order={3} size="h1">
        Quem somos nós?
    </Title>
    </div>

    <div style={{textAlign: 'center', marginTop: 40}}>
      <Text w="80%" size="lg" ml="10%">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        efficitur, quam in facilisis commodo, sapien justo cursus urna, ut
        blandit turpis nulla vel quam. Nunc nec neque at dolor venenatis
        convallis. In hac habitasse platea dictumst. Aenean vel dui ut ex
        fringilla lobortis. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis
        in faucibus orci luctus et ultrices posuere cubilia curae; Sed at
      </Text>
    </div>

    <div style={{textAlign: 'center', marginTop: 40}}>
    <Title w="full" order={3} size="h2">
        Conheça um pouco mais através do vídeo institucional
    </Title>
    </div>

    <AspectRatio ratio={10 / 6} mt="50" visibleFrom='sm' ml={200} mr={200} mb="50">
      <iframe src="https://www.youtube.com/embed/Lli99OmkPwM?si=mBOhSPaDqicNS6eq" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
    </AspectRatio>

    <AspectRatio ratio={10 / 6} hiddenFrom='sm'>
      <iframe src="https://www.youtube.com/embed/Lli99OmkPwM?si=mBOhSPaDqicNS6eq" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
    </AspectRatio>

    <div style={{textAlign: 'center', marginTop: 40, marginBottom: 40}}>
    <Title w="full" order={3} size="h2">
        Últimas notícias!
    </Title>
    </div>

    <Carousel
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={2}
      emblaOptions={{ loop: true, dragFree: false, align: 'start', slidesToScroll: mobile ? 1 : 2 }}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={() => autoplay.current.play()}
      classNames={carouselUI} 
    >
      {slides}
    </Carousel>

    <div className={footerUI.footer}>
      <Container className={footerUI.inner}>
        <div className={logo.logo}>Logo</div>
        <Group gap={0} className={footerUI.links} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="blue" >
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="blue" >
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="blue" >
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
    </>
  );
}


const data = [
  {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Hawaii beaches review: better than you think',
    category: 'beach',
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Aurora in Norway: when to visit for best experience',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best places to visit this winter',
    category: 'tourism',
  },
  {
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Active volcanos reviews: travel at your own risk',
    category: 'nature',
  },
];
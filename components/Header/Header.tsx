'use client'
import 
{ 
  useDisclosure,
}from '@mantine/hooks';

import {useState, useEffect} from 'react';

import {
  Box,    
  Burger,
  Collapse,
  Divider,
  Drawer,
  ScrollArea,
  Group,
  Button,
  useMantineColorScheme,
  HoverCard,
  Center,
  SimpleGrid,
  UnstyledButton,
  useMantineTheme,
  ActionIcon
} from '@mantine/core';

import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube, IconChevronDown } from '@tabler/icons-react';


import Link from 'next/link';

import HeaderUI from './HeaderMantine.module.css';
import {Logo} from '@/components/Logo/Logo'

const AICASlinks = [
  {
    title: 'Quem somos',
    link: '/aicas',
    class_colour: HeaderUI.link_purple,
  },
  {
    title: 'Nossa história',
    link: '/historia',
    class_colour: HeaderUI.link_purple,
  },
];

  const TRANSlinks = [
    {
      title: 'Diretorias',
      link: '/diretorias',
      class_colour: HeaderUI.link_yellow,
    },
    {
      title: 'Conselhos',
      link: '/conselhos',
      class_colour: HeaderUI.link_yellow,
    },
    {
      title: 'Ficha técnica',
      link: '/ficha-tecnica',
      class_colour: HeaderUI.link_yellow,
    },
    {
      title: 'Estatuto',
      link: '/estatuto',
      class_colour: HeaderUI.link_yellow,
    }
  ];

function navLink(links: Array<{ title: string; link: string; class_colour: string; }>) {
  return links.map((item) => (
    <UnstyledButton  key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <div>
          <Link className={item.class_colour} href={item.link}  >
            {item.title}
          </Link>
        </div>
      </Group>
    </UnstyledButton>
  ));
}

export function HeaderAICAS() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const { toggleColorScheme } = useMantineColorScheme();

  const theme = useMantineTheme();
  const Aicaslinks = navLink(AICASlinks);
  const Translinks = navLink(TRANSlinks);

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const constrolNavbar = () => {
      const currentScrollY = window.scrollY;

      if(currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }else{
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    }

    window.addEventListener("scroll", constrolNavbar);
  }, []);

  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);

  // const smallScreen = useMediaQuery('(max-width: 40em)')

  return (
    <div className={`${HeaderUI.fixedheader} ${isVisible ? HeaderUI.visible : HeaderUI.hidden}`}>
    <Box>
        <header className={HeaderUI.header}>
          <Group hiddenFrom="sm" justify='space-between' h="100%">
            <Group hiddenFrom='sm'>
              <Button variant='gradient' gradient={{ from: 'violet', to: 'red', deg: 90 }}>Doe Agora!</Button>
            </Group>
            <Group gap={10}>
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
          </Group>

          <Group visibleFrom="sm" justify='right' h="100%">
            <Group gap={10}>
            <ActionIcon size="lg" color="blue" >
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="blue" >
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="blue" >
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
            <Button visibleFrom='sm' onClick={() => toggleColorScheme()}  variant="outline" radius="xl">Tema</Button>
            </Group>
          </Group>

          <Group justify="space-between" h="100">
          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
            <Link href="/">
            <Logo />
            </Link>
  
            <Group h="100%" gap={0} visibleFrom="sm">
              <HoverCard width={165} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={HeaderUI.link_purple}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      AICAS
                    </Box>
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <SimpleGrid cols={1} spacing={0}>
                  {Aicaslinks}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
              <a href="#" className={HeaderUI.link_blue}>
                Programas
              </a>
              <a href="#" className={HeaderUI.link_green}>
                Acontece
              </a>
              <HoverCard width={165} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={HeaderUI.link_yellow}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Transparência
                    </Box>
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <SimpleGrid cols={1} spacing={0}>
                  {Translinks}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
              <a href="#" className={HeaderUI.link_red}>
                Apoie
              </a>
            </Group>
            <Group visibleFrom='sm'>
              <Button variant='gradient' gradient={{ from: 'violet', to: 'red', deg: 90 }}>Doe Agora!</Button>
            </Group>
            
  
          </Group>
        </header>
  
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h="calc(100vh - 80px" mx="-md">
            <Divider my="sm" />
  
            <UnstyledButton w="100%" className={HeaderUI.link_purple} onClick={toggleLinks}>
            <Center inline >
              <Box component="span" mr={5} className={HeaderUI.link_purple}>
                AICAS
              </Box>
              <IconChevronDown size={16} color={theme.colors.blue[6]} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{Aicaslinks}</Collapse>
            <a href="#" className={HeaderUI.link_blue}>
              Programas
            </a>
            <a href="#" className={HeaderUI.link_green}>
              Acontece
            </a>
            <UnstyledButton w="100%" className={HeaderUI.link_purple} onClick={toggleLinks}>
            <Center inline >
              <Box component="span" mr={5} className={HeaderUI.link_yellow}>
                Transparência
              </Box>
              <IconChevronDown size={16} color={theme.colors.blue[6]} />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{Aicaslinks}</Collapse>
            <a href="#" className={HeaderUI.link_red}>
              Apoie
            </a>
            <Button onClick={() => toggleColorScheme()} variant="transparent">Tema</Button>
            
            <Divider my="sm" /> 
        </ScrollArea>
      </Drawer>
    </Box>
    </div>
  )
}
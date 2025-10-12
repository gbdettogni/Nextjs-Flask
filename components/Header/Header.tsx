'use client'
import { useDisclosure } from '@mantine/hooks';

import {useState, useEffect} from 'react';

import {IconChevronDown} from '@tabler/icons-react';

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
  NavLink,
  SimpleGrid,
  UnstyledButton,
  useMantineTheme,
  Text,
} from '@mantine/core';

import Link from 'next/link';

import HeaderUI from './HeaderMantine.module.css';
import {Logo} from '@/components/Logo/Logo'

const AICASlinks = [
  {
    title: 'Quem somos',
    link: '/about',
    class_colour: HeaderUI.link_purple,
  },
  {
    title: 'Nossa história',
    link: '/history',
    class_colour: HeaderUI.link_purple,
  },
];


export function HeaderAICAS() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const { toggleColorScheme } = useMantineColorScheme();

  const theme = useMantineTheme();
  const links = AICASlinks.map((item) => (
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
  return (
    <div className={`${HeaderUI.fixedheader} ${isVisible ? HeaderUI.visible : HeaderUI.hidden}`}>
    <Box>
        <header className={HeaderUI.header}>
          <Group justify="space-between" h="100%">
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
                  {links}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
              <a href="#" className={HeaderUI.link_blue}>
                Programas
              </a>
              <a href="#" className={HeaderUI.link_green}>
                Acontece
              </a>
              <a href="#" className={HeaderUI.link_yellow}>
                Transparência
              </a>
              <a href="#" className={HeaderUI.link_red}>
                Apoie
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
          <Collapse in={linksOpened}>{links}</Collapse>
            <a href="#" className={HeaderUI.link_blue}>
              Programas
            </a>
            <a href="#" className={HeaderUI.link_green}>
              Acontece
            </a>
            <a href="#" className={HeaderUI.link_yellow}>
              Transparência
            </a>
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
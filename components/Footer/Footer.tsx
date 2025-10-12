import {
  Group,
  Container, 
  ActionIcon 
} from '@mantine/core';

import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import footerUI from './FooterMantine.module.css';
import {Logo} from '@/components/Logo/Logo'


export function FooterAICAS(){
    return(
    <div className={footerUI.footer}>
      <Container className={footerUI.inner}>
        <Logo />
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
    )
}
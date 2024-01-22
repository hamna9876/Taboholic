import React from 'react';
import TabList from '../TabsList/TabList';
import './extendedPage.css';
import { Box, Image, rem, Flex, Portal, Container, Title } from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';

export default function ExtendedPage() {
  const pinned = useHeadroom({ fixedAt: 10 });

  chrome.storage.local.set({ isExtendedPage: false }, () => {

  });

  return (
    <Container className="ExtendedPage" bg="var(--mantine-color-white)">
    <Container size="responsive" bg="var(--mantine-color-white)" h={70}>
    </Container>

      <Portal>
        <Box
          style={{
            position: 'fixed',
            top: 3,
            left: 0,
            right: 0,
            padding: 'var(--mantine-spacing-xs)',
            height: rem(80),
            zIndex: 1000000,
            transform: `translate3d(0, ${pinned ? 0 : rem(-110)}, 0)`,
            transition: 'transform 400ms ease',
            backgroundColor: 'var(--mantine-color-body)',
          }}
        >
          <Flex justify="flex-start" >
            <Image
              src="LogoT.png"
              h={60}
              w="auto"
            />
            <Container pl={0.2}> <Title className='ExtensionName'>Taboholic</Title> </Container>
          </Flex>
        </Box>
      </Portal>
      
      <TabList />
    </Container>
  )
}
//root.render(<ExtendedPage />);
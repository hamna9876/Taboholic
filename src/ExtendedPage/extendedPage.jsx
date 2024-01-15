import React from 'react';
import TabList from '../TabsList/TabList';
import './extendedPage.css';
import { Box, Image, rem, Portal, Flex } from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';
import { Container } from 'postcss';


export default function ExtendedPage() {
  const pinned = useHeadroom({ fixedAt: 10 });

  chrome.storage.local.set({ isExtendedPage: false }, () => {

  });

  return (
    <div className="ExtendedPage">
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
            <h1> Taboholic </h1>


          </Flex>
        </Box>
      </Portal>

      <TabList />

    </div>
  )
}
//root.render(<ExtendedPage />);
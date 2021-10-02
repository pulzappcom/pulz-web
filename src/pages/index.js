import React from 'react';
import { useIntl } from 'react-intl';

import Box from '../components/atoms/Box/Box';
import Container from '../components/atoms/Box/Container';
import Icon from '../components/atoms/Icon/Icon';
import Image from '../components/atoms/Image/Image';
import Link from '../components/atoms/Link/Link';
import Text from '../components/atoms/Text/Text';

function HomePage() {
  const { formatMessage } = useIntl();
  return (
    <Box position="relative" zIndex="default" overflow="hidden" py={[4]} width="100vw" height="100vh" background="radial-gradient(circle, rgba(237,138,14,1) 35%, rgba(233,199,14,1) 100%)">
      <Container sx={{
        padding: [4], borderRadius: '16px', opacity: 0.90, bg: '#272727',
      }}
      >
        <Box display="flex" flexDirection={{ _: 'column', tablet: 'row' }} alignItems="center" opacity="1">
          <Box width={{ _: '100%', tablet: '50%' }} color="white">
            <Text as="label">{`- ${formatMessage({ id: 'Brand:ComingSoon' })}`}</Text>
            <Box as="h1" sx={{ textTransform: 'uppercase' }}>{formatMessage({ id: 'Brand:Title' })}</Box>
            <Text as="p">{formatMessage({ id: 'Brand:Description' })}</Text>
            <Box display="flex" as="ul" p="0">
              <Box as="li" mr={[3]} style={{ listStyle: 'none' }}>
                <Box as="a" href="https://www.facebook.com/pulzappcom" target="_blank" position="relative" display="block" py={[4]} borderRadius="4px" textAlign="center">
                  <Icon name="Facebook" width="32px" height="32px" viewBox="0 0 172 172" />
                </Box>
              </Box>
              <Box as="li" mr={[3]} style={{ listStyle: 'none' }}>
                <Box as="a" href="https://www.instagram.com/pulzappcom" target="_blank" position="relative" display="block" py={[4]} borderRadius="4px" textAlign="center">
                  <Icon name="Instagram" width="32px" height="32px" viewBox="0 0 172 172" />
                </Box>
              </Box>
              <Box as="li" style={{ listStyle: 'none' }}>
                <Box as="a" href="https://www.github.com/pulzappcom" target="_blank" position="relative" display="block" py={[4]} borderRadius="4px" textAlign="center">
                  <Icon name="GitHub" width="32px" height="32px" viewBox="0 0 172 172" />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box width={{ _: '100%', tablet: '50%' }} px={[3]}>
            <Box width="50%" mx="auto">
              <Image objectFit="contain" src="logo.png" />
            </Box>
          </Box>
        </Box>
      </Container>
      <Box position="absolute" zIndex="2" bottom="0" left="50%" sx={{ transform: 'translate(-50%,-50%)' }}>
        <Link href="https://www.cuervonegro.mx">Cuervo Negro</Link>
      </Box>
    </Box>
  );
}

export default HomePage;

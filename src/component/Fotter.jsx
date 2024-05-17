import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react';

import { ReactNode } from 'react';
import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
// import logoImg from "../assets/l.png"



const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

const Footer = () => {
    return (
        <Box
            bg={useColorModeValue('black', 'black')}
            color={useColorModeValue('white', 'white')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
                    spacing={8}>
                    <Stack spacing={6}>
                        <Box>
                            {/* <Logo color={useColorModeValue('gray.700', 'white')} /> */}
                        </Box>
                        <Text fontSize={'14px'}>
                            Created By Suhail Khan | © 2024. All Rights Reserved
                        </Text>
                        <Stack direction={'row'} spacing={6}>
                            <SocialButton label={'Twitter'} href={''}>
                                <FaTwitter className='icone_class' />
                            </SocialButton>
                            <SocialButton label={'YouTube'} href={''}>
                                <FaYoutube className='icone_class' />
                            </SocialButton>
                            <SocialButton label={'Instagram'} href={''} >
                                <FaGithub className='icone_class' />
                            </SocialButton>
                            <SocialButton label={'Instagram'} href={''} >
                                <FaInstagram className='icone_class' />
                            </SocialButton>
                        </Stack>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Company</ListHeader>
                        <Link id="link"  >About us</Link>
                        <Link id="link"  >Blog</Link>
                        <Link id="link"  >Contact us</Link>
                        <Link id="link"  >Pricing</Link>
                        <Link id="link"  >Testimonials</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader style={{color:"white"}}>Support</ListHeader>
                        <Link  id="link"  href={'#'}>Help Center</Link>
                        <Link id="link"  >Terms of Service</Link>
                        <Link id="link"  >Legal</Link>
                        <Link id="link"  >Privacy Policy</Link>
                        <Link id="link"  >Satus</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Stay up to date</ListHeader>
                        <Stack direction={'row'}>
                            <Input
                                placeholder={'Your email address'}
                                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                                border={"1px solid cyan"}
                                _focus={{
                                    bg: 'whiteAlpha.300',
                                }}
                            />
                            <IconButton
                                bg={useColorModeValue('green.400', 'green.800')}
                                color={useColorModeValue('white', 'gray.800')}
                                _hover={{
                                    bg: 'green.600',
                                }}
                                aria-label="Subscribe"
                                icon={<BiMailSend />}
                            />
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
}
export default Footer
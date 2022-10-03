import { FC, useState } from 'react';
import styles from './index.module.css';
import Links from './Links';
import { Button, Box, Flex , IconButton,useColorMode} from '@chakra-ui/react';
import { BiLogIn,BiMoon,BiSun } from 'react-icons/bi';

import { count as emojiCount, images as emojis } from 'assets/angry_emojis';
import { useSelector } from 'store/hooks';
import { Link } from 'react-router-dom';
const Header: FC = () => {
  
  const { colorMode, toggleColorMode } = useColorMode()
  const [currentEmoji, setCurrentEmoji] = useState<number>(0);
  const switchEmoji = () => {
    setCurrentEmoji(emojiCount - 1 > currentEmoji ? currentEmoji + 1 : 0);
  };
  const isLogged = useSelector((state) => state.profile.isLogged);
  return (
    <Flex
      as="header"
      justify="space-between"
      align="center"
      borderBottom="1px solid rgba(180, 180, 180, 0)"
      width="100%"
      p={6}
    >
      <Flex align="center">
        <Link to="/">
          <div className={styles.logo}>
            <img src={emojis[currentEmoji]} onMouseLeave={switchEmoji} />
          </div>
        </Link>
        <Links />
      </Flex>
      <Flex>
        <IconButton mr={3} onClick={toggleColorMode} aria-label='Switch mode' fontSize="20px" icon={colorMode === 'light' ? <BiMoon/> : <BiSun/>}/>
      {!isLogged ? (
        <Link to="/auth/login">
          <Button display={["none","block"]} rightIcon={<BiLogIn  />} variant="brand">
          Sign in
          </Button>
          <IconButton display={["flex","none"]} aria-label='Log in' fontSize="20px" variant="brand" icon={<BiLogIn />}/>
        </Link>
      ) : null}
      </Flex>
    </Flex>
  );
};

export default Header;

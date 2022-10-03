import { FC } from 'react';
import links from './links';
import styles from './index.module.css';
import {Box,Link,List,ListItem} from '@chakra-ui/react'
import { Link as NavLink,useLocation} from 'react-router-dom';
const Links: FC = () => {
  
  const {pathname} = useLocation();
  return (
    <List display={["none","flex"]} ml={2}>
      {links.map(({ value, path }) => (
        <ListItem ml={4}>{/**ПОМЕНЯТЬ ЛОГИКУ */}
          <Link as={NavLink} to={path} variant={pathname === path || pathname.slice(1).includes(path.slice(1) || "notincludes") ? "active" : undefined}>
           {value}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};
export default Links;

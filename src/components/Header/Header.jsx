import { HeadWrapper, Item, List, Nav, RouteLink } from './Header.styled';

const Header = () => {
  return (
    <HeadWrapper>
      <Nav>
        <List>
          <Item>
            <RouteLink to="/">Home</RouteLink>
          </Item>
          <Item>
            <RouteLink to="/movies">Movies</RouteLink>
          </Item>
        </List>
      </Nav>
    </HeadWrapper>
  );
};

export default Header;

import { HeadWrapper, Item, List, Nav, RouteLink } from './Header.styled';

const Header = () => {
  return (
    <HeadWrapper>
      <div className="container">
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
      </div>
    </HeadWrapper>
  );
};

export default Header;

import { TbAlertOctagonFilled } from 'react-icons/tb';
import { Box, Text, Wrapper } from './NotFound.styled';

const NotFound = () => {
  return (
    <section className="section">
      <Box className="container">
        <Wrapper>
          <TbAlertOctagonFilled size={40} color="#e42727" />
          <Text>Page not found</Text>
        </Wrapper>
      </Box>
    </section>
  );
};

export default NotFound;

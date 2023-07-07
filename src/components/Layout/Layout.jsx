import { Container } from 'components/Container/Container';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default Layout;

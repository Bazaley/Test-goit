import { Container } from 'components/Container/Container';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <main>
        <Container>
          <Suspense fallback={<h1>Please wait</h1>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default Layout;

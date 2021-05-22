import Header from '../../Header/Header'
import Auxilary from '../Auxilary/Auxilary'
const Layout = (props) => {
  return (
    <Auxilary>
      <Header />
      <main>{props.children}</main>
    </Auxilary>
  );
};

export default Layout;

import PropTypes from "prop-types";
import NavBar from './NavBar.tsx'
import Header from './Header'
import Footer from './Footer'


const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <NavBar />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

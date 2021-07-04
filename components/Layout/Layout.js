import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
const Layout = ({ children }) => {
    return (
        <div>
            <Nav></Nav>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default Layout;

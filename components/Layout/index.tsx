import Footer from "@components/Footer";
import Main from "@components/Main";
import Navigation from "@components/Navigation";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-primaryBackground">
      <Navigation />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;

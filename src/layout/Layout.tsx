import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  console.log(children, "children");

  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default Layout;

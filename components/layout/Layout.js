import MainHeader from "./mainHeader";

function Layout(props) {
  return (
    <>
      <MainHeader />
      {props.children}
    </>
  );
}

export default Layout;

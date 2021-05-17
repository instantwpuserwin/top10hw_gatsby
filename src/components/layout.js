import React  from "react"
import PropTypes from 'prop-types';
import MyNavBar from './MyNavBar';
import Footer from './Footer' 


const Layout = ({ isHomePage, children }) => {


  //const [active, setActive] = useState(0);
  // const handleClick = e => {
  //   const index = parseInt(e.target.id, 0);
  //   if (index !== active) {
  //     setActive(index);
  //   }
  // };
 

   
  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
    <div >
    <MyNavBar/>

      <div>     
        <main>{children}</main>
    
      </div>
    </div>
 
       

     <Footer />
    </div>
  )
}

Layout.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
};


export default Layout

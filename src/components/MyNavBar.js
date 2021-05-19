import React, { useState } from "react";

import Modal from "react-modal";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "gatsby";

import "./MyNavBar.css";
const menuItems = [
  {
    label: "Start Here",
    path: "/best-wordpress-hosting-providers-at-affordable-price/",
  },
  {
    label: "Siteground Review",
    path: "/siteground-review",
  },
  {
    label: "Guest Blogging",
    path: "/write-for-us-guest-blogging-opportunities",
  },
  {
    label: "Contact Us",
    path: "/contact",
  },
];

//let MenuItems;
var filterstrings = ["blog"];
var regex = new RegExp(filterstrings.join("|"), "i");

const Sidebar = (props) => {
  //const MenuItems=props.menuItems.nodes;
  //console.log("Sidebar::menuItems=", menuItems)
  return (
    <div style={{ display: props.open ? "block" : "none" }}>
      <div className="menuitem">
        <Link to={"/"} onClick={props.closeModal}>
          {"Home"}
        </Link>
      </div>

      {menuItems &&
        menuItems.map((menuItem, index) => (
          <div key={index} className="menuitem">
            <Link key={index} to={menuItem.path} onClick={props.closeModal}>
              {menuItem.label}
              {/* {regex.test(menuItem.label) ? "" : " Chairs"} */}
            </Link>
          </div>
        ))}
    </div>
  );
};

function MyNavBar() {
  // const {
  //   allWpMenu: {
  //     nodes: [{ menuItems }],
  //   },
  // } = useStaticQuery(graphql`
  //   query layoutQueryAndLayoutQuery {
  //     allWpMenu {
  //       nodes {
  //         menuItems {
  //           nodes {
  //             id
  //             label
  //             path
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  //let circleClasses = "inline-block p-7 rounded-full w-20 mx-auto";
  //let iconStyles = { color: "white", fontSize: "1.5em" };
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  // useEffect(() => {
  //   MenuItems = menuItems.nodes
  // }, [])

  return (
    <>
      <nav className="navbar">
        <div className="burgermenu">
          <AiOutlineMenu size={35} onClick={openModal} />
          <Sidebar
            open={showModal}
            menuItems={menuItems}
            closeModal={closeModal}
          />
        </div>

        <div className="nav-item logo">
          <Link to="/">HOSTING REDEFINED</Link>
        </div>

        <div className="nav-item">
          <Link className="btncta-right" 
            to={"/starthere"}
          >
            {"Start Here"}
          </Link>
        </div>
      </nav>

      <Modal
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,

            backgroundColor: "rgb(0, 0, 0, 0.4) ",
          },
          content: {
            position: "absolute",
            top: "0px",
            left: "0px",
            right: "40px",
            bottom: "40px",
            border: "0px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "0px",
            outline: "none",
            padding: "20px",
          },
        }}
        className="modalwindow"
        isOpen={showModal}
        onRequestClose={closeModal}
      >
        <button className="close" onClick={closeModal}>
          X
        </button>
        <Sidebar open={showModal} />
      </Modal>
    </>
  );
}

export default MyNavBar;

import React, { useState, useEffect, useRef } from "react";
import "./GooeyNav.css";
import { Sling as Hamburger } from "hamburger-react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { motion } from "framer-motion";

const GooeyNav = ({ items }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [cursorPos, setCursorPos] = useState({ left: 0, width: 0, opacity: 0 });
  const refs = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const drawerList = (
    <Box
      sx={{
        width: 250,
        paddingTop: 4,
        position: "relative",
        height: "100%",
      }}
      role="presentation"
      onClick={() => setMenuOpen(false)}
      onKeyDown={() => setMenuOpen(false)}
    >
      <div style={{ position: "absolute", top: 10, right: 10, zIndex: 1200 }}>
        <Hamburger toggled={menuOpen} toggle={setMenuOpen} color="#fff" size={20} />
      </div>

      <List sx={{ marginTop: 0 }}>
        {items.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component="a" href={item.href}>
              <ListItemText primary={item.label} sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="gooey-nav-container">
      <h1 className="text-2xl font-bold text-white">Portfolio</h1>

      {isMobile && (
        <>
          {!menuOpen && (
            <div style={{ position: "relative", zIndex: 1300 }}>
              <Hamburger toggled={menuOpen} toggle={setMenuOpen} color="#fff" />
            </div>
          )}

          <Drawer
            anchor="right"
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
            ModalProps={{ keepMounted: true }}
            PaperProps={{
              sx: {
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                color: "white",
                boxShadow: "none",
              },
            }}
          >
            {drawerList}
          </Drawer>
        </>
      )}

      {!isMobile && (
        <nav
          className="hidden md:flex"
          aria-label="Primary Navigation"
          style={{
            width: "100%",
            justifyContent: "end",
            position: "relative",
            marginRight: "0",
          }}
        >
          <ul
            onMouseLeave={() => setCursorPos((pv) => ({ ...pv, opacity: 0 }))}
            style={{
              display: "flex",
              gap: "2em",
              listStyle: "none",
              margin: 0,
              padding: 0,
              position: "relative",
              maxWidth: "800px",
              width: "100%",
              justifyContent: "end",
            }}
          >
            {items.map((item, index) => {
              if (!refs.current[index]) refs.current[index] = React.createRef();
              return (
                <li
                  key={item.label}
                  ref={refs.current[index]}
                  onMouseEnter={() => {
                    const ref = refs.current[index];
                    if (!ref.current) return;
                    const { width } = ref.current.getBoundingClientRect();
                    setCursorPos({
                      left: ref.current.offsetLeft,
                      width,
                      opacity: 1,
                    });
                  }}
                  style={{
                    position: "relative",
                    zIndex: 10,
                    padding: "0.6em 1em",
                    borderRadius: "100vw",
                    cursor: "pointer",
                    color: "white",
                    textDecoration: "none",
                    userSelect: "none",
                  }}
                >
                  <a href={item.href} style={{ color: "inherit", textDecoration: "none" }}>
                    {item.label}
                  </a>
                </li>
              );
            })}
            <motion.li
              animate={cursorPos}
              style={{
                position: "absolute",
                height: "2.5em",
                backgroundColor: "rgba(255,255,255,0.2)",
                borderRadius: "100vw",
                zIndex: 0,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          </ul>
        </nav>
      )}
    </div>
  );
};

export default GooeyNav;

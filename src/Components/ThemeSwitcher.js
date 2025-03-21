// import React from "react";
// import { Button } from "react-bootstrap";
// import { useTheme } from "./ThemeProvider";

// const ThemeSwitcher = () => {
//   const { theme, toggleTheme } = useTheme();
//   return (
//     <Button variant={theme === "light" ? "dark" : "light"} onClick={toggleTheme}>
//       {theme === "light" ? "Dark Mode" : "Light Mode"}
//     </Button>
//   );
// };

// export default ThemeSwitcher;




import React from "react";
import { Button } from "react-bootstrap";
import { useTheme } from "./ThemeProvider";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button variant={theme === "light" ? "dark" : theme === "dark" ? "primary" : "light"} onClick={toggleTheme}>
      {theme === "light" ? "Dark Mode" : theme === "dark" ? "Dark Blue Mode" : "Light Mode"}
    </Button>
  );
};

export default ThemeSwitcher;

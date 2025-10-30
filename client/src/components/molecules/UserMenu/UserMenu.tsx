import { Box } from "@mui/material";
import { Link } from "react-router";
import { routes } from "../../../routes/routes";

export const UserMenu: React.FC = () => {
  return (
    <>
      <Box component={Link} to={routes.login}>
        Login
      </Box>
      <Box component={Link} to={routes.register}>
        Register
      </Box>
      <Box component={Link} to={routes.profile}>
        Profile
      </Box>
      <Box onClick={() => console.log("Create a logout function")}>Logout</Box>
    </>
  );
};

import { Tabs, Tab, Box, AppBar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeTab } from "../ducks/app";
import { POKEDEX, FAVORIS } from '../constants';
import { selectTab } from '../selectors/app';

const Navbar = () => {
  const dispatch = useDispatch();
  const tab = useSelector(selectTab);
  
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: 0, padding: 0 }}
    >
      <Box sx={{ display: "flex", justifyContent: 'center', alignItems: "center", userSelect: 'none' }}>
        <Tabs
          value={tab}
          onChange={(_, tab) => dispatch(changeTab(tab))}
          textColor="primary"
          indicatorColor="secondary"
        >
          <Tab
            value={POKEDEX}
            label={POKEDEX}
          />
          <Tab
            value={FAVORIS}
            label={FAVORIS}
          />
        </Tabs>
      </Box>
    </AppBar>
  );
};

export default Navbar;
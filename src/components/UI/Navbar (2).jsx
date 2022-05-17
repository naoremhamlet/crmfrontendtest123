import { Search, Send, MonetizationOn,Menu } from "@material-ui/icons";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AccessAlarm, Email, Groups, MenuBook } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/auth-context";
import { Link, useHistory } from "react-router-dom";
import "./Navbar (1).css";
import Dropdown from "./DropdownMenu";
import Userdropdown from "../Userdropdown";
import AlertBox from "./AlertBox";
import NavbarSearchBox from "./NavbarSearchBox";
import NavbarEngageBox from "./NavbarEngageBox";
import MenuMobile from "./NavbarMobile/MenuMobile";


const Navbar = () => {
  const ctx = useContext(AuthContext);
  const [dropdown, setDropdown] = useState(false);
  const [userDropdown,setUserDropdown]=useState(false);
  const [showAlerts,setShowAlerts]=useState(false);
  const [engageDropdown,setEngageDropdown]=useState(false);
  const [menuMode,setMenuMode]=useState(false);

  const navigateAway = ()=>{
    setMenuMode(false);
  }

  const onMouseEnter = () => {
    if (window.innerWidth < 100) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 100) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onUserMouseEnter = () => {
    if (window.innerWidth < 100) {
      setUserDropdown(false);
    } else {
      setUserDropdown(true);
    }
  };

  const onUserMouseLeave = () => {
    if (window.innerWidth < 100) {
      setUserDropdown(false);
    } else {
      setUserDropdown(false);
    }
  };

  const onEngageMouseLeave = ()=>{
    if (window.innerWidth < 100) {
      setEngageDropdown(false);
    } else {
      setEngageDropdown(false);
    }
  }

  const onEngageMouseEnter = () => {
    if (window.innerWidth < 100) {
      setEngageDropdown(true);
    } else {
      setEngageDropdown(true);
    }
  };

  const history = useHistory();
  return (<>
    <div className="ContainerNav">
      <div className="Wrapper">
        <div className="Left">
          <div className="Icon">
            <HomeIcon />
          </div>
          <div className="MenuItem" >
            <Link to="/" style={{textDecoration:'none',color:'black'}} className='MenuItem'>Home</Link>
          </div>
          <div className="Icon">
            <SearchIcon />
          </div>
          <div
            className="MenuItem"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            Search  {dropdown && <NavbarSearchBox />}
          </div>
          <div className="Icon">
            <Send />
          </div>
          <div className="MenuItem"  onMouseEnter={onEngageMouseEnter}
            onMouseLeave={onEngageMouseLeave}>
            Engage {engageDropdown && <NavbarEngageBox />}
          </div>
        </div>
        <div>
        <img src="images/mainlogo.png" alt="logo" width="170" onClick={()=>history.push('/')} />
        </div>
        <div className="Right">
        <div className="Icon">
            <AccessAlarm />
          </div>
          <div className="MenuItem" style={{margin:'5px'}}>
            <p style={{margin:'auto'}}onClick={()=>setShowAlerts(prev=>!prev)}>Alerts</p>
            {showAlerts && <AlertBox isActive={showAlerts} setIsActive={setShowAlerts}/>}
          </div>
          <div
            className="credits"
            onClick={() => {
              history.push("/subscribe");
            }}
          >
            <MonetizationOn />
            <p>50</p>
          </div>
          <div className="Icon">
            <Email />
          </div>
          <div className="MenuItem"><Link style={{textDecoration:'none',color:'black'}} to="/proposal">Proposal</Link></div>
          {/* <div className="Icon">
            <LeaderboardIcon />
          </div>
          <div className="MenuItem">
            <Link to="/leads">Leads</Link>
          </div> */}

          {/* <div className="Icon">
            <Groups />
          </div>
          <div className="MenuItem">
            <Link to="/teams">Teams</Link>
          </div> */}
          
      
          
          {/* <div className="SearchContainer">
            <input type="text" placeholder="Search..." />
            <Search style={{ color: "gray", fontSize: 14 }} />
          </div> */}
          <div className="Icon2" onMouseEnter={onUserMouseEnter}
            onMouseLeave={onUserMouseLeave}>
            <AccountCircleIcon className="mobileIcon" onClick={()=>userDropdown? onUserMouseLeave(): onUserMouseEnter()}/>
            {userDropdown && <Userdropdown />}
          </div>
          <div className="Icon2" onClick={()=>menuMode? setMenuMode(false): setMenuMode(true)}>
            <Menu className="mobileIcon" style={{display:"none"}}/>
          </div>
        </div>
      </div>
    </div>
    {menuMode && <MenuMobile navigateAway={navigateAway} />}
    </>
  );
};

export default Navbar;

import ProspectingPage from "./pages/ProspectingPage/ProspectingPage";
import SubscriptionPage from "./pages/SubscriptionPage/SubscriptionPage";
// import ProfilePage from "./pages/ProfilePage/ProfilePage";

import NavBar from "./components/UI/Navbar (2)";
import Footer from "./components/UI/Footer";
import MyCompanies from "./pages/MyCompanies/MyCompanies";
import ChatBox from "./components/ChatBox/ChatBox";
import FAQPage from "./pages/FAQPage/FAQPage";
// import Modal from "./components/UI/Modal";
// import SendProposal from "./components/SendProposal";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import SignUp from "./pages/LoginPage/Signup";
// import Email from "./components/QuickActions/Email";
// import Call from "./components/QuickActions/Call";
import LeadPage from "./pages/LeadManagement/LeadPage";
// import ReminderDialog from "./pages/LeadManagement/ReminderDialog";
// import Remarks from "./pages/LeadManagement/Remarks";
import Terms from "./pages/ExtraPages/Terms";
import Privacy from "./pages/ExtraPages/Privacy";
import Whyus from "./pages/ExtraPages/Whyus";
import Dashboard from "./pages/Dashboard/Dashboard";
// import Landing from "./pages/LandingPage/Landing";
// import Navbar2 from "./pages/LandingPage/Navbar2";

import AuthContextProvider from "./context/auth-context";
import { AuthContext } from "./context/auth-context";
import { useContext } from "react";
// import Teams from "./pages/LeadManagement/Teams";
import LeadManagement from "./pages/LeadManagement/LeadManagement";
import Settings from "./pages/Settings/Settings";
// import CreateTeam from './pages/Settings/CreateTeam.jsx';
// import Home from './pages/LandingPage/LandingPage2/App';
import Navbar2 from './pages/LandingPage/LandingPage2/components/Navbar/Navbar';
import Footer2 from './pages/LandingPage/LandingPage2/components/Footer/Footer';

import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Features from "./pages/LandingPage/LandingPage3/features/Features";
import Services from "./pages/LandingPage/LandingPage3/services/Services";
import Process from "./pages/LandingPage/LandingPage3/process/Process";
import Testimonials from "./pages/LandingPage/LandingPage3/testimonials/Testimonials";
import Blogs from "./pages/LandingPage/LandingPage3/blog/Blogs";
import Partners from "./pages/LandingPage/LandingPage3/partner/Partner";
import Home3 from "./pages/LandingPage/LandingPage3/home/Home";
import Navbar3 from "./pages/LandingPage/LandingPage3/home/Navbar";
import Footer3 from "./pages/LandingPage/LandingPage3/footer/Footer";
import Hamburger from "./pages/LandingPage/LandingPage3/home/Hamburger";
import "bootstrap/dist/css/bootstrap.min.css";
import UpdateUserData from "./pages/Settings/UpdateUserData";


function App() {
  const ctx = useContext(AuthContext);

  let routes;
  if (!ctx.isLoggedIn) {
    routes = <>
      <Switch>
      <Route path="/" exact>
        <Home3 />
      </Route>
      <Route path="/process">
        <Process />
      </Route>
      <Route path="/login">
          <Navbar3 />  
          <Login />
        </Route>
        <Route path="/signup">
          <Navbar3 /> 
          <SignUp />
        </Route>
        <Route path="/faq">
          <Navbar3 /> 
          <FAQPage />
          <ChatBox />
        </Route>
        <Route path="/terms">
          <Navbar3 /> 
          <Terms />
        </Route>
        <Route path="/whyus">
          <Navbar3 /> 
          <Whyus />
        </Route>
        <Route path="/subscribe">
          <Navbar3 /> 
          <SubscriptionPage />   
        </Route>
        

        
        <Route path="/privacy">
          <NavBar />
          <Privacy />
        </Route>
        <Route path="*">
          <Redirect to="/" />
       </Route>
      </Switch>
      <Footer />
    </>
    // routes = <>
    // <Router>
    //     <Routes>
    //       <Route path="/" element={<Home3 />} />
    //       <Route path="/process" element={<Process />} />
    //       <Route path="/features" element={<Features />} />
    //       <Route path="/services" element={<Services />} />
    //       {/* <Route path="/testimonials" element={<Testimonials />} /> */}
    //       <Route path="/blogs" element={<Blogs />} />
    //       <Route path="/partners" element={<Partners />} />
    //       <Route path="/footer" element={<Footer3 />} />
    //       <Route path="/hamburger" element={<Hamburger />} />
    //     </Routes>
    //   </Router>
    // </>
    // routes = <>
    //   <Switch>
    //     <Route path="/" exact>
    //       <Landing />
    //       {/* <Home /> */}
    //     </Route>
    //     <Route path="/login">
    //       <Navbar2 /> 
    //       <Login />
    //     </Route>
    //     <Route path="/signup">
    //       <Navbar2 />
    //       <SignUp />
    //     </Route>
    //     <Route path="/faq">
    //       <Navbar2 />
    //       <FAQPage />
    //       <ChatBox />
    //       <Footer2 />
    //     </Route>
    //     <Route path="/terms">
    //       <Navbar2 />
    //       <Terms />
    //       <Footer2 />
    //     </Route>
    //     <Route path="/whyus">
    //       <Navbar2 />
    //       <Whyus />
    //       <Footer2 />
    //     </Route>
    //     <Route path="/subscribe">
    //       <Navbar2/>
    //       <SubscriptionPage />
          
    //     </Route>
    //     <Route path="/privacy">
    //       <Navbar3 />
    //       <Privacy />
    //       <Footer2 />
    //     </Route>
    //     <Route path="*">
    //       <Redirect to="/" />
    //     </Route>

    //   </Switch>
    //   <Footer />
    //   </>
  } else {
    routes = <>
      <Switch>
        <Route path="/" exact>
          <NavBar />
          <center><h1 style={{fontFamily:'calibri',marginTop:'2px'}}>Welcome to Data Alley</h1></center>
          <Dashboard />
        </Route>
        <Route path="/mycompanies" exact>
          <NavBar />
          <MyCompanies />
        </Route>
        <Route path="/updateUserData" exact>
          <NavBar />
          <UpdateUserData/>
          <ChatBox style={{zIndex:'20'}} />
        </Route>
        <Route path="/prospecting" exact>
          <NavBar />
          <ProspectingPage />
          {/* <ChatBox style={{zIndex:'20'}} /> */}
        </Route>
        <Route path="/subscribe" exact>
          <NavBar />
          <SubscriptionPage />
        </Route>
        <Route path="/proposal">
          <NavBar />
          {/* <SendProposal /> */}
          {/* <ChatBox style={{zIndex:'20'}} /> */}
        </Route>
        <Route path="/leads">
          <NavBar />
          <LeadPage />
        </Route>
        <Route path="/teams" exact>
          <NavBar />
          <LeadManagement />
        </Route>
        <Route path="/settings">
          <NavBar />
          <Settings />
        </Route>
        <Route path="/faq">
          <NavBar />
          <FAQPage />
          {/* <ChatBox style={{zIndex:'20'}} /> */}
        </Route>
        <Route path="/terms">
          <NavBar />
          <Terms />
        </Route>
        <Route path="/whyus">
          <NavBar />
          <Whyus />
        </Route>
        <Route path="/privacy">
          <NavBar />
          <Privacy />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <ChatBox style={{zIndex:'20'}} />
      <Footer />
      </>
  }

  return (
    <>
      {routes}
    </>
  );
}

export default App;

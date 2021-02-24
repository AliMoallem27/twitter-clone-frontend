import "./App.css";
import Main from "./components/layouts/Main";
import Navigation from "./components/layouts/Navigation";
import UserProvider from "./providers/UserProvider";
import AppProvider from "./providers/AppProvider";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "./components/layouts/Container";

function App() {
  return (
    <UserProvider>
      <AppProvider>
        <Router basename="/twitter-clone-frontend">
          <Container>
            {/* this app has only two main layout: navigation and main. and sidebar(right) is in main */}
            <Navigation />
            <Main />
          </Container>
        </Router>
      </AppProvider>
    </UserProvider>
  );
}

export default App;

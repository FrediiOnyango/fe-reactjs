import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import "./App.css";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <div>
        <WelcomeMessage />
        <Header />
        <MainContent />
        <UserProfile
          name="Fred"
          age={25}
          bio="Reading Clasics, Philosophical & African Books"
        />
        <Footer />
      </div>
    </>
  );
}

export default App;

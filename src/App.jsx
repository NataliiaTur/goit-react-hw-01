import Profile from "./components/profile/profile";
import "./App.css";

const App = () => {
  return (
    <div>
      <Profile
        name="Petra Marica"
        tag="@pmarica"
        location="Salvador, Brasil"
        image="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
        isOnline
      />
    </div>
  );
};

export default App;


import './App.css';
import Fullname from './components/profile/Fullname';
import Adress from './components/profile/Adress';
import ProfilePhoto from './components/profile/Profilephoto';
function App() {
  return (
    <div className="App">
      <Fullname/>
      <Adress/>
      <ProfilePhoto/>
    </div>
  );
}

export default App;

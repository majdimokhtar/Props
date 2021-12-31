import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';

function App() {
const handeleAlert =(name) =>{
  alert(`Hi, Iam ${name}`)
}

  return (
    <div className="App">
      <Profile
      name='Majdi'
      fullName='My name is Majdi Mokhtar'
      bio='Fullstack checkpoint'
      profession='Aeronautical engineer'
      handeleAlert={handeleAlert}
      />
    </div>
  );
}

export default App;


import './App.css';

function App() {
  return (
    <div className="App">
      <h3>What do you want to do?</h3>
      <div className = "boxes">
      <input type="checkbox" id ="web"/>Website (500€)
      <input type="checkbox" id ="seo"/>SEO Consulting (300€)
      <input type="checkbox" id ="adds"/>Google Adds Campaign (200€)
      <p>Total : </p>
      </div>
     
    </div>
  );
}

export default App;

import './App.css';
import Auth0ProviderWithHistory from './auth0Provider';

function App() {
  return (
    <Auth0ProviderWithHistory>
      <div className="App">
        <h1>Hello World!</h1>
      </div>
    </Auth0ProviderWithHistory>
  );
}

export default App;

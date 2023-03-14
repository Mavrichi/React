import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';
const App = () => {

    return (<div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <div className="container w-100 d-flex justify-content-center align-items-center">
                    <p className="fw-bold">Test</p>
                </div>
            </header>
            <Accordion></Accordion>
        </div>
    );
}

export default App;

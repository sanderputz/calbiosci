import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="container-fluid hero-img">
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Data Driven Healthcare</h1>
              <p className="lead">Machine learning algorithms to solve our greatest health challenges.</p>
            </div>
          </div>
    </div>
    <div className="container-fluid">
        <div className="container">
            <div className="row">
              <div className="col-sm infopanel">
                <h3>Using technology to solve humankinds oldest problems</h3>
                <p>Machine learning algorithms can learn about our most common health situations and make recommendations from centuries of data.</p>
              </div>
              <div className="col-sm infopanel">
                <h3>Learning new treatment methods</h3>
                <p>By looking outside the box, we can discover new pharmaceutical treatment approaches that guarantee patient success.</p>
              </div>
              <div className="col-sm infopanel">
                <h3>Putting patient success first</h3>
                <p>Using machine learning to create computer simulations of the human body, we can predict when certain treatments might help and when others might make symptoms worse. Say goodbye to those unpleasant side effects.</p>
              </div>
            </div>
          </div>
    </div>

    <div className="container-fluid">
        <div className="container">
            <div className="row">
              <div className="col-sm infopanel">
              </div>
              <div className="col-sm infopanel">
                <h2>Let's work together</h2>
                <button className="btn btn-info startbutton">Get Started</button>
              </div>
              <div className="col-sm infopanel">
              </div>
            </div>
          </div>
    </div>

    </div>
  );
}

export default App;


import './App.css';
import Hello from './component/Hello';
import Hero from './component/Hero';
import ErrorBoundary from './component/ErrorBoundary';
function App() {
  return (
    <div className="App">
    <Hello/>  
       <ErrorBoundary>
       <Hero heroName="Gaju"/>
       </ErrorBoundary>
       <ErrorBoundary>
       <Hero heroName="Jathu"/>
       </ErrorBoundary>
       <ErrorBoundary>
       <Hero heroName="GaJa"/>
       </ErrorBoundary>
       <ErrorBoundary>
       <Hero heroName="Joker"/>
       
       </ErrorBoundary>
          
      </div>
  );
}

export default App;

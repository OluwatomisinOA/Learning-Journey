import './App.css';

function ProductCard() {
  return (
    <article>
      <h2>iPhone 15 Pro</h2>
      <img
        src="images/iphone.png"
        alt="iPhone 15 Pro"
        width="120px"
        height="120px"
      />
      <p>Specifications:</p>
      <ul>
        <li>A17 Pro chip with 6-core GPU</li>
        <li>3x or 5x Telephoto camera</li>
        <li>Up to 29 hours video playback</li>
      </ul>
      <button>But (From $999)</button>
    </article>
  );
}

function App() {
  return (
    <div className="App">
      <ProductCard></ProductCard>
    </div>
  );
}

export default App;

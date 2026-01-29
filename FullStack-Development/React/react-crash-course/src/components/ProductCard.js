export function ProductCard() {
  const product = {
    imageSrc: "images/iphone.png",
    title: "iPhone 15 Pro",
    specifications: [
      "A17 Pro chip with 6-core GPU",
      "3x or 5x Telephoto camera",
      "Up to 29 hours video playback"
    ],
    price: 999,
  }
  return (
    <article style={{
      border: "1px solid white",
      borderRadius: "8px",
      padding: "16px",
      textAlign: "center",
    }}>
      <h2>{product.title}</h2>
      <img
        src={product.imageSrc}
        alt="iPhone 15 Pro"
        width="120px"
        height="120px"
      />
      <p>Specifications:</p>
      <ul style={{listStyle: "none"}}>
        <li>{product.specifications[0]}</li>
        <li>{product.specifications[1]}</li>
        <li>{product.specifications[2]}</li>
      </ul>
      <button>But (From ${product.price})</button>
    </article>
  );
}
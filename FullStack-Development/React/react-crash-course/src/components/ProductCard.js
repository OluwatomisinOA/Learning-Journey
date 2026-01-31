const styles = {
  Container: {
    width: "100%",
    border: "1px solid white",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center"
  },
  List: {
    listStyle: "none",
    padding: 0 
  },
}

export function ProductCard({ product, background = "slategray", onPurchase }) {


  return (
    <article style={{...styles.Container, background }}>
      <h2>{product.title}</h2>
      <img
        src={product.imageSrc}
        alt="iPhone 15 Pro"
        height={128}
        width={128}
      />
      <p>Specifications:</p>
      <ul style={styles.List}>
        {product.specifications.map((spec, index) => ( <li key={index}>{spec}</li> ))}
      </ul>
      <Status stockCount={product.stockCount} />
      {product.stockCount > 0 && (
        <button onClick={() => onPurchase(product)}>
          Buy (From ${product.price})
        </button>
      )}
    </article>
  );
}

function Status({ stockCount }) {
  const NotAvailableTemplate = <p>Not available</p>;
  const AvailableTemplate = <p>{stockCount} items availale</p>;
  return stockCount === 0 ? NotAvailableTemplate : AvailableTemplate;
}
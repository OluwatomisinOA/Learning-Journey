const styles = {
  display: "flex",
  gap: "16px" 
}

export function ProductList({ children }) {
  return <div
    style={styles}>
    {children}
  </div>
}
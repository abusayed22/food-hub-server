export const generateOrderNumber = () => {
  // Simple timestamp + random generic: "ORD-173823-123"
  return `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}
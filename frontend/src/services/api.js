const BASE_URL = "http://localhost:8080";

export const getProducts = async () => {
  const response = await fetch(`${BASE_URL}/api/v1/products`);
  const data = await response.json()
  return data;
}

export const searchProducts = async (searchQuery) => {
  const response = await fetch(`${BASE_URL}/api/v1/products/search?name=${encodeURIComponent(searchQuery)}`)
  const data = await response.json()
  return data;
}
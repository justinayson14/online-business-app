const BASE_URL = "http://localhost:8080";

export const getProducts = async () => {
  const response = await fetch(`${BASE_URL}/api/v1/products`);
  const data = await response.json();
  return data;
};

export const searchProducts = async (searchQuery) => {
  const response = await fetch(
    `${BASE_URL}/api/v1/products/search?name=${encodeURIComponent(searchQuery)}`
  );
  const data = await response.json();
  return data;
};

export const removeProduct = async (productName) => {
  const response = await fetch(
    `${BASE_URL}/api/v1/products?name=${productName}`,
    {
      method: "DELETE",
    }
  );
  console.log(response);
  return;
};

export const addProduct = async (product) => {
  const response = await fetch(`${BASE_URL}/api/v1/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  console.log(response);
  return;
};

export const getEmployees = async () => {
  const response = await fetch(`${BASE_URL}/api/v1/employees`);
  const data = await response.json();
  return data;
};

export const searchEmployees = async (searchQuery) => {
  const response = await fetch(
    `${BASE_URL}/api/v1/employees/search?name=${encodeURIComponent(
      searchQuery
    )}`
  );
  const data = await response.json();
  return data;
};

export const removeEmployee = async (employeeEmail) => {
  const response = await fetch(
    `${BASE_URL}/api/v1/employees?email=${employeeEmail}`,
    {
      method: "DELETE",
    }
  );
  console.log(response);
  return;
};

export const addEmployee = async (employee) => {
  const response = await fetch(`${BASE_URL}/api/v1/employees`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });
  console.log(response);
  return;
};

export const getFranchises = async () => {
  const response = await fetch(`${BASE_URL}/api/v1/franchises`);
  const data = await response.json();
  return data;
};

export const searchFranchises = async (searchQuery) => {
  const response = await fetch(
    `${BASE_URL}/api/v1/franchises/search?name=${encodeURIComponent(
      searchQuery
    )}`
  );
  const data = await response.json();
  return data;
};

export const removeFranchises = async (franchiseStreetAddress) => {
  const response = await fetch(
    `${BASE_URL}/api/v1/franchises?street_address=${franchiseStreetAddress}`,
    {
      method: "DELETE",
    }
  );
  console.log(response);
  return;
};

export const addFranchises = async (franchise) => {
  const response = await fetch(`${BASE_URL}/api/v1/franchises`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(franchise),
  });
  console.log(response);
  return;
};

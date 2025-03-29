import React from "react";

export default function App() {
    return (
      <Router>
        <div className="flex flex-col h-screen">
          <Navbar />
          <div className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/employees" element={<Employees />} />
            
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
  
  // Navbar Component
  export function Navbar() {
    return (
      <div className="bg-gray-800 text-white p-4 flex justify-between">
        <h2 className="text-xl font-bold">Business Manager</h2>
        <nav>
          <Link to="/" className="px-4">Home</Link>
          <Link to="/inventory" className="px-4">Inventory</Link>
          <Link to="/employees" className="px-4">Employees</Link>
          
          <Link to="/profile" className="px-4">Profile</Link>
        </nav>
      </div>
    );
  }
  
  // Home Page - Online Business Manager
  export function Home() {
    return (
      <div className="p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Online Business Manager</h1>
        <p className="text-lg text-gray-600 mb-6">
          Manage your business efficiently with our comprehensive platform. Handle inventory, employees, and franchises seamlessly.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/inventory" className="px-6 py-3 bg-blue-500 text-white rounded-lg">Manage Inventory</Link>
          <Link to="/employees" className="px-6 py-3 bg-green-500 text-white rounded-lg">Manage Employees</Link>
        </div>
      </div>
    );
  }
  
  export function Inventory() {
    return <div className="p-6"><h1 className="text-2xl font-bold">Inventory Management</h1></div>;
  }
  
  export function Employees() {
    return <div className="p-6"><h1 className="text-2xl font-bold">Employee Management</h1></div>;
  }
  
  export function Profile() {
    return <div className="p-6"><h1 className="text-2xl font-bold">User Profile</h1></div>;
  }

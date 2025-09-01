import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Welcome to Supabase Demo</h1>
        <div className="space-y-4">
          <Link 
            to="/signUp" 
            className="block w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-center"
          >
            Sign Up
          </Link>
          <Link 
            to="/signIn" 
            className="block w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 text-center"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;

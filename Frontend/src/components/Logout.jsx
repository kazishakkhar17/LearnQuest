import React from 'react';
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

function Logout() {
  const [authUser, setAuthUser] = useAuth();

  const handleLogOut = () => {
    try {
      // Clear user data from the auth context
      setAuthUser((prevState) => ({
        ...prevState,
        user: null,
      }));
      setTimeout(() => {
        document.getElementById("my_modal_3").close();
        window.location.reload();
        localStorage.setItem("Users",JSON.stringify(res.data.user));
      }, 3000);

      // Remove user data from local storage
      localStorage.removeItem('Users');

      // Show success message
      toast.success('Logout Successful');

      // Optionally redirect or refresh the page
      window.location.reload();
    } catch (error) {
      // Show error message
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogOut}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
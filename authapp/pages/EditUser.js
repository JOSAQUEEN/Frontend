import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link'
import styles from '../styles/Form.module.css';
import Layout from "@/layout/layout2"

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://reqres.in/api/users');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = async (id) => {
    try {
      const response = await fetch(`https://reqres.in/api/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Include the updated user data here
        }),
      });

      if (response.ok) {
        toast.success('User edited successfully');
        // Implement any additional logic after successful edit
      } else {
        console.error('Failed to edit user');
        // Implement error handling logic here
      }
    } catch (error) {
      console.error('Error editing user:', error);
      // Implement error handling logic here
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://reqres.in/api/users/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        toast.success('User deleted successfully');
        // Implement any additional logic after successful deletion
      } else {
        console.error('Failed to delete user');
        // Implement error handling logic here
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      // Implement error handling logic here
    }
  };

  return (
    <Layout>
    <div>
            <div className="title">
                <h1 className='text-gray-800 text-4xl font-bold py-4'>Hello ReqRes Users!</h1>
                <p className='w-3/4 mx-auto text-gray-600 '></p>
                <Link href={'/login'}>
            <legacyBehavior className='text-blue-700'>Leturn to Login</legacyBehavior>
            </Link>
            </div>
      {data ? (
        <ul>
          {data.data.map((user) => (
            <li key={user.id}>
              {user.email}{' '}
              <div className="input-button">
              <button type='submit' className={styles.button2} onClick={() => handleEdit(user.id)}>Edit</button>{' '}
              <button type='submit' className={styles.button2} onClick={() => handleDelete(user.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}

      <ToastContainer />
    </div>
    </Layout>
  );
};

export default Home;



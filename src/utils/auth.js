import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const token = Cookies.get('token');

      if (token) {
        try {
          const { data } = await axios.get('/api/user', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(data);
        } catch (err) {
          console.error(err);
        }
      }

      setIsLoading(false);
    };

    checkUser();
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await axios.post('/api/auth/login', {
        email,
        password,
      });
      Cookies.set('token', data.token, { expires: 7 });
      setUser(data.user);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = () => {
    Cookies.remove('token');
    setUser(null);
  };

  return { user, login, logout, isLoading };
};

export default useAuth;


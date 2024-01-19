import React, { useEffect, useState } from "react";
import { AppContext } from "./App_Context";
import axios from "axios";
const App_State = (props) => {
  const [data, setdata] = useState(10);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("");
  const [posts, setPosts] = useState([]);
  const url = "http://localhost:9090/api";
  useEffect(() => {
    const fetchBlog = async () => {
      const api = await axios.get(`${url}/getpost`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(api.data.posts);
      setPosts(api.data.posts);
    };
    fetchBlog();
    const jwtToken = window.localStorage.getItem('token')
    //console.log("Supermanjwttoken =",jwtToken);
    setToken(jwtToken)
    if(token){
      setIsAuthenticated(true);
    }
    else{
      setIsAuthenticated(false);
    }
  }, [token]);
  const login = async (email, password) => {
    try {
      const api = await axios.post(
        `${url}/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      // return api.data;
      console.log(api.data.token);
     // Setting token to Local Message
     setToken(api.data.token)
      window.localStorage.setItem('token',api.data.token)
    } catch (error) {
      if (error.response) {
        console.log("Error response status:", error.response.status);
        console.log("Response data:", error.response.data);
      } else if (error.request) {
        console.log("No response received");
      } else {
        console.error("Error message:", error.message);
      }
    }
  };

  const logOut = ()=>{
    window.localStorage.removeItem('token')
    setToken("")
    isAuthenticated(false);
  }
  return (
    <AppContext.Provider
      value={{
        data,
        setdata,
        url,
        login,
        token,
        setToken,
        isAuthenticated,
         setIsAuthenticated,
         logOut,
         posts,
         setPosts
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default App_State;















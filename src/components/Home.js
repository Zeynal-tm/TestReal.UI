import React, { useEffect, useState } from "react";
import axios from "axios";
import RegisteredUsers from "./RegisteredUsers.js";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const { data } = await axios.get(
      `https://localhost:5001/api/UserRegistration`,
    );
    setBlogs(data);
  }, []);

  return blogs && <div>{blogs && <RegisteredUsers blogs={blogs} />}</div>;
};

export default Home;

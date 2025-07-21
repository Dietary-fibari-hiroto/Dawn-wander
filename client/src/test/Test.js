import { useState, useEffect } from "react";
import { getUsers } from "../api/users";

const Test = () => {
  const [data, setData] = useState();
  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    try {
      const res = await getUsers();
      if (res) {
        setData(res);
        console.log("res:", res);
      }
    } catch (error) {
      console.log("エラー:", error);
    }
  };

  return <div className="text-white">Test</div>;
};

export default Test;

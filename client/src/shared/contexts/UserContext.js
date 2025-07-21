import { createContext, useContext, useState, useEffect } from "react";

export const UserContext = createContext();

const idStrageName = "wander_userId";
const trialStrageName = "wander_trialOrder";
const proccessStrageName = "wander_proccess";

const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(() => {
    const saved = localStorage.getItem(idStrageName);
    return saved ? JSON.parse(saved) : null;
  });
  const [trialOrder, setTrialOrder] = useState(() => {
    const saved = localStorage.getItem(trialStrageName);
    return saved ? JSON.parse(saved) : { first: 0, second: 0, third: 0 };
  });
  const [proccessIndex, setProccessIndex] = useState(() => {
    const saved = localStorage.getItem(proccessStrageName);
    return saved ? JSON.parse(saved) : 0;
  });

  useEffect(() => {
    if (userId) {
      localStorage.setItem(idStrageName, JSON.stringify(userId));
    }
    console.log("contextId:", userId);
  }, [userId]);

  useEffect(() => {
    if (trialOrder) {
      localStorage.setItem(trialStrageName, JSON.stringify(trialOrder));
    }
  }, [trialOrder]);

  useEffect(() => {
    if (proccessIndex) {
      localStorage.setItem(proccessStrageName, JSON.stringify(proccessIndex));
    }
    console.log("index", proccessIndex);
  }, [proccessIndex]);

  // localStorage.setItem(STORAGE_KEY, JSON.stringify(counts));　trialOrderの格納方法
  //((prev) => ({ ...prev, first: prev.first + 1 })); 更新方法

  return (
    <UserContext.Provider
      value={{
        userId,
        setUserId,
        trialOrder,
        setTrialOrder,
        proccessIndex,
        setProccessIndex,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

export default UserProvider;

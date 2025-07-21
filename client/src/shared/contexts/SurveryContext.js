import { createContext, useContext, useState, useEffect } from "react";

export const SurveryContext = createContext();

const trialIdStrageName = "wander_trial_id";

const SurveryProvider = ({ children }) => {
  const [user_trialId, setUser_trialId] = useState(() => {
    const saved = localStorage.getItem(trialIdStrageName);
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user_trialId) {
      localStorage.setItem(trialIdStrageName, JSON.stringify(user_trialId));
    }
  });

  return (
    <SurveryContext.Provider value={{ user_trialId, setUser_trialId }}>
      {children}
    </SurveryContext.Provider>
  );
};

export const useSurvery = () => useContext(SurveryContext);

export default SurveryProvider;

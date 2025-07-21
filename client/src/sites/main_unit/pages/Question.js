import { useEffect, useState } from "react";
import { useUser } from "../../../shared/contexts/UserContext";
const Question = () => {
  const { setProccessIndex, proccessIndex } = useUser();
  useEffect(() => {
    return () => {
      setProccessIndex(proccessIndex + 1);
    };
  }, []);
  const [showQuestion, setShowQuestion] = useState(false);
  if (showQuestion) {
  } else {
    return <div className="section-frame flex-all-center flex-col">text</div>;
  }
};

export default Question;

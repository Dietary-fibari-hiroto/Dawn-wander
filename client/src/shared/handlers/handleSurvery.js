import { useEffect, useRef } from "react";
import { createPageview } from "../../api/survery";

//ページの滞在時間を取得
export const useStayDurationHandler = (onLeave, page_id, user_trialId) => {
  const enterTimeRef = useRef(null);

  useEffect(() => {
    enterTimeRef.current = Date.now();

    return () => {
      const leaveTime = Date.now();
      const stayDuration = ((leaveTime - enterTimeRef.current) / 1000).toFixed(
        2
      );

      onLeave?.(stayDuration);

      if (stayDuration !== "0.00") {
        const formData = {
          page_id: page_id,
          user_trial_id: user_trialId,
          staing_time: parseFloat(stayDuration),
        };
        const res = createPageview(formData);
      }
    };
  }, []);
};

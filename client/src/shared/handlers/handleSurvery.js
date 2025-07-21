import { useEffect, useRef, useState } from "react";
import {
  createPageview,
  updateStaingtime,
  createHover_event,
} from "../../api/survery";

export const useStayDurationHandler = (page_id, user_trialId) => {
  const [pageviewId, setPageviewId] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const formData = {
        page_id: page_id,
        user_trial_id: user_trialId,
      };
      try {
        const res = await createPageview(formData);
        if (res?.id) {
          setPageviewId(res.id); // ← ここで保存！
        }
      } catch (err) {
        console.error("作成失敗:", err);
      }
    };
    fetchData();
  }, []);
  return pageviewId;
};
//ページの滞在時間を取得
export const useUpdateStayDurationHandler = (onLeave, pageview_id) => {
  const enterTimeRef = useRef(null);

  useEffect(() => {
    if (!pageview_id) return; // IDがない間は何もしない

    enterTimeRef.current = Date.now();

    return () => {
      const leaveTime = Date.now();
      const stayDuration = ((leaveTime - enterTimeRef.current) / 1000).toFixed(
        2
      );

      onLeave?.(stayDuration);

      if (stayDuration !== "0.00") {
        const formData = {
          staing_time: parseFloat(stayDuration),
        };
        const fetchPageview = async () => {
          const res = await updateStaingtime(pageview_id, formData);
        };

        fetchPageview();
      }
    };
  }, [pageview_id]); // ← これを忘れずに依存配列に入れる！
};

export const useHover_eventHandler = (user_trialId, pageview_id) => {
  const startTimeRef = useRef(null);
  const element_id = useRef(0);

  const handleMouseEnter = (id) => {
    startTimeRef.current = Date.now();
    element_id.current = id;
  };

  const handleMouseLeave = async () => {
    if (startTimeRef.current !== null) {
      const duration_sec = parseFloat(
        ((Date.now() - startTimeRef.current) / 1000).toFixed(2)
      );
      if (duration_sec >= 0.3) {
        const formData = {
          pageview_id: pageview_id,
          element_id: element_id.current,
          duration_sec: duration_sec,
        };
        const data = await createHover_event(formData);
        console.log("hover:", data);
      }
      startTimeRef.current = null;
      element_id.current = 0;
    }
  };

  return { handleMouseEnter, handleMouseLeave };
};

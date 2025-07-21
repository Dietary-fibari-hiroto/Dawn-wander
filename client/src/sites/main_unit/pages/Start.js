import { useNavigate } from "react-router-dom";
import task_video from "../../../shared/assets/videos/task_video.mp4";
import { Click_to, Wander_logo } from "../../../shared/components";

const Start = () => {
  const navigate = useNavigate();
  const handleStart = (e) => {
    e.preventDefault();
    navigate("/pretrialsurvery");
  };
  return (
    <div
      onClick={handleStart}
      className="text-white relative Kinuta-Shin-StdN-6K section-frame cursor-pointer"
    >
      <video
        className="absolute top-0 left-0  section-frame"
        src={task_video}
        autoPlay
        muted
        loop
      />
      <Wander_logo className={"absolute-center z-[3]"} />
      <Click_to className="absolute bottom-[20%] left-1/2 translate-x-[-50%] z-[3]" />
    </div>
  );
};

export default Start;

import "./index.css";
import "./fonts";
import { SaturdayCompositions } from "./Composition";
import { SonkeechungCompositions } from "./SonkeechungCourse";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <SaturdayCompositions />
      <SonkeechungCompositions />
    </>
  );
};

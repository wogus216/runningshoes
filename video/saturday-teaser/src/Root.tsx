import "./index.css";
import "./fonts";
import { SonkeechungCompositions } from "./SonkeechungReel";
import { SaturdayCompositions } from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <SaturdayCompositions />
      <SonkeechungCompositions />
    </>
  );
};

import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

await loadFont({
  family: "Pretendard Saturday",
  url: staticFile("fonts/PretendardVariable.woff2"),
  format: "woff2",
  weight: "45 920",
  display: "block",
});

/**
 * Note: When using the Node.JS APIs, the config file
 * doesn't apply. Instead, pass options directly to the APIs.
 *
 * All configuration options: https://remotion.dev/docs/config
 */

import path from "node:path";
import { Config } from "@remotion/cli/config";

Config.setRspack(true);
Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);

// Shared web scene and Remotion must use one React / R3F / Three instance.
const rootModules = path.resolve(process.cwd(), "../../node_modules");
Config.overrideBundlerConfig((config) => ({
  ...config,
  resolve: {
    ...config.resolve,
    alias: {
      ...(config.resolve?.alias ?? {}),
      react: path.join(rootModules, "react"),
      "react-dom": path.join(rootModules, "react-dom"),
      three: path.join(rootModules, "three"),
      "@react-three/fiber": path.join(rootModules, "@react-three/fiber"),
      "@react-three/drei": path.join(rootModules, "@react-three/drei"),
    },
  },
}));

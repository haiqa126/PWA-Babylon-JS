import { useEffect } from "react";
import {
  Engine,
  Scene,
  Vector3,
  ArcRotateCamera,
  HemisphericLight,
  SceneLoader,
} from "@babylonjs/core"; // Import Engine as well

import "@babylonjs/loaders/glTF/2.0/glTFLoader";
import "@babylonjs/loaders/glTF/2.0/Extensions/KHR_draco_mesh_compression";
import "@babylonjs/loaders/glTF/2.0/Extensions/KHR_texture_transform";

import "./App.scss";

function App(): JSX.Element {
  useEffect(() => {
    const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement; // Get the canvas element
    const engine = new Engine(canvas, true); // Create a Babylon.js engine

    const scene = new Scene(engine);

    const camera = new ArcRotateCamera(
      "camera",
      -Math.PI / 2,
      Math.PI / 2.5,
      15,
      new Vector3(0, 0, 0),
      scene
    );
    camera.attachControl(canvas, true);
    const light = new HemisphericLight("light", new Vector3(1, 1, 0), scene);

    SceneLoader.ImportMeshAsync("", "./", "cornellBox.glb", scene)
      .then(() => {
        console.log(light);
      })
      .catch((error) => {
        console.error("An error occurred while importing the mesh:", error);
      });

    engine.runRenderLoop(() => {
      scene.render();
    });

    return () => {
      scene.dispose();
      engine.dispose();
    };
  }, []);

  return <canvas id="renderCanvas" />;
}

export default App;

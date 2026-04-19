import { Suspense, lazy } from "react";

const Scene = lazy(() => import("./HeroSceneInner"));

export function HeroScene() {
  return (
    <Suspense fallback={<div className="h-full w-full" />}>
      <Scene />
    </Suspense>
  );
}

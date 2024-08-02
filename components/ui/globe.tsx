"use client"

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export type GlobeProps = React.ComponentPropsWithoutRef<'canvas'> & {
  latitude?: number
  longitude?: number
}

export function Globe({ latitude, longitude, ...props }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null!);

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: longitude && latitude 
        ? [{ location: [longitude, latitude], size: 1 }] 
        : [],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      }
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      {...props}
    />
  );
}

"use client"

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export type GlobeProps = React.ComponentPropsWithoutRef<'canvas'> & {
  latitude?: number
  longitude?: number
}

export function Globe({ latitude, longitude, style, ...props }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null!);

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 350 * 2,
      height: 350 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: latitude && longitude
        ? [{ location: [latitude, longitude], size: 0.2 }] 
        : [],
      onRender: (state) => {
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
      style={{ width: 350, height: 350, maxWidth: "100%", aspectRatio: 1, ...style }}
      {...props}
    />
  );
}

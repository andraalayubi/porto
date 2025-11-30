"use client";

import { useEffect, useState } from "react";
import { Background, RevealFx } from "@once-ui-system/core";
import { effects } from "@/resources";

export const ClientBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <RevealFx fill position="absolute">
      <Background
        mask={{
          x: effects.mask.x,
          y: effects.mask.y,
          radius: effects.mask.radius,
          cursor: effects.mask.cursor,
        }}
        gradient={{
          display: effects.gradient.display,
          opacity: effects.gradient.opacity as any,
          x: effects.gradient.x,
          y: effects.gradient.y,
          width: effects.gradient.width,
          height: effects.gradient.height,
          tilt: effects.gradient.tilt,
          colorStart: effects.gradient.colorStart,
          colorEnd: effects.gradient.colorEnd,
        }}
        dots={{
          display: effects.dots.display,
          opacity: effects.dots.opacity as any,
          size: effects.dots.size as any,
          color: effects.dots.color,
        }}
        grid={{
          display: effects.grid.display,
          opacity: effects.grid.opacity as any,
          color: effects.grid.color,
          width: effects.grid.width,
          height: effects.grid.height,
        }}
        lines={{
          display: effects.lines.display,
          opacity: effects.lines.opacity as any,
          size: effects.lines.size as any,
          thickness: effects.lines.thickness,
          angle: effects.lines.angle,
          color: effects.lines.color,
        }}
      />
    </RevealFx>
  );
};

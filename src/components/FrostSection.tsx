"use client";

import { mailchimp } from "@/app/resources";
import { Background, Column } from "@/once-ui/components";
import { opacity, SpacingToken } from "@/once-ui/types";
import clsx from "clsx";
import type { ReactNode } from "react";

type FrostSectionProps = {
  children: ReactNode;
  className?: string;
};

const FrostSection = ({ children, className }: FrostSectionProps) => {
  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xs"
      radius="m"
      marginBottom="m"
      marginTop="xs"
      horizontal="start"
      align="left"
      background="surface"
      border="neutral-alpha-weak"
      className={clsx(className)}
    >
      <Background
        position="absolute"
        mask={mailchimp.effects.mask}
        gradient={{
          ...mailchimp.effects.gradient,
          opacity: mailchimp.effects.gradient.opacity as opacity,
        }}
        dots={{
          ...mailchimp.effects.dots,
          opacity: mailchimp.effects.dots.opacity as opacity,
          size: mailchimp.effects.dots.size as SpacingToken,
        }}
        grid={{
          ...mailchimp.effects.grid,
          opacity: mailchimp.effects.grid.opacity as opacity,
        }}
        lines={{
          ...mailchimp.effects.lines,
          opacity: mailchimp.effects.lines.opacity as opacity,
          size: mailchimp.effects.lines.size as SpacingToken,
        }}
      />
      <div
        style={{
          position: "relative",
          width: "100%",
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </Column>
  );
};

export default FrostSection;

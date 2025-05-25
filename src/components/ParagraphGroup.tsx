import { Column, Text } from "@/once-ui/components";
import type { SpacingToken } from "@/once-ui/types";
import React from "react";

type ParagraphGroupProps = {
  content: string | string[] | React.ReactNode;
  gap?: SpacingToken;
  justify?: boolean;
};

const ParagraphGroup = ({ content, gap = "l" }: ParagraphGroupProps) => {
  if (typeof content !== "string" && !Array.isArray(content)) {
    return (
      <Column fillWidth gap={gap}>
        <Text
          variant="body-default-l"
          wrap="balance"
          className="leading-relaxed tracking-normal"
          style={{ textAlign: "justify" }}
        >
          {content}
        </Text>
      </Column>
    );
  }

  const paragraphs = Array.isArray(content)
    ? content
    : content
        .split("\n\n")
        .map((p) => p.trim())
        .filter(Boolean);

  return (
    <Column fillWidth gap={gap}>
      {paragraphs.map((paragraph, index) => (
        <Text
          key={index}
          variant="body-default-l"
          wrap="balance"
          className="leading-relaxed tracking-normal"
          style={{ textAlign: "justify" }}
        >
          {paragraph}
        </Text>
      ))}
    </Column>
  );
};

export default ParagraphGroup;

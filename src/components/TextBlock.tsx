import { Text } from "@/once-ui/components";
import type { CSSProperties, ReactNode } from "react";

type TextBlockProps = {
  children: ReactNode;
  justify?: boolean;
  variant?: Parameters<typeof Text>[0]["variant"];
  className?: string;
  style?: CSSProperties;
  as?: "p" | "li" | "span" | "div";
};

const TextBlock = ({
  children,
  justify = false,
  variant = "body-default-m",
  className = "",
  style,
  as = "p",
}: TextBlockProps) => {
  return (
    <Text
      as={as}
      variant={variant}
      wrap={justify ? "balance" : undefined}
      className={`leading-relaxed tracking-normal ${className}`}
      style={{
        ...(justify && { textAlign: "justify" }),
        ...style,
      }}
    >
      {children}
    </Text>
  );
};

export default TextBlock;

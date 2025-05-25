import { Heading } from "@/once-ui/components";
import type { SpacingToken } from "@/once-ui/types";

type HeadingBlockProps = {
  id?: string;
  children: string;
  level?: 1 | 2 | 3 | 4;
  marginBottom?: SpacingToken;
};

const HeadingBlock = ({
  id,
  children,
  level = 2,
  marginBottom = "m",
}: HeadingBlockProps) => {
  const variants = {
    1: "display-strong-xl",
    2: "display-strong-s",
    3: "heading-strong-l",
    4: "heading-default-m",
  } as const;

  return (
    <Heading
      as={`h${level}` as keyof JSX.IntrinsicElements}
      id={id}
      variant={variants[level]}
      marginBottom={marginBottom}
    >
      {children}
    </Heading>
  );
};

export default HeadingBlock;

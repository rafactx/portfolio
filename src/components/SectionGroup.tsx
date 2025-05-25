import HeadingBlock from "@/components/HeadingBlock";

type SectionGroupProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4;
};

const SectionGroup = ({
  id,
  title,
  children,
  level = 2,
}: SectionGroupProps) => {
  return (
    <section id={id} style={{ scrollMarginTop: "80px" }}>
      <HeadingBlock id={id} level={level}>
        {title}
      </HeadingBlock>
      {children}
    </section>
  );
};

export default SectionGroup;

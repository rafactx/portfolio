import { social } from "@/app/resources/content";
import { Flex, IconButton } from "@/once-ui/components";

export const Footer = () => {
  return (
    <Flex
      as="footer"
      fillWidth
      padding="16"
      horizontal="center"
      vertical="center"
      mobileDirection="column"
    >
      {/* Apenas ícones sociais com hover estilizado */}
      <Flex gap="16">
        {social.map(
          (item) =>
            item.link && (
              <IconButton
                key={item.name}
                href={item.link}
                icon={item.icon}
                tooltip={item.name}
                size="s"
                variant="ghost"
                className="transition-transform duration-300 hover:scale-125 hover:text-brand-strong"
              />
            )
        )}
      </Flex>
    </Flex>
  );
};

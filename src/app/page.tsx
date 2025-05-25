import {
  Badge,
  Button,
  Column,
  Heading,
  RevealFx,
  Row,
  Text,
} from "@/once-ui/components";

import { baseURL } from "@/app/resources";
import { about, home, person } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";

// Metadata para SEO (Next.js App Router)
export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL,
    path: home.path,
  });
}

export default function Home() {
  return (
    <Column
      // Layout principal: ocupa viewport inteira com responsividade real
      style={{
        height: "100dvh",
        paddingTop: "clamp(64px, 10vh, 96px)", // adapta a altura do header ao viewport
        paddingInline: "clamp(16px, 5vw, 48px)", // padding lateral fluido
        boxSizing: "border-box",
        overflow: "hidden", // previne scroll causado por animações
      }}
      horizontal="center"
    >
      {/* SEO com dados estruturados */}
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`${baseURL}/og?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column
        gap="m"
        align="center"
        horizontal="center"
        style={{
          textAlign: "center",
          maxWidth: "720px",
          alignSelf: "center",
          width: "100%", // garante responsividade em mobile
        }}
      >
        {/* Destaque inicial (projeto em destaque) */}
        {home.featured && (
          <RevealFx
            fillWidth
            horizontal="center"
            paddingTop="0"
            paddingBottom="16"
          >
            <Badge
              background="brand-alpha-weak"
              paddingX="12"
              paddingY="4"
              onBackground="neutral-strong"
              textVariant="label-default-s"
              arrow={false}
              href={home.featured.href}
            >
              <Row paddingY="2">{home.featured.title}</Row>
            </Badge>
          </RevealFx>
        )}

        {/* Headline principal com animação suave */}
        <RevealFx translateY="4" horizontal="center" paddingBottom="8">
          <Heading variant="display-strong-l" className="text-center">
            {home.headline}
          </Heading>
        </RevealFx>

        {/* Subtítulo com leve atraso na animação */}
        <RevealFx
          translateY="8"
          delay={0.2}
          horizontal="center"
          paddingBottom="16"
        >
          <Text
            onBackground="neutral-weak"
            variant="heading-default-xl"
            className="text-center"
          >
            {home.subline}
          </Text>
        </RevealFx>

        {/* Botão de ação principal */}
        <RevealFx
          paddingTop="8"
          paddingBottom="0"
          delay={0.4}
          horizontal="center"
        >
          <Button
            id="about"
            data-border="rounded"
            href={about.path}
            variant="secondary"
            size="m"
            arrowIcon
          >
            About Me
          </Button>
        </RevealFx>
      </Column>
    </Column>
  );
}

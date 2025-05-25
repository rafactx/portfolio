"use client";

import { display, routes } from "@/app/resources";
import { about, work } from "@/app/resources/content";
import styles from "@/components/Header.module.scss";
import { Fade, Flex, Line, ToggleButton } from "@/once-ui/components";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      {/* Fade de cima (header fixo) — ajuda na transição */}
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />

      {/* Fade de baixo — dá efeito visual ao final da rolagem */}
      <Fade
        show="s"
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />

      {/* Cabeçalho principal com padding e centralização */}
      <Flex
        as="header"
        position="unset"
        className={styles.position}
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
        fitHeight
      >
        {/* Coluna esquerda vazia (reservada para elementos no futuro) */}
        <Flex
          paddingLeft="12"
          fillWidth
          vertical="center"
          textVariant="body-default-s"
        >
          {/* Ex-location (ex: América/São_Paulo) */}
        </Flex>

        {/* Menu central com botões e tema */}
        <Flex fillWidth horizontal="center">
          <Flex
            background="surface"
            border="neutral-alpha-medium"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Flex gap="4" vertical="center" textVariant="body-default-s">
              {/* Home */}
              {routes["/"] && (
                <ToggleButton
                  prefixIcon="home"
                  href="/"
                  selected={pathname === "/"}
                />
              )}

              <Line background="neutral-alpha-medium" vert maxHeight="24" />

              {/* About */}
              {routes["/about"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="person"
                    href="/about"
                    label={about.label}
                    selected={pathname === "/about"}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="person"
                    href="/about"
                    selected={pathname === "/about"}
                  />
                </>
              )}

              {/* Work */}
              {routes["/work"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="grid"
                    href="/work"
                    label={work.label}
                    selected={pathname.startsWith("/work")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="grid"
                    href="/work"
                    selected={pathname.startsWith("/work")}
                  />
                </>
              )}

              {/* Toggle de tema */}
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <ThemeToggle />
                </>
              )}
            </Flex>
          </Flex>
        </Flex>

        {/* Coluna direita (vazia por enquanto) */}
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            {/* Ex: relógio, login futuro */}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

"use client";

import AppBar from "@/components/AppBar/AppBar";
import Footer from "@/components/Footer";
import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <Box>
      <AppBar />
      <Hero />
      <OurApproach />
      <OurMission />
      <JoinToday />
      <Footer />
    </Box>
  );
}

function Hero() {
  const minWidth900px = useMediaQuery("(min-width: 900px)");
  return (
    <Box
      bgcolor={"#F3F8F2"}
      sx={{
        margin: { xs: "0px 8px 80px 8px", md: "0px 20px 80px 20px" },
        borderRadius: { xs: "24px", md: "32px" },
        padding: { xs: "40px 20px 0px 20px", sm: "64px 20px 0px 20px" },
      }}
    >
      <Stack
        maxWidth={"760px"}
        gap={"20px"}
        margin={"0px auto"}
        alignItems={"center"}
        position={"relative"}
      >
        {minWidth900px && (
          <Image
            src={"/illustration6.svg"}
            alt="illustration"
            width={60}
            height={60}
            style={{ position: "absolute", top: 0, right: "-50px" }}
          />
        )}

        <Stack padding={"4px 12px"} bgcolor={"#E7F1E4"} borderRadius={"4px"}>
          <Typography color="textSecondary" variant="body2">
            About Us
          </Typography>
        </Stack>
        <Typography
          variant="h1"
          align="center"
          sx={{
            font: { xs: "var(--font-h2)", md: "var(--font-h1)" },
            wordBreak: "break-word",
          }}
        >
          Growing Confident Global{" "}
          <Typography
            component={"span"}
            color="primary"
            sx={{ font: "inherit" }}
          >
            Communicators
          </Typography>
        </Typography>
        <Typography align="center" color="textSecondary">
          At LinguaSprouts Academy, we believe that learning a new language is
          about much more than memorizing words and grammar. Language opens
          doors to confidence, cultural understanding, meaningful connections,
          and future opportunities.
        </Typography>
      </Stack>

      <Image
        src={"/about/about-illustration.png"}
        alt="Child illustration"
        width={735}
        height={490}
        style={{ margin: "0px auto", position: "relative", top: "40px" }}
      />
    </Box>
  );
}

const maxWidth = "1024px";

function OurApproach() {
  return (
    <Box
      component={"div"}
      className="layout"
      paddingTop={"60px"}
      paddingBottom={"140px"}
    >
      <Box maxWidth={maxWidth} margin={"0px auto"}>
        <Image
          src={"/about/illustration8.svg"}
          alt="Illustration"
          width={128}
          height={"103"}
          style={{ marginBottom: "56px" }}
        />
        <Stack
          alignItems={"center"}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "32px", md: "64px" },
          }}
        >
          <Typography
            variant="h2"
            color="textSecondary"
            flex={1}
            sx={{
              font: (theme) => ({
                xs: theme.vars?.font.h3,
                md: theme.vars?.font.h2,
              }),
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              component={"span"}
              color="primary"
              sx={{ font: "inherit" }}
            >
              Our Approach{" "}
            </Typography>
            to Language Learning
          </Typography>

          <Typography
            color="textSecondary"
            flex={1}
            sx={{ maxWidth: "520px", textAlign: { xs: "center", md: "left" } }}
          >
            Children learn best when they are engaged, supported, and having
            fun. That is why our programs are designed to make language learning
            interactive, meaningful, and enjoyable from the very first class.
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}

function OurMission() {
  return (
    <Box component={"div"} className="layout">
      <Stack
        maxWidth={maxWidth}
        paddingTop={"100px"}
        paddingBottom={"80px"}
        sx={{ gap: { xs: "60px", md: "80px" } }}
        margin={"0px auto"}
        position={"relative"}
      >
        <Image
          src={"/about/illustration7.svg"}
          alt="illustration"
          width={76}
          height={84}
          style={{ position: "absolute", top: 0, right: 15 }}
        />
        <Typography
          variant="h3"
          color="textSecondary"
          sx={{
            font: { xs: "var(--font-h4)", md: "var(--font-h3)" },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography
            component={"span"}
            color="primary"
            sx={{ font: "inherit" }}
          >
            Our mission
          </Typography>{" "}
          is to nurture the next generation of confident global communicators by
          providing engaging, high-quality language education that inspires
          curiosity, cultural understanding, and lifelong learning.
        </Typography>

        <Box
          position={"relative"}
          borderRadius={"32px"}
          overflow={"hidden"}
          sx={{ height: { xs: "220px", md: "350px" } }}
        >
          <Image
            src={"/about/about-image.jpg"}
            alt="Children image"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </Box>
      </Stack>
    </Box>
  );
}

function JoinToday() {
  return (
    <Stack
      alignItems={"center"}
      className="layout"
      paddingTop={"120px"}
      paddingBottom={"120px"}
      gap={"20px"}
    >
      <Typography align="center" variant="h3">
        Join LinguaSprouts{" "}
        <Typography color={"primary"} component={"span"} variant="h3">
          Today
        </Typography>
      </Typography>
      <PrimaryButton
        LinkComponent={Link}
        color="primary"
        href="/summercamp2026"
      >
        Get Started
      </PrimaryButton>
    </Stack>
  );
}

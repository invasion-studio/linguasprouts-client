"use client";

import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import AppBar from "@/components/AppBar/AppBar";

export default function Hero() {
  const mediumBreakpoint = useMediaQuery("(min-width: 900px)");
  return (
    <Box>
      <AppBar />

      <Box
        component={"div"}
        className="layout"
        bgcolor={"#F3F8F2"}
        sx={{
          margin: { xs: "0px 8px 80px 8px", md: "0px 20px 80px 20px" },
          borderRadius: { xs: "24px", md: "32px" },
          paddingTop: { xs: "70px", md: "80px" },
          paddingBottom: "60px",
        }}
      >
        <Box maxWidth={"1024px"} margin={"0px auto"}>
          <Box>
            <Typography
              align="center"
              fontWeight={700}
              color="#697B65"
              fontFamily="playpen sans"
              sx={{
                fontSize: { xs: "48px", md: "80px" },
                lineHeight: { xs: "64px", md: "108px" },
              }}
            >
              Speak. Play.{" "}
              <Typography
                component={"span"}
                color="primary"
                sx={{ font: "inherit" }}
              >
                Grow.
              </Typography>
            </Typography>
            <Typography
              align="center"
              fontWeight={600}
              color="#697B65"
              fontFamily="playpen sans"
              marginTop={"16px"}
              sx={{
                fontSize: { xs: "20px", md: "24px" },
                lineHeight: { xs: "32px", md: "40px" },
              }}
            >
              Your Child’s Language Journey Starts Here!
            </Typography>
          </Box>

          <Stack
            flexDirection={"row"}
            sx={{
              justifyContent: { xs: "center", md: "space-between" },
              marginTop: { xs: "70px", md: "32px" },
            }}
            alignItems={"center"}
          >
            <Typography
              variant="body1"
              color="#697B65"
              sx={{
                maxWidth: "380px",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              From their first words to full conversations, we guide children on
              a joyful journey into new languages—helping them connect with the
              world early.
            </Typography>

            <Box
              height={211.36}
              width={237.33}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Image
                src={"/vector1.png"}
                alt="elipse with child image"
                width={237.33}
                height={211.36}
              />
            </Box>
          </Stack>

          <Stack
            sx={{
              gap: { xs: "20px", md: "24px" },
              flexDirection: { xs: "column", md: "row" },
              marginTop: { xs: "70px", md: "-12px" },
              alignItems: { xs: "stretch", md: "flex-end" },
            }}
          >
            <EarlySprouts />
            <YoungExplorers />
            <TeenCommunicators />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

const EarlySprouts = () => {
  return (
    <Stack
      bgcolor={"#A6F696"}
      borderRadius={"24px"}
      padding={"28px"}
      gap={"32px"}
      flex={1}
      justifyContent={"space-between"}
      height={"250px"}
      position={"relative"}
    >
      <Box position={"absolute"} top={0} right={0}>
        <Image
          src={"/illustration1.svg"}
          alt="illustration1"
          height={113.73}
          width={141}
          style={{ width: "164px", height: "auto" }}
        />
      </Box>
      <Stack
        padding={"4px 8px"}
        borderRadius={"200px"}
        width={"fit-content"}
        border={"1px solid"}
        borderColor={(theme) => theme.palette.ibmgrey[70]}
        position={"relative"}
        zIndex={2}
      >
        <Typography variant="caption">5-7 years</Typography>
      </Stack>

      <Box position={"relative"} zIndex={2}>
        <Typography lineHeight={"44px"} fontSize={"24px"} fontWeight={600}>
          Early Sprouts
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Play-based language discovery
        </Typography>
      </Box>
    </Stack>
  );
};

const YoungExplorers = () => {
  return (
    <Stack
      bgcolor={"#C6EDFA"}
      borderRadius={"24px"}
      padding={"28px"}
      gap={"32px"}
      flex={1}
      justifyContent={"space-between"}
      height={"332px"}
      position={"relative"}
      overflow={"hidden"}
    >
      <Box position={"absolute"} top={0} right={-10}>
        <Image
          src={"/illustration2.svg"}
          alt="illustration2"
          height={176}
          width={184}
          style={{ width: "140px", height: "auto" }}
        />
      </Box>
      <Stack
        padding={"4px 8px"}
        borderRadius={"200px"}
        width={"fit-content"}
        border={"1px solid"}
        borderColor={(theme) => theme.palette.ibmgrey[70]}
        position={"relative"}
        zIndex={2}
      >
        <Typography variant="caption">8-11 years</Typography>
      </Stack>

      <Box position={"relative"} zIndex={2}>
        <Typography lineHeight={"44px"} fontSize={"24px"} fontWeight={600}>
          Young Explorers
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Vocabulary building and conversation
        </Typography>
      </Box>
    </Stack>
  );
};

const TeenCommunicators = () => {
  return (
    <Stack
      bgcolor={"#FAC6E9"}
      borderRadius={"24px"}
      padding={"28px"}
      gap={"32px"}
      flex={1}
      justifyContent={"space-between"}
      height={"230px"}
      position={"relative"}
    >
      <Box position={"absolute"} top={0} right={0}>
        <Image
          src={"/illustration3.svg"}
          alt="illustration3"
          height={113.73}
          width={141}
          style={{ width: "130px", height: "auto" }}
        />
      </Box>
      <Stack
        padding={"4px 8px"}
        borderRadius={"200px"}
        width={"fit-content"}
        border={"1px solid"}
        borderColor={(theme) => theme.palette.ibmgrey[70]}
        position={"relative"}
        zIndex={2}
      >
        <Typography variant="caption">12-15 years</Typography>
      </Stack>

      <Box position={"relative"} zIndex={2}>
        <Typography lineHeight={"44px"} fontSize={"24px"} fontWeight={600}>
          Teen Communicators
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Structured grammar and fluency
        </Typography>
      </Box>
    </Stack>
  );
};

"use client";

import AppBar from "@/components/AppBar/AppBar";
import Footer from "@/components/Footer";
import JoinToday from "@/components/JoinToday/JoinToday";
import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

export default function ContactPage() {
  return (
    <Box>
      <AppBar />
      <ContactUs />
      <JoinToday />
      <Footer />
    </Box>
  );
}

function ContactUs() {
  return (
    <Box
      component={"div"}
      className="layout"
      paddingTop={"80px"}
      paddingBottom={"80px"}
    >
      <Box margin={"0px auto"} maxWidth={"600px"}>
        <Stack
          gap={"44px"}
          marginBottom={"80px"}
          sx={{
            textAlign: { xs: "left", md: "center" },
            alignItems: { xs: "start", md: "center" },
          }}
        >
          <Typography variant="h2" sx={{ textAlign: "inherit" }}>
            We’d love to{" "}
            <Typography
              component={"span"}
              color="primary"
              sx={{ font: "inherit" }}
            >
              talk
            </Typography>
          </Typography>
          <Typography color="textSecondary" sx={{ textAlign: "inherit" }}>
            Have a question, need guidance, or ready to get started? We're here
            to help every step of the way.
          </Typography>
          <Stack gap={"12px"}>
            <Stack gap={"20px"} flexDirection={"row"} alignItems={"center"}>
              <EmailIcon color="primary" fontSize="small" />
              <Typography
                component={"a"}
                href="mailto:info@linguasprouts.ca"
                sx={{
                  "&:hover": { color: (theme) => theme.palette.primary.main },
                }}
              >
                info@linguasprouts.ca
              </Typography>
            </Stack>
            <Stack gap={"20px"} flexDirection={"row"} alignItems={"center"}>
              <PhoneIcon color="primary" fontSize="small" />
              <Typography>+1 (778) 513 2427</Typography>
            </Stack>
            <Stack gap={"20px"} flexDirection={"row"} alignItems={"center"}>
              <WatchLaterIcon color="primary" fontSize="small" />
              <Typography>Available anytime</Typography>
            </Stack>
          </Stack>
        </Stack>

        <Image
          src={"/contact/contact-illustration.png"}
          alt="child drawing rocket"
          width={600}
          height={400}
        />
      </Box>
    </Box>
  );
}

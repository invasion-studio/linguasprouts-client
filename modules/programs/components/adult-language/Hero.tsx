"use client";

import {
  HeroButton,
  PrimaryButton,
} from "@/components/PrimaryButton/PrimaryButton";
import { alpha, Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <Box
        component={"div"}
        className="layout"
        position={"relative"}
        overflow={"hidden"}
      >
        <Stack
          height={"513px"}
          width={"513px"}
          borderRadius={"2000px"}
          justifyContent={"center"}
          alignItems={"center"}
          position={"absolute"}
          left={"-200px"}
          top={"-320px"}
          bgcolor={(theme) => alpha(theme.palette.primary.main, 0.08)}
          zIndex={-1}
          sx={{
            height: { xs: "270px", sm: "513px" },
            width: { xs: "270px", sm: "513px" },
            left: { xs: "-110px", sm: "-200px" },
            top: { xs: "-130px", sm: "-320px" },
          }}
        >
          <Box
            bgcolor={"white"}
            borderRadius={"1000px"}
            height={"222px"}
            width={"222px"}
            sx={{
              height: { xs: "116px", sm: "222px" },
              width: { xs: "116px", sm: "222px" },
            }}
          />
        </Stack>

        <Stack
          justifyContent={"space-between"}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            marginTop: { xs: "40px", md: "60px" },
            gap: { xs: "40px", md: "60px" },
          }}
        >
          <Stack
            width={"100%"}
            sx={{
              maxWidth: { xs: "unset", md: "600px" },
              marginBottom: { xs: "0px", md: "60px" },
              alignItems: { xs: "center", md: "unset" },
            }}
          >
            <Stack
              flexDirection={"row"}
              gap={"8px"}
              padding={"0px 6px"}
              border={"1px solid"}
              borderColor={(theme) => theme.palette.ibmgrey[30]}
              borderRadius={"200px"}
              width={"fit-content"}
            >
              <Image
                src={"/flag-french.svg"}
                alt="french flag"
                width={24}
                height={24}
              />
              <Typography
                variant="body2"
                color="textSecondary"
                padding={"6px 0px"}
              >
                Starting September 8th, 2026
              </Typography>
            </Stack>
            <Typography
              variant="h1"
              sx={{
                marginTop: { xs: "16px", md: "0px" },
                marginBottom: { xs: "16px", md: "20px" },
                textAlign: { xs: "center", md: "left" },
                position: "relative",
                zIndex: 2,
              }}
            >
              Learn French and Spanish at your own pace.
            </Typography>
            <Typography
              color="textSecondary"
              marginBottom={"32px"}
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              Connect with confidence. A warm, flexible French and Spanish
              program for adults — built around your goals, your schedule, and
              everyday life.
            </Typography>
            <Stack
              flexDirection={"row"}
              gap={"8px"}
              // sx={{ justifyContent: { xs: "center", md: "unset" } }}
            >
              <HeroButton
                component={Link}
                href="/adult-french-language/register"
              >
                Register Now
              </HeroButton>
              <PrimaryButton
                color="inherit"
                variant="outlined"
                sx={{
                  display: { xs: "none", md: "flex" },
                  color: (theme) => theme.palette.ibmgrey[70],
                  borderColor: (theme) => theme.palette.ibmgrey[30],
                }}
              >
                See What’s Included
              </PrimaryButton>
            </Stack>
          </Stack>

          <Box width={"100%"} sx={{ maxWidth: { xs: "unset", md: "600px" } }}>
            <Box
              margin={"0px auto"}
              height={"100%"}
              maxWidth={"416px"}
              position={"relative"}
              sx={{
                "& #heroImage": {
                  position: { xs: "relative", md: "absolute" },
                },
                "& #vector": {
                  width: { xs: "60px", sm: "120px" },
                  left: { xs: "0px", sm: "-60px" },
                },

                "& #dot-vector": {
                  width: { xs: "220px", sm: "315px" },
                  right: { xs: "30px", sm: "-31px" },
                },
              }}
            >
              <Image
                id="vector"
                src={"/program/adult-language/Vector 7.svg"}
                alt="vector"
                width={109}
                height={88}
                style={{
                  position: "absolute",
                  top: "80px",
                }}
              />

              <Image
                src={"/program/adult-language/dot-vector.svg"}
                alt="dot-vector"
                id="dot-vector"
                width={315}
                height={315}
                style={{
                  position: "absolute",
                  top: "-50px",
                }}
              />

              <Image
                id="heroImage"
                src={"/program/adult-language/hero-adult-language.png"}
                alt="French woman"
                width={327}
                height={544}
                style={{
                  maxHeight: "100%",
                  maxWidth: "80%",
                  // position: "absolute",
                  translate: "-50% ",
                  left: "50%",
                  zIndex: 2,
                  bottom: 0,
                }}
              />

              <Box
                bgcolor={"white"}
                padding={"10px 20px"}
                borderRadius={"16px"}
                border={"1px solid"}
                borderColor={(theme) => theme.palette.divider}
                position={"absolute"}
                sx={{
                  translate: "-50%",
                  left: "50%",
                  bottom: 12,
                  zIndex: 3,
                }}
              >
                <Stack
                  flexDirection={"row"}
                  gap={"8px"}
                  alignItems={"center"}
                  // flexWrap={"wrap"}
                >
                  <Stack flex={1} flexDirection={"row"} alignItems={"flex-end"}>
                    <Typography variant="h2" color="textSecondary">
                      $249
                      <Typography component={"span"} color="textSecondary">
                        /month
                      </Typography>
                    </Typography>
                  </Stack>

                  <Box
                    padding={"6px 16px"}
                    bgcolor={"#E7FEBB"}
                    borderRadius={"200px"}
                    height={"fit-content"}
                  >
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      noWrap
                    >
                      All inclusive
                    </Typography>
                  </Box>
                </Stack>
              </Box>

              <Box
                bgcolor={(theme) => alpha(theme.palette.primary.main, 0.08)}
                borderRadius={"100px 100px 0px 0px"}
                sx={{
                  width: "100%",
                  height: "160px",
                  position: "absolute",
                  translate: "-50% ",
                  left: "50%",
                  bottom: 0,
                }}
              />
            </Box>
          </Box>
        </Stack>
      </Box>

      {/* Banner strip */}
      <Stack
        bgcolor={"#F3F8F2"}
        borderTop={"1px solid"}
        borderBottom={"1px solid"}
        borderColor={(theme) => theme.palette.divider}
        component={"div"}
        className="layout"
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          paddingTop: { xs: "16px", md: "24px" },
          paddingBottom: { xs: "16px", md: "24px" },
          "& p": {
            font: { xs: "var(--font-caption)" },
          },
        }}
      >
        <Stack
          flexShrink={1}
          sx={{ padding: { xs: "0px 16px", sm: "0px 24px", md: "0px 48px" } }}
        >
          <Typography
            variant="subtitle1"
            color="textSecondary"
            textAlign={"center"}
          >
            A1 - C1
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            textAlign={"center"}
          >
            CEFR-aligned levels
          </Typography>
        </Stack>
        <Stack
          flexShrink={1}
          borderLeft={"1px solid"}
          borderRight={"1px solid"}
          borderColor={(theme) => theme.palette.ibmgrey[30]}
          sx={{ padding: { xs: "0px 16px", sm: "0px 24px", md: "0px 48px" } }}
        >
          <Typography
            variant="subtitle1"
            color="textSecondary"
            textAlign={"center"}
          >
            2× weekly
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            textAlign={"center"}
          >
            flexible schedule
          </Typography>
        </Stack>
        <Stack
          flexShrink={1}
          sx={{ padding: { xs: "0px 16px", sm: "0px 24px", md: "0px 48px" } }}
        >
          <Typography
            variant="subtitle1"
            color="textSecondary"
            textAlign={"center"}
          >
            3 formats
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            textAlign={"center"}
          >
            virtual, async, in-person
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}

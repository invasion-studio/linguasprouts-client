"use client";

import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function FrenchImmigration() {
  return (
    <Box
      component={"div"}
      className="layout"
      sx={{
        paddingTop: { xs: "60px", md: "120px" },
        paddingBottom: { xs: "60px", md: "80px" },
      }}
    >
      <Stack
        maxWidth={"1200px"}
        margin={"0px auto"}
        gap={"60px"}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: { xs: "start", md: "space-between" },
        }}
      >
        <Box flex={1}>
          <Typography
            variant="h2"
            marginBottom={"20px"}
            sx={{
              fontSize: { xs: "32px", md: "40px" },
              lineHeight: { xs: "44px", md: "56px" },
              marginBottom: { xs: "12px", md: "20px" },
            }}
          >
            French Immigration{" "}
            <Typography
              component={"span"}
              color="primary"
              sx={{ font: "inherit" }}
            >
              Sprint
            </Typography>
          </Typography>
          <Typography color="textSecondary" marginBottom={"32px"}>
            Build Your French Foundation for Canadian Immigration in Just 6
            weeks. With 72 live Instruction Hours, starting{" "}
            <Typography
              color="textSecondary"
              variant="subtitle1"
              component={"span"}
            >
              August 10th - September 19th
            </Typography>
          </Typography>
          <PrimaryButton
            component={Link}
            href="/french-immigration-sprint/register"
            color="primary"
          >
            Register Now
          </PrimaryButton>
        </Box>

        <Box flex={1}>
          <Image
            src={"/home/frenchImmigration.png"}
            alt={"Illustration"}
            width={390}
            height={330}
            style={{
              width: "100%",
              margin: "0px auto",
              maxWidth: 420,
              minWidth: 1,
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
}

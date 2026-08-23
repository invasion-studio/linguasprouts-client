"use client";

import { alpha, Box, Stack, Typography } from "@mui/material";

export default function TEFCanada() {
  return (
    <Box component={"div"} className="layout section" position={"relative"}>
      {/* Left square vector */}
      <Box
        bgcolor={(theme) => alpha(theme.palette.primary.main, 0.08)}
        position={"absolute"}
        width={"600px"}
        height={"600px"}
        left={-600}
        bottom={-100}
        zIndex={-1}
        sx={{ transform: "rotate(60deg)" }}
      />

      <Stack sx={{ gap: { xs: "40px", md: "60px" } }}>
        {/* Heading */}
        <Box maxWidth={"600px"} margin={"0px auto"}>
          <Typography variant="h2" textAlign={"center"}>
            From beginner to{" "}
            <Typography
              component={"span"}
              color="primary"
              sx={{ font: "inherit" }}
            >
              TEF Canada success
            </Typography>
          </Typography>
          <Typography color="textSecondary" textAlign={"center"}>
            Each level builds on the last, taking you step by step toward the
            French proficiency Canadian immigration pathways require.
          </Typography>
        </Box>

        <Stack gap={"20px"}>
          <Card
            price="$799"
            no="01"
            header1="Foundations (A1)"
            text1="Build your French foundation for everyday communication."
            header2="4 hrs/week"
            text2="12 weeks (48 hrs)"
          />
          <Card
            price="$899"
            no="02"
            header1="Progress (A2)"
            text1="Expand your vocabulary and communicate with more confidence."
            header2="4 hrs/week"
            text2="12 weeks (48 hrs)"
          />
          <Card
            price="$999"
            no="03"
            header1="Intermediate (B1)"
            text1="Strengthen your speaking, listening, reading & writing for real-life situations."
            header2="4 hrs/week"
            text2="16 weeks (64 hrs)"
          />
          <Card
            price="$1299"
            no="04"
            header1="TEF Mastery (B2)"
            text1="Achieve upper-intermediate proficiency and get ready for TEF Canada."
            header2="4 hrs/week"
            text2="16 weeks (64 hrs)"
          />
          <Card
            price="$499"
            no="05"
            header1="TEF Success Bootcamp"
            text1="Intensive exam preparation with full-length mocks, strategies and personalized feedback."
            header2="8 hrs/week"
            text2="4 weeks (32 hrs)"
          />
        </Stack>

        <Stack
          border={"1px solid"}
          borderRadius={"16px"}
          bgcolor={"#E7F7FC"}
          borderColor={(theme) => theme.palette.secondary.main}
          gap={"16px"}
          justifyContent={"space-between"}
          sx={{
            padding: { xs: "20px", md: "24px 40px" },
            alignItems: { xs: "strech", md: "center" },
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Stack gap={"8px"}>
            <Stack
              padding={"6px 16px"}
              bgcolor={"white"}
              borderRadius={"50px"}
              width={"fit-content"}
              sx={{ marginBottom: { xs: "8px", md: "0px" } }}
            >
              <Typography variant="body2" color="secondary">
                Complete Pathway Package for All 5 Levels
              </Typography>
            </Stack>

            <Typography
              variant="h3"
              sx={{ font: { xs: "var(--font-h4)", md: "var(--font-h3)" } }}
            >
              14 months (316+ total hours)
            </Typography>

            <Typography color="textSecondary">
              Flexible payment plans available.
            </Typography>
          </Stack>

          <Stack
            gap={"8px"}
            alignItems={"flex-end"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            sx={{
              alignItems: { xs: "center", sm: "flex-end" },
              flexDirection: { xs: "row", sm: "column" },
              justifyContent: { xs: "flex-start", sm: "center" },
            }}
          >
            <Stack
              alignItems={"center"}
              sx={{
                flexDirection: { xs: "row-reverse", sm: "row" },
                gap: { xs: "12px", sm: "16px" },
              }}
            >
              <Typography variant="h4" color="textDisabled">
                $4,495
              </Typography>
              <Typography variant="h3">$3,996</Typography>
            </Stack>

            <Stack
              border={"1px solid"}
              borderColor={"#AE293F"}
              bgcolor={"#FFF3F5"}
              width={"fit-content"}
              borderRadius={"50px"}
              sx={{ padding: { xs: "1px 8px", sm: "6px 20px" } }}
            >
              <Typography variant="body2" color="#AE293F">
                Save $499
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

function Card(props: {
  no: string;
  price: string;
  header1: string;
  header2: string;
  text1: string;
  text2: string;
}) {
  return (
    <Stack
      padding={"20px"}
      borderRadius={"16px"}
      gap={"16px"}
      border={"1px solid"}
      borderColor={(theme) => theme.palette.divider}
    >
      <Stack
        flexDirection={"row"}
        gap={"16px"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          height={"48px"}
          width={"48px"}
          bgcolor={(theme) => theme.palette.ibmgrey[10]}
          borderRadius={"50%"}
        >
          <Typography variant="subtitle1" color="textSecondary">
            {props.no}
          </Typography>
        </Stack>

        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          padding={"6px 20px"}
          bgcolor={(theme) => alpha(theme.palette.primary.main, 0.08)}
          borderRadius={"50px"}
        >
          <Typography variant="h4" color="primary">
            {props.price}
          </Typography>
        </Stack>
      </Stack>

      <Stack
        flexDirection={"row"}
        gap={"16px"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box flex={3}>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            marginBottom={"4px"}
          >
            {props.header1}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {props.text1}
          </Typography>
        </Box>

        <Stack flex={2} alignItems={"flex-end"}>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            marginBottom={"4px"}
          >
            {props.header2}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {props.text2}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

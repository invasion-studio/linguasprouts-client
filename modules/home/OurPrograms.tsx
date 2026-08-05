"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function OurPrograms() {
  return (
    <Box
      component={"div"}
      className="layout"
      bgcolor={"#F6FAF5"}
      sx={{
        paddingTop: { xs: "60px", md: "100px" },
        paddingBottom: { xs: "60px", md: "100px" },
      }}
    >
      <Box>
        <Typography
          variant="h2"
          color="textSecondary"
          align="center"
          sx={{
            marginBottom: { xs: "60px", md: "60px" },
            fontSize: { xs: "32px", md: "40px" },
            lineHeight: { xs: "44px", md: "56px" },
          }}
        >
          Our{" "}
          <Typography
            component={"span"}
            color="primary"
            sx={{ font: "inherit" }}
          >
            Programs
          </Typography>
        </Typography>
      </Box>

      <Box
        flexDirection={"row"}
        maxWidth={"1200px"}
        margin={"0px auto"}
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          gap: { xs: "40px", sm: "24px", lg: "40px" },
          // maxWidth: { xs: "1200px", sm: "350px", md: "1200px" },
        }}
      >
        <ProgramCard
          imageSrc="/home/after-school.jpg"
          title="After School Language Program"
          description="An engaging afterschool program that helps children learn, French, Spanish or Mandarin."
          href="/afterschool/register"
          mainColor="#2EC610"
          secondaryColor="#8AFF8A"
        />
        <ProgramCard
          imageSrc="/home/immigration-pathways1.png"
          title="French Immigration Pathway"
          description="A structured, setp-by-step French learning pathway designed for Canadian immigration success."
          href="/french-immigration-pathway/register"
          mainColor="#0F91BD"
          secondaryColor="#88EFFE"
        />
        <ProgramCard
          imageSrc="/home/adult-learning1.jpg"
          title="Adult French Language Program"
          description="For adults who want to learn French for personal growth, travel, career, and everyday life."
          href="/adult-french-language/register"
          mainColor="#AE293F"
          secondaryColor="#FF8A9D"
        />
      </Box>
    </Box>
  );
}

const ProgramCard = ({
  imageSrc,
  title,
  description,
  href,
  mainColor,
  secondaryColor,
}: {
  imageSrc: string;
  title: string;
  description: string;
  href: string;
  mainColor: string;
  secondaryColor: string;
}) => {
  return (
    <Stack bgcolor={"white"} flex={1}>
      <Box height={"164px"} position={"relative"}>
        <Image
          src={imageSrc}
          alt="Program Card Image"
          fill
          style={{
            position: "absolute",
            objectPosition: "center",
            objectFit: "cover",
          }}
        />
      </Box>

      <Box padding={"20px"} marginBottom={"12px"} flex={1}>
        <Typography
          variant="h4"
          marginBottom={"12px"}
          sx={{ color: (theme) => theme.palette.ibmgrey[90] }}
        >
          {title}
        </Typography>
        <Typography color="textSecondary">{description}</Typography>
      </Box>

      <Stack bgcolor={secondaryColor} flexDirection={"row"}>
        <Button
          href={href}
          LinkComponent={Link}
          sx={{
            borderRadius: "0px",
            color: "white",
            padding: "16px 32px",
            bgcolor: mainColor,
            textTransform: "none",
          }}
        >
          <Typography variant="subtitle1" color="white">
            Learn More
          </Typography>
        </Button>
        <Box
          width={0}
          height={0}
          borderTop={`54px solid ${mainColor}`}
          borderRight={"54px solid transparent"}
        />
      </Stack>
    </Stack>
  );
};

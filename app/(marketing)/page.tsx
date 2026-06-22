"use client";

import Logo from "@/components/Logo/Logo";
import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import {
  Box,
  Drawer,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@/public/hugeicons_menu-11.svg";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function Home() {
  const mediumBreakpoint = useMediaQuery("(min-width: 900px)");
  return (
    <Box bgcolor={"#F3F8F2"} minHeight={"100vh"}>
      <AppBar />

      <Box
        component={"div"}
        className="layout"
        maxWidth={"1200px"}
        margin={"0px auto"}
        marginBottom={"32px"}
      >
        <Box>
          <Typography
            align="center"
            fontWeight={700}
            color="#697B65"
            fontFamily="playpen sans"
            sx={{
              fontSize: { xs: "48px", md: "80px" },
              lineHeight: { xs: "64px", md: "108px" },
              marginTop: { xs: "70px", md: "80px" },
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
            sx={{ maxWidth: "380px", textAlign: { xs: "center", md: "left" } }}
          >
            From their first words to full conversations, we guide children on a
            joyful journey into new languages—helping them connect with the
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

      {/* Footer */}
      <Stack
        className="layout"
        paddingTop={"20px"}
        paddingBottom={"20px"}
        borderTop={"1px solid"}
        borderColor={(theme) => theme.palette.divider}
        gap={"16px"}
        alignItems={"center"}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "start", md: "space-between" },
        }}
      >
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getUTCFullYear()} Linguasprouts Academy
        </Typography>

        <Stack flexDirection={"row"} gap={"16px"}>
          <Link href="/register">
            <Typography variant="body2" color="textSecondary">
              Register
            </Typography>
          </Link>
          <Link href="/">
            <Typography variant="body2" color="textSecondary">
              Home
            </Typography>
          </Link>
          <Link href="/admin">
            <Typography variant="body2" color="textSecondary">
              Admin
            </Typography>
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}

export const appBarHeight = "72px";

type DrawerContextType = {
  drawerOpen: boolean;
  setDrawerOpen?: Dispatch<SetStateAction<boolean>>;
};
const drawerContext = createContext<DrawerContextType>({ drawerOpen: false });
const useDrawerContext = () => useContext(drawerContext);

function AppBar() {
  const menuBreakpoint = useMediaQuery("(max-width: 1024px)");
  const menuBreakpoint2 = useMediaQuery("(min-width: 1025px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <drawerContext.Provider value={{ drawerOpen, setDrawerOpen }}>
      <Stack
        component={"div"}
        className="layout"
        bgcolor={"white"}
        height={"72px"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Logo />

        {menuBreakpoint2 && (
          <PrimaryButton
            color="secondary"
            href="/summercamp2026"
            LinkComponent={Link}
          >
            Summer Camp 2026
          </PrimaryButton>
        )}

        {menuBreakpoint && (
          <IconButton onClick={() => setDrawerOpen && setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
        )}

        {menuBreakpoint && (
          <NavDrawer open={drawerOpen} setOpen={setDrawerOpen} />
        )}
      </Stack>
    </drawerContext.Provider>
  );
}

const NavDrawer = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const toggleDrawer = (isOpen: boolean) => () => {
    setOpen(isOpen);
  };

  return (
    <Drawer
      open={open}
      onClose={toggleDrawer(false)}
      anchor="top"
      elevation={0}
      sx={{
        ["& .MuiPaper-root"]: {
          borderRadius: "0px 0px 32px 32px",
        },
      }}
    >
      <Box component={"div"} className="layout">
        <Stack
          component={"div"}
          bgcolor={"white"}
          height={appBarHeight}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          marginBottom={"32px"}
        >
          <Logo />

          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <Box padding={"16px 0px 20px 0px"}>
          <Link href={"/summercamp2026"}>
            <PrimaryButton
              sx={{ width: "100%" }}
              onClick={() => setOpen(false)}
              color="secondary"
            >
              Summer Camp 2026{" "}
            </PrimaryButton>
          </Link>
        </Box>
      </Box>
    </Drawer>
  );
};

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

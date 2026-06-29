"use client";

import Logo from "@/components/Logo/Logo";
import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import {
  useMediaQuery,
  Stack,
  IconButton,
  Drawer,
  Box,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { createContext } from "react";
import MenuIcon from "@/public/hugeicons_menu-11.svg";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from "next/navigation";

export const appBarHeight = "72px";

type DrawerContextType = {
  drawerOpen: boolean;
  setDrawerOpen?: Dispatch<SetStateAction<boolean>>;
};
const drawerContext = createContext<DrawerContextType>({ drawerOpen: false });
const useDrawerContext = () => useContext(drawerContext);

export default function AppBar() {
  const maxWidth1024px = useMediaQuery("(max-width: 899px)");
  const minWidth1024px = useMediaQuery("(min-width: 900px)");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

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

        {minWidth1024px && (
          <Stack gap={"24px"} flexDirection={"row"}>
            {NavLinks.map((link, i) => (
              <Link key={i} href={link.href}>
                <Typography
                  variant={pathname == link.href ? "subtitle2" : "body2"}
                  color={pathname == link.href ? "primary" : "textSecondary"}
                  sx={{
                    "&:hover": { color: (theme) => theme.palette.primary.main },
                  }}
                >
                  {link.name}
                </Typography>
              </Link>
            ))}
          </Stack>
        )}

        {minWidth1024px && (
          <PrimaryButton
            color="secondary"
            href="/summercamp2026"
            LinkComponent={Link}
          >
            Summer Camp 2026
          </PrimaryButton>
        )}

        {maxWidth1024px && (
          <IconButton onClick={() => setDrawerOpen && setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
        )}

        {maxWidth1024px && (
          <NavDrawer open={drawerOpen} setOpen={setDrawerOpen} />
        )}
      </Stack>
    </drawerContext.Provider>
  );
}

const NavLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const NavDrawer = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();
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
          // marginBottom={"32px"}
        >
          <Logo />

          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <Box padding={"20px 0px 20px 0px"}>
          <Stack gap={"20px"} marginBottom={"32px"}>
            {NavLinks.map((link, i) => (
              <Link key={i} href={link.href}>
                <Typography
                  variant={pathname == link.href ? "subtitle1" : "body1"}
                  color={pathname == link.href ? "primary" : "textSecondary"}
                  sx={{
                    "&:hover": { color: (theme) => theme.palette.primary.main },
                  }}
                >
                  {link.name}
                </Typography>
              </Link>
            ))}
          </Stack>

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

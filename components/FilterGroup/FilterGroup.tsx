"use client";

import { Button, Stack } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createContext, ReactNode, useContext } from "react";
import DoneIcon from "@mui/icons-material/Done";
import theme from "@/theme";

const FilterContext = createContext<{ queryKey: string }>({ queryKey: "" });
const useFilterContext = () => useContext(FilterContext);

export default function FilterGroup({
  queryKey,
  children,
}: {
  queryKey: string;
  children: ReactNode;
}) {
  return (
    <Stack flexDirection={"row"} gap={"8px"}>
      <FilterContext.Provider value={{ queryKey }}>
        {children}
      </FilterContext.Provider>
    </Stack>
  );
}

export function FilterButton({
  queryValue,
  children,
}: {
  queryValue: string | null;
  children: ReactNode;
}) {
  const { queryKey } = useFilterContext();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchValue = searchParams.get(queryKey);

  const isActive = queryValue === searchValue;

  const handleClick = () => {
    router.push(
      queryValue ? `${pathname}?${queryKey}=${queryValue}` : pathname,
    );
  };

  return (
    <Button
      onClick={handleClick}
      variant="contained"
      startIcon={isActive ? <DoneIcon sx={{ fontSize: "20px" }} /> : undefined}
      color={isActive ? "primary" : "inherit"}
      disableElevation
      sx={{
        padding: "4px 16px",
        borderRadius: "200px",
        bgcolor: (theme) => (!isActive ? theme.palette.ibmgrey[10] : undefined),
        color: (theme) => (!isActive ? theme.palette.text.primary : "white"),
        textTransform: "capitalize",
      }}
    >
      {children}
    </Button>
  );
}

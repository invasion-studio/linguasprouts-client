"use client";

import { Box, Stack, Typography } from "@mui/material";
import { useGetRegisteredChildren } from "@/hooks/useGetRegisteredChildren";
import FilterGroup, { FilterButton } from "../FilterGroup/FilterGroup";

type ColumnProp = { key: string; header: string }[];
const columns = [
  { key: "fullName", header: "Child Name" },
  { key: "age", header: "Age" },
  { key: "class", header: "Class" },
  { key: "registrationId", header: "Registration ID" },
];

export default function ClassListTable() {
  const { data } = useGetRegisteredChildren();
  const rows = data?.data || [];

  return (
    <>
      <DesktopTable columns={columns} rows={rows} keyProp="childId" />
      <MobileTable columns={columns} rows={rows} keyProp="childId" />
    </>
  );
}

const MobileTable = ({
  columns,
  rows,
  keyProp,
}: {
  columns: ColumnProp;
  rows: { [key: string]: any }[];
  keyProp: string;
}) => {
  return (
    <Stack
      borderRadius={"8px"}
      overflow={"hidden"}
      gap={"4px"}
      sx={{ display: { xs: "flex", md: "none" } }}
    >
      {/* Filter */}
      <Box padding={"16px"} bgcolor={"white"}>
        <FilterGroup queryKey="class">
          <FilterButton queryValue={null}>All</FilterButton>
          <FilterButton queryValue={"french"}>French</FilterButton>
          <FilterButton queryValue={"spanish"}>Spanish</FilterButton>
        </FilterGroup>
      </Box>

      {rows.map((r, i) => (
        <MobileItem key={i} columns={columns} row={r} />
      ))}
    </Stack>
  );
};

const MobileItem = ({
  columns,
  row,
}: {
  columns: ColumnProp;
  row: { [key: string]: any };
}) => {
  return (
    <Stack bgcolor={"white"} padding={"16px"} gap={"12px"}>
      <Typography variant="subtitle2">{row.fullName}</Typography>

      {columns.map((c) => (
        <Box key={c.key} display={"contents"}>
          {c.key !== "fullName" ? (
            <Stack
              flexDirection={"row"}
              justifyContent={"space-between"}
              gap={"32px"}
            >
              <Typography
                variant="caption"
                color="textSecondary"
                flexShrink={0}
              >
                {c.header}
              </Typography>
              <Typography
                variant="caption"
                textAlign={"right"}
                noWrap
                sx={
                  c.key === "class"
                    ? {
                        color: (theme) =>
                          row[c.key] === "french"
                            ? theme.palette.primary.main
                            : theme.palette.secondary.main,
                        fontWeight: 600,
                      }
                    : {}
                }
              >
                {row[c.key]}
              </Typography>
            </Stack>
          ) : undefined}
        </Box>
      ))}
    </Stack>
  );
};

const DesktopTable = ({
  columns,
  rows,
  keyProp,
}: {
  columns: ColumnProp;
  rows: { [key: string]: any }[];
  keyProp: string;
}) => {
  return (
    <Box
      padding={"8px 24px"}
      bgcolor={"white"}
      borderRadius={"8px"}
      sx={{ display: { xs: "none", md: "block" } }}
    >
      {/* Filter */}
      <Box marginBottom={"20px"} marginTop={"16px"}>
        <FilterGroup queryKey="class">
          <FilterButton queryValue={null}>All</FilterButton>
          <FilterButton queryValue={"french"}>French</FilterButton>
          <FilterButton queryValue={"spanish"}>Spanish</FilterButton>
        </FilterGroup>
      </Box>

      {/* Header */}
      <Stack flexDirection={"row"} gap={"20px"} padding={"12px 0px"}>
        {columns.map((c) => (
          <Typography
            key={c.key}
            flex={1}
            variant="caption"
            color="textSecondary"
            sx={{ wordBreak: "break-all" }}
          >
            {c.header}
          </Typography>
        ))}
      </Stack>

      {/* Rows */}
      {rows.map((r, i) => (
        <Stack
          key={i}
          flexDirection={"row"}
          gap={"20px"}
          padding={"16px 0px"}
          borderTop={"1px solid"}
          borderColor={(theme) => theme.palette.divider}
          alignItems={"center"}
        >
          {columns.map((c) => (
            <Typography
              key={c.key}
              flex={1}
              variant="body2"
              noWrap
              sx={{
                wordBreak: "break-all",
                ...(c.key === "class" && {
                  color: (theme) =>
                    r[c.key] === "french"
                      ? theme.palette.primary.main
                      : theme.palette.secondary.main,
                  fontWeight: 600,
                }),
              }}
            >
              {r[c.key]}
            </Typography>
          ))}
        </Stack>
      ))}
    </Box>
  );
};

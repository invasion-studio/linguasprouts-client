"use client";

import { Box, Stack, Typography } from "@mui/material";
import { useGetRegistrations } from "@/hooks/useGetRegistrations";

type ColumnProp = { key: string; header: string }[];
const columns = [
  { key: "parentName", header: "Parent name" },
  { key: "email", header: "Email" },
  { key: "noOfChildren", header: "No of Registered Children" },
  { key: "date", header: "Date" },
];

export default function RegisteredTable() {
  const { data: regs } = useGetRegistrations();
  const rows =
    regs?.data.map((reg) => ({
      ...reg,
      parentName: reg.parent?.fullName ?? reg.parentId,
      email: reg.parent?.email ?? "N/A",
      noOfChildren: reg.children?.length ?? 0,
      date: new Date(reg.createdAt).toLocaleDateString("en-CA", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    })) || [];

  return (
    <>
      <DesktopTable columns={columns} rows={rows} keyProp="registrationId" />
      <MobileTable columns={columns} rows={rows} keyProp="registrationId" />
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
      {rows.map((r) => (
        <MobileItem key={r[keyProp]} columns={columns} row={r} />
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
      <Typography variant="subtitle2">{row.parentName}</Typography>

      {columns.map((c) => (
        <Box key={c.key} display={"contents"}>
          {c.key !== "parentName" ? (
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
              <Typography variant="caption" textAlign={"right"} noWrap>
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
      {rows.map((r) => (
        <Stack
          key={r[keyProp]}
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
              sx={{ wordBreak: "break-all" }}
            >
              {r[c.key]}
            </Typography>
          ))}
        </Stack>
      ))}
    </Box>
  );
};

"use client";

import {
  DesktopTableSkeleton,
  MobileTableSkeleton,
  NoDataSkeleton,
} from "@/src/shared/ui/admin/AdminTableSkeleton";

import { alpha, Box, Divider, Stack, Theme, Typography } from "@mui/material";

type ColumnProp = { key: string; header: string };
type RowProp = { id: string } & { [key: string]: any };

const interactiveSx = {
  cursor: "pointer",
  transition: "background-color 120ms ease",
  "&:hover": {
    bgcolor: (theme: Theme) => alpha(theme.palette.primary.main, 0.06),
  },
  "&:active": {
    bgcolor: (theme: Theme) => alpha(theme.palette.primary.main, 0.14),
  },
  "&:focus-visible": {
    outline: (theme: Theme) => `2px solid ${theme.palette.primary.main}`,
    outlineOffset: "-2px",
  },
  "@media (prefers-reduced-motion: reduce)": { transition: "none" },
};

const clickableProps = (id: string, onClick?: (id: string) => void) => ({
  role: "button",
  tabIndex: 0,
  onClick: () => onClick?.(id),
  onKeyDown: (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick?.(id);
    }
  },
});

export default function AdminTable(props: {
  columns: ColumnProp[];
  rows: RowProp[];
  isPending: boolean;
  onRowClick: (id?: string) => void;
}) {
  return (
    <>
      <DesktopTable {...props} />
      <MobileTable {...props} />
    </>
  );
}

const DesktopTable = ({
  columns,
  rows,
  isPending,
  onRowClick,
}: {
  columns: ColumnProp[];
  rows: RowProp[];
  isPending: boolean;
  onRowClick?: (id: string) => void;
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

      {/* Rows Skeleton */}
      {isPending && <DesktopTableSkeleton columns={columns} />}

      {/* Row Empty */}
      {rows.length === 0 && !isPending && (
        <>
          <Divider />
          <NoDataSkeleton />
        </>
      )}

      {/* Rows */}
      {rows.map((r) => (
        <Stack
          component={"div"}
          key={r.id}
          flexDirection={"row"}
          gap={"20px"}
          padding={"16px 24px"}
          margin={"0px -24px"}
          borderTop={"1px solid"}
          borderColor={(theme) => theme.palette.divider}
          alignItems={"center"}
          {...clickableProps(r.id, onRowClick)}
          sx={interactiveSx}
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

const MobileTable = ({
  columns,
  rows,
  isPending,
  onRowClick,
}: {
  columns: ColumnProp[];
  rows: RowProp[];
  isPending: boolean;
  onRowClick?: (id: string) => void;
}) => {
  return (
    <Stack
      overflow={"hidden"}
      gap={"16px"}
      sx={{ display: { xs: "flex", md: "none" } }}
    >
      {/* Skeleton */}
      {isPending && <MobileTableSkeleton />}

      {/* Row Empty */}
      {rows.length === 0 && !isPending && <NoDataSkeleton />}

      {rows.map((r) => (
        <MobileItem key={r.id} onClick={onRowClick} columns={columns} row={r} />
      ))}
    </Stack>
  );
};

const MobileItem = ({
  columns,
  row,
  onClick,
}: {
  columns: ColumnProp[];
  row: RowProp;
  onClick?: (id: string) => void;
}) => {
  const headerKey = columns[0].key;
  return (
    <Stack
      borderRadius={"8px"}
      bgcolor={"white"}
      padding={"16px"}
      gap={"16px"}
      component={"div"}
      {...clickableProps(row.id, onClick)}
      sx={interactiveSx}
    >
      {columns.map((c) => (
        <Box key={c.key} display={"contents"}>
          <Stack justifyContent={"space-between"} gap={"4px"}>
            <Typography variant="caption" color="textSecondary" flexShrink={0}>
              {c.header}
            </Typography>
            <Typography variant="body2">{row[c.key]}</Typography>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};

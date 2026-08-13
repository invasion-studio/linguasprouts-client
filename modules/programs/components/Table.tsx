"use client";

import {
  DesktopTableSkeleton,
  MobileTableSkeleton,
  NoDataSkeleton,
} from "@/components/AdminTableSkeleton/AdminTableSkeleton";
import { Box, Divider, Stack, Typography } from "@mui/material";

type ColumnProp = { key: string; header: string };
type RowProp = { id: string } & { [key: string]: any };

const columns = [
  { key: "parentName", header: "Parent name" },
  { key: "email", header: "Email" },
  { key: "noOfChildren", header: "No of Registered Children" },
  { key: "date", header: "Date" },
];

export default function StyledTable(props: {
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
          padding={"16px 0px"}
          borderTop={"1px solid"}
          borderColor={(theme) => theme.palette.divider}
          alignItems={"center"}
          onClick={() => onRowClick && onRowClick(r.id)}
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
      borderRadius={"8px"}
      overflow={"hidden"}
      gap={"4px"}
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
      bgcolor={"white"}
      padding={"16px"}
      gap={"12px"}
      component={"div"}
      onClick={() => onClick && onClick(row.id)}
    >
      <Typography variant="subtitle2">{row[headerKey]}</Typography>

      {columns.map((c) => (
        <Box key={c.key} display={"contents"}>
          {c.key !== headerKey ? (
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

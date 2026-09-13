"use client";

import { Stack, Box, Typography, Skeleton } from "@mui/material";

export const MobileTableSkeleton = () => {
  const data = [1, 2, 3];
  return (
    <>
      {data.map((r) => (
        <MobileItemSkeleton key={r} />
      ))}
    </>
  );
};

const MobileItemSkeleton = () => {
  const data = [1, 2, 3];
  return (
    <Stack bgcolor={"white"} padding={"16px"} gap={"12px"}>
      <Typography variant="subtitle2">
        <Skeleton sx={{ width: "120px" }} />
      </Typography>

      {data.map((c) => (
        <Stack
          key={c}
          flexDirection={"row"}
          justifyContent={"space-between"}
          gap={"32px"}
        >
          <Typography variant="caption" color="textSecondary" flexShrink={0}>
            <Skeleton width={c === 3 ? "100px" : "70px"} />
          </Typography>
          <Typography variant="caption" textAlign={"right"}>
            <Skeleton width={c === 2 ? "80px" : "100px"} />
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export const DesktopTableSkeleton = ({ columns }: { columns: any[] }) => {
  const data = [1, 2, 3];
  return (
    <>
      {/* Rows */}
      {data.map((r) => (
        <Stack
          key={r}
          flexDirection={"row"}
          gap={"20px"}
          padding={"16px 0px"}
          borderTop={"1px solid"}
          borderColor={(theme) => theme.palette.divider}
          alignItems={"center"}
        >
          {columns.map((c) => (
            <Typography key={c.key} flex={1} variant="body2" noWrap>
              <Skeleton width={"80%"} />
            </Typography>
          ))}
        </Stack>
      ))}
    </>
  );
};

export const NoDataSkeleton = () => {
  return (
    <Stack
      padding={"40px 20px"}
      bgcolor={"white"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography variant="body2" color="textSecondary" textAlign={"center"}>
        No data found
      </Typography>
    </Stack>
  );
};

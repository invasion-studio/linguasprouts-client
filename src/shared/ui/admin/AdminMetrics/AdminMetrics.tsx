"use client";

import { Box, Skeleton, Stack, Typography } from "@mui/material";
import style from "./AdminMetrics.module.css";

export type AdminMetric = {
  key: string;
  value: string;
};

export default function AdminMetrics({
  metrics,
  lenght,
}: {
  metrics?: AdminMetric[];
  lenght: number;
}) {
  if (!metrics) {
    return <AdminMetricsSkeleton arrayLenght={lenght} />;
  }

  return (
    <Stack id={style.container}>
      {metrics.map((metric) => (
        <MetricsCard key={metric.key} metric={metric} />
      ))}
    </Stack>
  );
}

const MetricsCard = ({ metric }: { metric: AdminMetric }) => {
  return (
    <Box component={"div"} id={style.card} bgcolor={"white"} flex={1}>
      <Typography marginBottom={"8px"} variant="body2" color="textSecondary">
        {metric.key}
      </Typography>
      <Typography variant="h3">{metric.value}</Typography>
    </Box>
  );
};

const AdminMetricsSkeleton = ({ arrayLenght }: { arrayLenght: number }) => {
  const metrics = [];
  for (let i = 0; i < arrayLenght; i++) {
    metrics.push(i);
  }
  return (
    <Stack id={style.container}>
      {metrics.map((metric) => (
        <MetricsCardSkeleton key={metric} />
      ))}
    </Stack>
  );
};

const MetricsCardSkeleton = () => {
  return (
    <Box component={"div"} id={style.card} bgcolor={"white"} flex={1}>
      <Typography
        marginBottom={"8px"}
        variant="subtitle2"
        color="textSecondary"
      >
        <Skeleton width={"100px"} />
      </Typography>
      <Typography variant="h3">
        <Skeleton width={"50px"} />
      </Typography>
    </Box>
  );
};

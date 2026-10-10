"use client";

import { Box, Stack, Typography } from "@mui/material";
import ProgramCard from "./ProgramCard";

export default function ProgramList() {
  return (
    <Stack gap={"40px"}>
      <Stack gap={"8px"}>
        <ProgramCard label="Day Camp" href="/admin/daycamp" isActive />
        <ProgramCard
          label="French Immigration Sprint - Oct / Nov"
          href="/admin/french-immigration-sprint/orders?startDate=2026-09-12&endDate=2026-11-01&session=Oct%20/%20Nov"
          isActive
        />
        <ProgramCard
          label="After School Language"
          href="/admin/after-school-language"
          isActive
        />
        {/* Past Programs */}
        <ProgramCard
          label="French Immigration Sprint - Aug / Sep"
          href="/admin/french-immigration-sprint/orders?startDate=2026-07-01&endDate=2026-09-01&session=Aug%20/%20Sep"
        />
        <ProgramCard label="Summer Camp 2026" href="/admin/orders" />
      </Stack>
    </Stack>
  );
}

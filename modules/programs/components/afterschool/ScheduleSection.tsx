"use client";

import {
  Stack,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { AfterSchoolRegPayload } from "../../types/afterschoolReg";

const scheduleGroups = [
  "Monday & Wednesday",
  "Tuesday & Thursday",
  "Friday & Saturday",
];

export default function ScheduleSection({
  formData,
  handleScheduleChange,
}: {
  formData: AfterSchoolRegPayload;
  handleScheduleChange: (value: string) => void;
}) {
  const selectedGroup = (() => {
    const [first, second] = formData.schedule;

    if (!first && !second) {
      return "";
    }

    const selectedDays = [first?.day, second?.day].filter(Boolean);

    if (selectedDays.length === 2) {
      const joined = selectedDays.join(" & ");
      return scheduleGroups.includes(joined) ? joined : "";
    }

    return "";
  })();

  return (
    <Stack gap={3}>
      <Typography>Choose one day pair for the schedule.</Typography>

      <FormControl fullWidth>
        <InputLabel>Day pair</InputLabel>
        <Select
          value={selectedGroup}
          label="Day pair"
          onChange={(e) => handleScheduleChange(e.target.value as string)}
        >
          <MenuItem value="">None</MenuItem>
          {scheduleGroups.map((group) => (
            <MenuItem key={group} value={group}>
              {group}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}

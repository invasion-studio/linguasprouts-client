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

const timeSlots = ["2:00pm", "3:20pm", "4:40pm", "6:00pm", "7:20pm"];
const SaturdayTimeSlots = ["9:00am", "10:20am", "11:40am", "1:00pm", "2:20pm"];

export default function ScheduleSection({
  formData,
  handleScheduleChange,
  handleScheduleTimeChange,
}: {
  formData: AfterSchoolRegPayload;
  handleScheduleChange: (value: string) => void;
  handleScheduleTimeChange: (value: string, Saturday?: boolean) => void;
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

  const Weekdaytime =
    formData.schedule.length > 0 ? formData.schedule[0].time : "";

  const correctedWeekDayTime = timeSlots.includes(Weekdaytime)
    ? Weekdaytime
    : "";

  const saturdayTime =
    formData.schedule.find((s) => s.day === "Saturday")?.time || "";

  const correctedSatTime = SaturdayTimeSlots.includes(saturdayTime)
    ? saturdayTime
    : "";

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

      <FormControl fullWidth>
        <InputLabel>
          {formData.schedule.some((s) => s.day == "Friday")
            ? "Friday Time"
            : "Weekday Time"}
        </InputLabel>
        <Select
          value={correctedWeekDayTime}
          label={
            formData.schedule.some((s) => s.day == "Friday")
              ? "Friday Time"
              : "Weekday Time"
          }
          onChange={(e) => handleScheduleTimeChange(e.target.value as string)}
        >
          <MenuItem value="">None</MenuItem>
          {timeSlots.map((group) => (
            <MenuItem key={group} value={group}>
              {group}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {formData.schedule.some((s) => s.day == "Saturday") && (
        <FormControl fullWidth>
          <InputLabel>Saturday Time</InputLabel>
          <Select
            value={correctedSatTime}
            label="Saturday Time"
            onChange={(e) =>
              handleScheduleTimeChange(e.target.value as string, true)
            }
          >
            <MenuItem value="">None</MenuItem>
            {SaturdayTimeSlots.map((group) => (
              <MenuItem key={group} value={group}>
                {group}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Stack>
  );
}

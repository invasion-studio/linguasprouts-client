"use client";

import {
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { AfterSchoolRegPayload } from "../../types/afterschoolReg";

export default function ChildSection({
  formData,
  updateChild,
}: {
  formData: AfterSchoolRegPayload;
  updateChild: any;
}) {
  return (
    <Stack gap={3}>
      <TextField
        label="Child full name"
        value={formData.child.fullName}
        onChange={(e) => updateChild({ fullName: e.target.value })}
      />

      <FormControl>
        <InputLabel>Language</InputLabel>
        <Select
          value={formData.child.language}
          label="Language"
          onChange={(e) => updateChild({ language: e.target.value })}
        >
          <MenuItem value="French">French</MenuItem>
          <MenuItem value="Spanish">Spanish</MenuItem>
          <MenuItem value="Mandarin">Mandarin</MenuItem>
          <MenuItem value="Igbo">Igbo</MenuItem>
          <MenuItem value="Yoruba">Yoruba</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Age group</InputLabel>
        <Select
          value={formData.child.ageGroup}
          label="Age group"
          onChange={(e) => updateChild({ ageGroup: e.target.value })}
        >
          <MenuItem value="5-7">5 - 7</MenuItem>
          <MenuItem value="8-11">8 - 11</MenuItem>
          <MenuItem value="12-15">12 - 15</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}

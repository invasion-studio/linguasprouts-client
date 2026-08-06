"use client";

import { Stack, TextField } from "@mui/material";
import { FrenchImmigSprintRegPayload } from "../../types/frenchImmigrationSprint";

export default function StudentSection({
  formData,
  updateStudent,
}: {
  formData: FrenchImmigSprintRegPayload;
  updateStudent: (
    patch: Partial<FrenchImmigSprintRegPayload["student"]>,
  ) => void;
}) {
  return (
    <Stack gap={3}>
      <TextField
        label="Student full name"
        value={formData.student.fullName}
        onChange={(e) => updateStudent({ fullName: e.target.value })}
      />

      <TextField
        label="Email"
        value={formData.student.email}
        onChange={(e) => updateStudent({ email: e.target.value })}
      />

      <TextField
        label="Phone number"
        value={formData.student.phoneNo}
        onChange={(e) => updateStudent({ phoneNo: e.target.value })}
      />

      <TextField
        label="Home address"
        value={formData.student.homeAddress}
        onChange={(e) => updateStudent({ homeAddress: e.target.value })}
        multiline
      />
    </Stack>
  );
}

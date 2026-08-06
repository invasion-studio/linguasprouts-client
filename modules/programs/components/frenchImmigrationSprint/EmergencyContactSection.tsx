"use client";

import { Stack, TextField, Typography } from "@mui/material";
import { FrenchImmigSprintRegPayload } from "../../types/frenchImmigrationSprint";

export default function EmergencyContactSection({
  formData,
  updateEmergency,
}: {
  formData: FrenchImmigSprintRegPayload;
  updateEmergency: (
    patch: Partial<FrenchImmigSprintRegPayload["emergencyContact"]>,
  ) => void;
}) {
  return (
    <Stack gap={3}>
      <Typography variant="subtitle2">Emergency contact</Typography>

      <TextField
        label="Emergency contact name"
        value={formData.emergencyContact.name}
        onChange={(e) => updateEmergency({ name: e.target.value })}
      />

      <TextField
        label="Emergency phone"
        value={formData.emergencyContact.phoneNo}
        onChange={(e) => updateEmergency({ phoneNo: e.target.value })}
      />

      <TextField
        label="Emergency address"
        value={formData.emergencyContact.homeAddress}
        onChange={(e) => updateEmergency({ homeAddress: e.target.value })}
        multiline
      />
    </Stack>
  );
}

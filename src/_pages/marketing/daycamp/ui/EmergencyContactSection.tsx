"use client";

import { Stack, TextField, Typography } from "@mui/material";
import { DayCampRegPayload } from "@/src/entities/dayCampReg";

export default function EmergencyContactSection({
  emergencyContact,
  updateEmergency,
}: {
  emergencyContact: DayCampRegPayload["emergencyContact"];
  updateEmergency: (
    patch: Partial<DayCampRegPayload["emergencyContact"]>,
  ) => void;
}) {
  return (
    <Stack gap={3}>
      <Typography variant="body2" color="textSecondary">
        This person will be contacted if we are unable to reach the
        parent/guardian during camp hours.
      </Typography>

      <TextField
        label="Emergency contact name"
        value={emergencyContact.name}
        onChange={(e) => updateEmergency({ name: e.target.value })}
      />

      <TextField
        label="Emergency contact phone"
        value={emergencyContact.phoneNo}
        onChange={(e) => updateEmergency({ phoneNo: e.target.value })}
      />

      <TextField
        label="Emergency contact address"
        value={emergencyContact.homeAddress}
        onChange={(e) => updateEmergency({ homeAddress: e.target.value })}
        multiline
      />
    </Stack>
  );
}

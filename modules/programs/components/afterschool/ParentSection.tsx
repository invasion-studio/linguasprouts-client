"use client";

import {
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import { AfterSchoolRegPayload } from "../../types/afterschoolReg";

export default function ParentSection({
  formData,
  updateParent,
  updateEmergency,
}: {
  formData: AfterSchoolRegPayload;
  updateParent: any;
  updateEmergency: (
    patch: Partial<AfterSchoolRegPayload["parent"]["emergencyContact"]>,
  ) => void;
}) {
  return (
    <Stack gap={3}>
      <TextField
        label="Parent full name"
        value={formData.parent.fullName}
        onChange={(e) => updateParent({ fullName: e.target.value })}
      />

      <FormControl>
        <InputLabel>Relationship</InputLabel>
        <Select
          value={formData.parent.relationship}
          label="Relationship"
          onChange={(e) => updateParent({ relationship: e.target.value })}
        >
          <MenuItem value="Parent">Parent</MenuItem>
          <MenuItem value="Guardian">Guardian</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Email"
        value={formData.parent.email}
        onChange={(e) => updateParent({ email: e.target.value })}
      />

      <TextField
        label="Phone number"
        value={formData.parent.phoneNo}
        onChange={(e) => updateParent({ phoneNo: e.target.value })}
      />

      <TextField
        label="Home address"
        value={formData.parent.homeAddress}
        onChange={(e) => updateParent({ homeAddress: e.target.value })}
        multiline
      />

      <Typography variant="subtitle2">Emergency contact</Typography>

      <TextField
        label="Emergency name"
        value={formData.parent.emergencyContact.name}
        onChange={(e) => updateEmergency({ name: e.target.value })}
      />

      <TextField
        label="Emergency phone"
        value={formData.parent.emergencyContact.phoneNo}
        onChange={(e) => updateEmergency({ phoneNo: e.target.value })}
      />

      <TextField
        label="Emergency address"
        value={formData.parent.emergencyContact.homeAddress}
        onChange={(e) => updateEmergency({ homeAddress: e.target.value })}
        multiline
      />
    </Stack>
  );
}

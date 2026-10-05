"use client";

import {
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { DayCampRegPayload } from "@/src/entities/dayCampReg";

export default function ParentSection({
  parent,
  updateParent,
}: {
  parent: DayCampRegPayload["parent"];
  updateParent: (patch: Partial<DayCampRegPayload["parent"]>) => void;
}) {
  return (
    <Stack gap={3}>
      <TextField
        label="Parent/Guardian full name"
        value={parent.fullName}
        onChange={(e) => updateParent({ fullName: e.target.value })}
      />

      <FormControl>
        <InputLabel>Relationship to child</InputLabel>
        <Select
          value={parent.relationship}
          label="Relationship to child"
          onChange={(e) => updateParent({ relationship: e.target.value })}
        >
          <MenuItem value="Parent">Parent</MenuItem>
          <MenuItem value="Guardian">Guardian</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Email"
        value={parent.email}
        onChange={(e) => updateParent({ email: e.target.value })}
      />

      <TextField
        label="Phone number"
        value={parent.phoneNo}
        onChange={(e) => updateParent({ phoneNo: e.target.value })}
      />

      <TextField
        label="Home address"
        value={parent.homeAddress}
        onChange={(e) => updateParent({ homeAddress: e.target.value })}
        multiline
      />
    </Stack>
  );
}

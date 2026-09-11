"use client";

import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  formControlLabelClasses,
  Stack,
  Typography,
} from "@mui/material";

export type FilterGroup = {
  group: string;
  params: string[];
};

export type FilterValue = Record<string, string[]>;

export default function Filter({
  filters,
  value,
  onChange,
}: {
  filters: FilterGroup[];
  value: FilterValue;
  onChange: (value: FilterValue) => void;
}) {
  const handleToggle = (group: string, param: string) => {
    const groupChecked = value[group] ?? [];
    const nextGroupChecked = groupChecked.includes(param)
      ? groupChecked.filter((p) => p !== param)
      : [...groupChecked, param];

    onChange({ ...value, [group]: nextGroupChecked });
  };

  return (
    <Stack
      padding={"20px"}
      gap={"24px"}
      borderRadius={"8px"}
      bgcolor={"white"}
      width={"220px"}
    >
      {filters.map((filter, i) => (
        <Box display="contents" key={filter.group}>
          <Stack gap={"4px"}>
            <Typography
              variant="caption"
              color="textSecondary"
              marginBottom={"4px"}
            >
              {filter.group}
            </Typography>

            {filter.params.map((param) => (
              <FormControlLabel
                key={param}
                label={param}
                control={
                  <Checkbox
                    size="small"
                    checked={(value[filter.group] ?? []).includes(param)}
                    onChange={() => handleToggle(filter.group, param)}
                  />
                }
                sx={{
                  [`& .${formControlLabelClasses.label}`]: {
                    font: "var(--font-body2)",
                  },
                }}
              />
            ))}
          </Stack>
          {i !== filters.length - 1 && <Divider />}
        </Box>
      ))}
    </Stack>
  );
}

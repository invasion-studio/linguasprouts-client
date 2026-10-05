"use client";

import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import { DayCampLanguage } from "@/src/entities/dayCampReg";

export type DayCampChildDraft = {
  fullName: string;
  language: DayCampLanguage | "";
  age: string;
};

const LANGUAGE_OPTIONS: DayCampLanguage[] = ["French", "Spanish"];

export default function ChildrenSection({
  childList,
  onUpdateChild,
  onAddChild,
  onRemoveChild,
}: {
  childList: DayCampChildDraft[];
  onUpdateChild: (index: number, patch: Partial<DayCampChildDraft>) => void;
  onAddChild: () => void;
  onRemoveChild: (index: number) => void;
}) {
  return (
    <Stack gap={3}>
      {childList.map((child, index) => (
        <Box
          key={index}
          padding={"20px"}
          borderRadius={"12px"}
          border={(theme) => `1px solid ${theme.palette.divider}`}
        >
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            marginBottom={"16px"}
          >
            <Typography variant="subtitle2">Child {index + 1}</Typography>
            {childList.length > 1 && (
              <IconButton
                size="small"
                aria-label={`Remove child ${index + 1}`}
                onClick={() => onRemoveChild(index)}
              >
                <DeleteOutlineIcon fontSize="small" />
              </IconButton>
            )}
          </Stack>

          <Stack gap={3}>
            <TextField
              label="Child full name"
              value={child.fullName}
              onChange={(e) =>
                onUpdateChild(index, { fullName: e.target.value })
              }
            />

            <Stack flexDirection={"row"} gap={2}>
              <FormControl fullWidth>
                <InputLabel>Language</InputLabel>
                <Select
                  value={child.language.toLowerCase()}
                  label="Language"
                  onChange={(e) =>
                    onUpdateChild(index, {
                      language: e.target.value as DayCampLanguage,
                    })
                  }
                >
                  {LANGUAGE_OPTIONS.map((language) => (
                    <MenuItem
                      key={language}
                      value={language.toLocaleLowerCase()}
                    >
                      {language}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                label="Age"
                type="number"
                value={child.age}
                onChange={(e) => onUpdateChild(index, { age: e.target.value })}
                sx={{ maxWidth: "140px" }}
              />
            </Stack>
          </Stack>
        </Box>
      ))}

      <Box
        component={"button"}
        type="button"
        onClick={onAddChild}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          padding: "12px",
          borderRadius: "12px",
          border: (theme) => `1px dashed ${theme.palette.divider}`,
          background: "transparent",
          cursor: "pointer",
          color: (theme) => theme.palette.primary.main,
        }}
      >
        <AddIcon fontSize="small" />
        <Typography variant="subtitle2" color="primary">
          Add another child
        </Typography>
      </Box>
    </Stack>
  );
}

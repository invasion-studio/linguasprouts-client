"use client";

import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";

import type { ChildData } from "@/app/(marketing)/register/page";
import style from "@/app/(marketing)/register/page.module.css";

const CAMP_OPTIONS = ["French Class", "Spanish Class"] as const;

type ChildInfoFormProps = {
  children: ChildData[];
  onChildChange: (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onToggleCamp: (childIndex: number, camp: string) => void;
  onAddChild: () => void;
  onEditChild: (index: number) => void;
};

type CampSelectProps = {
  selectId: string;
  selected: string[];
  onToggle: (camp: string) => void;
};

type ChildSummaryCardProps = {
  child: Pick<ChildData, "firstName" | "lastName" | "age" | "allergies" | "camps">;
  onEdit: () => void;
};

export function ChildInfoForm({
  children,
  onChildChange,
  onToggleCamp,
  onAddChild,
  onEditChild,
}: ChildInfoFormProps) {
  return (
    <>
      {children.map((child, i) =>
        child.saved ? (
          <ChildSummaryCard
            key={i}
            child={child}
            onEdit={() => onEditChild(i)}
          />
        ) : (
          <div key={i} className={style.childFormCard}>
            <div className={style.formGrid}>
              <div className={style.field}>
                <TextField
                  label="First name"
                  name="firstName"
                  value={child.firstName}
                  onChange={(e) => onChildChange(i, e)}
                  variant="standard"
                  fullWidth
                />
              </div>
              <div className={style.field}>
                <TextField
                  label="Last name"
                  name="lastName"
                  value={child.lastName}
                  onChange={(e) => onChildChange(i, e)}
                  variant="standard"
                  fullWidth
                />
              </div>
              <div className={style.field}>
                <TextField
                  label="Age"
                  type="number"
                  name="age"
                  value={child.age}
                  onChange={(e) => onChildChange(i, e)}
                  variant="standard"
                  fullWidth
                />
              </div>
              <CampSelect
                selectId={`camp-select-${i}`}
                selected={child.camps}
                onToggle={(camp) => onToggleCamp(i, camp)}
              />
              <div className={style.field}>
                <TextField
                  label="Allergies if any"
                  name="allergies"
                  value={child.allergies}
                  onChange={(e) => onChildChange(i, e)}
                  variant="standard"
                  fullWidth
                />
              </div>
            </div>
          </div>
        ),
      )}
      <button type="button" className={style.addChildBtn} onClick={onAddChild}>
        <span className={style.addChildPlus}>+</span>
        Add Another Child
      </button>
    </>
  );
}

function ChildSummaryCard({ child, onEdit }: ChildSummaryCardProps) {
  const details = [
    child.age ? `${child.age} years` : "",
    child.camps.length > 0
      ? child.camps.map((c) => c.replace(" Class", "")).join(", ")
      : "",
    child.allergies || "",
  ].filter(Boolean);

  return (
    <div className={style.childCard}>
      <div className={style.childCardInfo}>
        <p className={style.childCardName}>
          {child.firstName} {child.lastName}
        </p>
        <p className={style.childCardDetails}>{details.join("  ·  ")}</p>
      </div>
      <button type="button" className={style.editBtn} onClick={onEdit}>
        <span className={style.editIcon}>Edit</span>
      </button>
    </div>
  );
}

function CampSelect({ selectId, selected, onToggle }: CampSelectProps) {
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    const nextSelected = typeof value === "string" ? value.split(",") : value;

    CAMP_OPTIONS.forEach((camp) => {
      const isSelected = selected.includes(camp);
      const shouldBeSelected = nextSelected.includes(camp);

      if (isSelected !== shouldBeSelected) {
        onToggle(camp);
      }
    });
  };

  return (
    <FormControl variant="standard" fullWidth className={style.field}>
      <InputLabel id={`${selectId}-label`}>Summer Class Camp</InputLabel>
      <Select
        labelId={`${selectId}-label`}
        id={selectId}
        multiple
        value={selected}
        onChange={handleChange}
        label="Summer Class Camp"
        renderValue={(value) =>
          value.map((camp) => camp.replace(" Class", "")).join(", ")
        }
      >
        {CAMP_OPTIONS.map((camp) => (
          <MenuItem key={camp} value={camp}>
            <Checkbox checked={selected.includes(camp)} />
            <ListItemText primary={camp} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

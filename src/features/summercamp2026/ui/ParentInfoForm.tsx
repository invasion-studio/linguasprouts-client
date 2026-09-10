"use client";

import { TextField } from "@mui/material";

import type { ParentFormData } from "@/app/(marketing)/register/page";
import style from "@/app/(marketing)/register/page.module.css";

type ParentInfoFormProps = {
  form: ParentFormData;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

export function ParentInfoForm({ form, onChange }: ParentInfoFormProps) {
  return (
    <div className={style.formGrid}>
      <div className={style.field}>
        <TextField
          label="First name"
          name="firstName"
          value={form.firstName}
          onChange={onChange}
          variant="standard"
          fullWidth
        />
      </div>
      <div className={style.field}>
        <TextField
          label="Last name"
          name="lastName"
          value={form.lastName}
          onChange={onChange}
          variant="standard"
          fullWidth
        />
      </div>
      <div className={style.field}>
        <TextField
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
          variant="standard"
          fullWidth
        />
      </div>
      <div className={style.field}>
        <TextField
          label="Phone"
          type="tel"
          name="phone"
          value={form.phone}
          onChange={onChange}
          variant="standard"
          fullWidth
        />
      </div>
    </div>
  );
}

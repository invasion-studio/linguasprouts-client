"use client";

import AppBar from "@/src/shared/ui/AppBar/AppBar2";
import { Alert, alpha, Box, Stack, Tab, Typography } from "@mui/material";
import Banner from "@/src/shared/ui/Banner";
import AdminTable from "@/src/_pages/admin/ui/AdminTable";
import {
  useGetAfterSchoolReg,
  useListAfterSchoolRegs,
} from "@/src/entities/afterSchoolReg";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PrimaryButton } from "@/src/shared/ui/PrimaryButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { StyledTabs } from "@/src/shared/ui/StyledTabs";

const columns = [
  { key: "parentName", header: "Parent name" },
  { key: "email", header: "Email" },
  { key: "phone", header: "Phone" },
  { key: "child", header: "Child name" },
];

export default function Page() {
  const { data, isPending } = useListAfterSchoolRegs();
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState(0);

  const rows = data?.data.map((r) => ({
    id: r.id,
    parentName: r.parent.fullName,
    email: r.parent.email,
    phone: r.parent.phoneNo,
    child: r.child.fullName,
  }));

  const handleRowClick = (id?: string) => {
    if (id) router.push(`/admin/after-school-language/${id}`);
  };

  return (
    <>
      <Banner title="After School Language Program" height="180px" />

      <Box
        gap={"24px"}
        component={"div"}
        margin={"32px 0px 32px 0px"}
        className="adminLayout"
      >
        <StyledTabs
          value={selectedTab}
          onChange={(_, value) => setSelectedTab(value)}
        >
          <Tab value={0} label="Registrations" />
          <Tab value={1} label="Class list" />
        </StyledTabs>

        {selectedTab === 0 ? (
          <AdminTable
            columns={columns}
            rows={rows || []}
            isPending={isPending}
            onRowClick={handleRowClick}
          />
        ) : (
          <ClassList />
        )}
      </Box>
    </>
  );
}

const ClassList = () => {
  const childListColumns = [
    { key: "fullName", header: "Child Name" },
    { key: "ageGroup", header: "Age Group" },
    { key: "language", header: "Language" },
    { key: "schedule", header: "Schedule" },
  ];

  const { data, isPending } = useListAfterSchoolRegs();
  const children = data?.data.map((r) => ({
    id: r.id,
    ...r.child,
    schedule: r.schedule.map((s) => `${s.day} ${s.time}`).join(", "),
  }));

  return (
    <Box>
      <Stack
        flexDirection={"row"}
        paddingLeft={"24px"}
        alignItems={"center"}
        height={"40px"}
        marginBottom={"8px"}
      >
        <Typography variant="caption">
          Count:{" " + children?.length}
        </Typography>
      </Stack>

      <AdminTable
        columns={childListColumns}
        rows={children || []}
        isPending={isPending}
        onRowClick={() => {}}
      />
    </Box>
  );
};

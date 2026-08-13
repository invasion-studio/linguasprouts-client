"use client";

import AppBar from "@/components/AppBar/AppBar2";
import { Box, Typography } from "@mui/material";
import Banner from "@/modules/programs/components/Banner";
import StyledTable from "@/modules/programs/components/Table";
import { useGetAfterSchoolReg } from "@/modules/programs/hooks/afterschool/useGetAfterSchoolReg";
import { useListAfterSchoolRegs } from "@/modules/programs/hooks/afterschool/useListAfterSchoolRegs";

const columns = [
  { key: "parentName", header: "Parent name" },
  { key: "email", header: "Email" },
  { key: "phone", header: "Phone" },
  { key: "child", header: "Child name" },
];

export default function Page() {
  const { data, isPending } = useListAfterSchoolRegs();

  const rows = data?.data.map((r) => ({
    id: r.id,
    parentName: r.parent.fullName,
    email: r.parent.email,
    phone: r.parent.phoneNo,
    child: r.child.fullName,
  }));

  const handleRowClick = () => {};
  return (
    <Box minHeight={"100vh"} bgcolor={"var(--palette-ibmgrey-10)"}>
      <AppBar variant="admin" />
      <Banner title="After School Language" height="180px" />

      <Box component={"div"} margin={"32px 0px"} className="adminLayout">
        <Typography variant="h4" marginBottom={"24px"}>
          Registrations
        </Typography>

        <StyledTable
          columns={columns}
          rows={rows || []}
          isPending={isPending}
          onRowClick={handleRowClick}
        />
      </Box>
    </Box>
  );
}

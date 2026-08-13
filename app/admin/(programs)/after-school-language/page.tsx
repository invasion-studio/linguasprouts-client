"use client";

import AppBar from "@/components/AppBar/AppBar2";
import { Alert, alpha, Box, Stack, Typography } from "@mui/material";
import Banner from "@/modules/programs/components/Banner";
import StyledTable from "@/modules/programs/components/Table";
import { useGetAfterSchoolReg } from "@/modules/programs/hooks/afterschool/useGetAfterSchoolReg";
import { useListAfterSchoolRegs } from "@/modules/programs/hooks/afterschool/useListAfterSchoolRegs";
import { useRouter } from "next/navigation";

const columns = [
  { key: "parentName", header: "Parent name" },
  { key: "email", header: "Email" },
  { key: "phone", header: "Phone" },
  { key: "child", header: "Child name" },
];

export default function Page() {
  const { data, isPending } = useListAfterSchoolRegs();
  const router = useRouter();

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
      <Banner title="After School Language" height="180px" />

      <Stack
        gap={"24px"}
        component={"div"}
        margin={"32px 0px"}
        className="adminLayout"
      >
        <Typography variant="h4">Registrations</Typography>

        {/* <Box
          padding={"16px"}
          bgcolor={(theme) => alpha(theme.palette.info.main, 0.12)}
          borderRadius={"8px"}
        >
          <Typography color="Se">
            Click on an item to see more details
          </Typography>
        </Box> */}

        <StyledTable
          columns={columns}
          rows={rows || []}
          isPending={isPending}
          onRowClick={handleRowClick}
        />
      </Stack>
    </>
  );
}

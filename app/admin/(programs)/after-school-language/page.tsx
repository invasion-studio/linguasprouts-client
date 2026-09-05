"use client";

import AppBar from "@/components/AppBar/AppBar2";
import { Alert, alpha, Box, Stack, Typography } from "@mui/material";
import Banner from "@/modules/programs/components/Banner";
import StyledTable from "@/modules/programs/components/Table";
import { useGetAfterSchoolReg } from "@/modules/programs/hooks/afterschool/useGetAfterSchoolReg";
import { useListAfterSchoolRegs } from "@/modules/programs/hooks/afterschool/useListAfterSchoolRegs";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

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
    <Box
      gap={"24px"}
      component={"div"}
      margin={"22px 0px 32px 0px"}
      className="adminLayout"
    >
      <Box marginBottom={"36px"}>
        <PrimaryButton
          variant="text"
          color="inherit"
          startIcon={<ArrowBackIosIcon fontSize="small" />}
          onClick={() => router.back()}
          sx={{
            color: (theme) => theme.palette.text.secondary,
            marginBottom: "8px",
            marginLeft: "-10px",
          }}
        >
          Back
        </PrimaryButton>

        <Typography variant="h3" lineHeight={"40px"}>
          After School Language Program
        </Typography>
      </Box>

      <Typography
        marginBottom={"16px"}
        variant="subtitle1"
        color="textSecondary"
      >
        Registrations
      </Typography>

      <StyledTable
        columns={columns}
        rows={rows || []}
        isPending={isPending}
        onRowClick={handleRowClick}
      />
    </Box>
  );
}

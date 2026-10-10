"use client";

import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import Banner from "@/src/shared/ui/Banner";
import AdminTable from "@/src/shared/ui/admin/AdminTable";
import { useListDayCampRegs } from "@/src/entities/dayCampReg";

const columns = [
  { key: "parentName", header: "Parent name" },
  { key: "email", header: "Email" },
  { key: "phone", header: "Phone" },
  { key: "children", header: "Children" },
];

export default function Page() {
  const { data, isPending } = useListDayCampRegs();
  const router = useRouter();

  const rows = data?.data.map((r) => ({
    id: r.id,
    parentName: r.parent.fullName,
    email: r.parent.email,
    phone: r.parent.phoneNo,
    children: r.children.map((c) => c.fullName).join(", "),
  }));

  return (
    <>
      <Banner title="Day Camp" height="180px" />

      <Box
        gap={"24px"}
        component={"div"}
        margin={"32px 0px 32px 0px"}
        className="adminLayout"
      >
        <AdminTable
          columns={columns}
          rows={rows || []}
          isPending={isPending}
          onRowClick={(id) => id && router.push(`/admin/daycamp/${id}`)}
        />
      </Box>
    </>
  );
}

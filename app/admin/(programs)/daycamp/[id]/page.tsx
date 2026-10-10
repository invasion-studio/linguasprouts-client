"use client";

import { Box, Stack } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { useGetDayCampReg } from "@/src/entities/dayCampReg";
import AdminDetailHeader from "@/src/shared/ui/admin/AdminDetailHeader";
import AdminDetailSection, {
  AdminDetailItem,
} from "@/src/shared/ui/admin/AdminDetailSection";

const yesNo = (v?: boolean) => (v ? "Yes" : "No");

export default function RegistrationDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { data, isPending } = useGetDayCampReg((id as string) || "");
  const reg = data?.data;
  const parent = reg?.parent;

  const parentRows: AdminDetailItem[] = [
    { label: "Full Name", value: parent?.fullName || "" },
    { label: "Relationship", value: parent?.relationship || "" },
    { label: "Email", value: parent?.email || "" },
    { label: "Phone No", value: parent?.phoneNo || "" },
    { label: "Address", value: parent?.homeAddress || "" },
  ];

  const emergencyRows: AdminDetailItem[] = [
    { label: "Full Name", value: reg?.emergencyContact?.name || "" },
    { label: "Phone No", value: reg?.emergencyContact?.phoneNo || "" },
    { label: "Address", value: reg?.emergencyContact?.homeAddress || "" },
  ];

  const termsRows: AdminDetailItem[] = [
    { label: "Accepted terms", value: yesNo(reg?.terms?.acceptedTerms) },
    {
      label: "Information is truthful",
      value: yesNo(reg?.terms?.truthfulness),
    },
    {
      label: "Consent to personal information use",
      value: yesNo(reg?.terms?.consentPersonalInfo),
    },
    { label: "Consent to media use", value: yesNo(reg?.terms?.consentMedia) },
  ];

  return (
    <Box component={"div"} className="adminLayout" margin={"32px 0px"}>
      <AdminDetailHeader
        title="Registration Information"
        onBack={() => router.back()}
      />

      <Stack gap={"16px"} borderRadius={"8px"} overflow={"clip"}>
        <AdminDetailSection
          header="Parent Information"
          rows={parentRows}
          isPending={isPending}
          skeletonRows={5}
        />
        {isPending && (
          <AdminDetailSection header="Child Information" rows={[]} isPending />
        )}
        {reg?.children?.map((c, i) => (
          <AdminDetailSection
            key={i}
            header={
              reg.children.length > 1
                ? `Child Information (${i + 1})`
                : "Child Information"
            }
            rows={[
              { label: "Full Name", value: c.fullName },
              { label: "Language", value: c.language },
              { label: "Age", value: c.age },
            ]}
          />
        ))}
        <AdminDetailSection
          header="Emergency Contact"
          rows={emergencyRows}
          isPending={isPending}
        />
        <AdminDetailSection
          header="Terms & Consent"
          rows={termsRows}
          isPending={isPending}
          skeletonRows={4}
        />
      </Stack>
    </Box>
  );
}

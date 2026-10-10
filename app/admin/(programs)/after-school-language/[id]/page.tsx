"use client";

import { useGetAfterSchoolReg } from "@/src/entities/afterSchoolReg";
import { Box, Stack, Typography } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import AdminDetailHeader from "@/src/shared/ui/admin/AdminDetailHeader";
import AdminDetailSection, {
  AdminDetailItem,
} from "@/src/shared/ui/admin/AdminDetailSection";
import { PrimaryButton } from "@/src/shared/ui/PrimaryButton";
import PaymentQrDialog from "@/src/features/generate-payments-qrcode/ui/PaymentQrDialog";
import theme from "@/src/_app/styles/theme";
import { useState } from "react";

export default function RegistrationDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { data, isPending } = useGetAfterSchoolReg((id as string) || "");
  const parent = data?.data?.parent;

  const parentArray: AdminDetailItem[] = [
    { label: "Full Name", value: parent?.fullName || "" },
    { label: "Relationship", value: parent?.relationship || "" },
    { label: "Email", value: parent?.email || "" || "" || "" },
    { label: "Phone No", value: parent?.phoneNo || "" || "" },
    { label: "Address", value: parent?.homeAddress || "" },
  ];

  const childArray: AdminDetailItem[] = [
    { label: "Full Name", value: data?.data?.child?.fullName || "" },
    { label: "Language", value: data?.data?.child?.language || "" },
    { label: "Age Group", value: data?.data?.child?.ageGroup || "" },
  ];

  const emergencyContactArray: AdminDetailItem[] = [
    { label: "Full Name", value: parent?.emergencyContact?.name || "" },
    { label: "Phone No", value: parent?.emergencyContact?.phoneNo || "" },
    { label: "Address", value: parent?.emergencyContact?.homeAddress || "" },
  ];

  const scheduleArray: AdminDetailItem[] =
    data?.data?.schedule?.map((s) => ({
      label: s.day,
      value: s.time,
    })) || [];

  return (
    <Box component={"div"} className="adminLayout" margin={"32px 0px"}>
      <AdminDetailHeader
        title="Registration Information"
        onBack={() => router.back()}
      />

      <Stack gap={"16px"} borderRadius={"8px"} overflow={"clip"}>
        <SubscriptionInfo registrationId={(id as string) || ""} />
        <AdminDetailSection
          header="Parent Information"
          rows={parentArray}
          isPending={isPending}
          skeletonRows={5}
        />
        <AdminDetailSection
          header="Child Information"
          rows={childArray}
          isPending={isPending}
        />
        <AdminDetailSection
          header="Emergency Contact"
          rows={emergencyContactArray}
          isPending={isPending}
        />
        <AdminDetailSection
          header="Schedule"
          rows={scheduleArray}
          isPending={isPending}
        />
      </Stack>
    </Box>
  );
}

function SubscriptionInfo({ registrationId }: { registrationId: string }) {
  const [qrDialogOpen, setQrDialogOpen] = useState(false);

  const handleCreatePayment = () => {
    setQrDialogOpen(true);
  };

  return (
    <Stack padding={"24px"} borderRadius={"8px"} bgcolor={"white"} gap={"28px"}>
      <Typography variant="subtitle1">Subscription Information</Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          gap: "20px",
        }}
      >
        <Box>
          <Typography variant="body2" color="textSecondary">
            Status
          </Typography>
          <Typography variant="body1" color="warning">
            Pending
          </Typography>
        </Box>

        <PrimaryButton
          variant="outlined"
          onClick={handleCreatePayment}
          color="inherit"
          sx={{
            width: "fit-content",
            color: theme.palette.secondary.dark,
            height: "fit-content",
          }}
        >
          Generate Payment Session
        </PrimaryButton>
      </Box>

      <PaymentQrDialog
        open={qrDialogOpen}
        onClose={() => setQrDialogOpen(false)}
        registrationId={registrationId}
      />
    </Stack>
  );
}

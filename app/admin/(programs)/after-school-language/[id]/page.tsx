"use client";

import { useGetAfterSchoolReg } from "@/modules/programs/hooks/afterschool/useGetAfterSchoolReg";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import PaymentQrDialog from "@/components/PaymentQrDialog/PaymentQrDialog";
import theme from "@/theme";
import { useState } from "react";

export default function RegistrationDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { data } = useGetAfterSchoolReg((id as string) || "");
  const parent = data?.data?.parent;

  const parentArray: RegistrationInfo[] = [
    { label: "Full Name", value: parent?.fullName || "" },
    { label: "Relationship", value: parent?.relationship || "" },
    { label: "Email", value: parent?.email || "" || "" || "" },
    { label: "Phone No", value: parent?.phoneNo || "" || "" },
    { label: "Address", value: parent?.homeAddress || "" },
  ];

  const childArray: RegistrationInfo[] = [
    { label: "Full Name", value: data?.data?.child?.fullName || "" },
    { label: "Language", value: data?.data?.child?.language || "" },
    { label: "Age Group", value: data?.data?.child?.ageGroup || "" },
  ];

  const emergencyContactArray: RegistrationInfo[] = [
    { label: "Full Name", value: parent?.emergencyContact?.name || "" },
    { label: "Phone No", value: parent?.emergencyContact?.phoneNo || "" },
    { label: "Address", value: parent?.emergencyContact?.homeAddress || "" },
  ];

  const scheduleArray: RegistrationInfo[] =
    data?.data?.schedule?.map((s) => ({
      label: s.day,
      value: s.time,
    })) || [];

  return (
    <Box component={"div"} className="adminLayout" margin={"32px 0px"}>
      <Stack
        flexDirection={"row"}
        gap={"8px"}
        alignItems={"center"}
        marginBottom={"24px"}
      >
        <IconButton color="inherit" size="small" onClick={() => router.back()}>
          <ArrowBackIosIcon fontSize="small" color="action" />
        </IconButton>
        <Typography variant="h4">Registration Information</Typography>
      </Stack>

      <Stack gap={"20px"} borderRadius={"8px"} overflow={"clip"}>
        <SubscriptionInfo registrationId={(id as string) || ""} />
        <RegistrationDetails header="Parent Information" rows={parentArray} />
        <RegistrationDetails header="Child Information" rows={childArray} />
        <RegistrationDetails
          header="Emergency Contact"
          rows={emergencyContactArray}
        />
        <RegistrationDetails header="Schedule" rows={scheduleArray} />
      </Stack>
    </Box>
  );
}

type RegistrationInfo = {
  label: string;
  value: string;
};

function RegistrationDetails({
  header,
  rows,
}: {
  header: string;
  rows: RegistrationInfo[];
}) {
  return (
    <Box padding={"24px"} borderRadius={"8px"} bgcolor={"white"}>
      <Typography variant="subtitle1" marginBottom={"28px"}>
        {header}
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          gap: "20px",
        }}
      >
        {rows.map((r, i) => (
          <Box key={i}>
            <Typography variant="body2" color="textSecondary">
              {r.label}
            </Typography>
            <Typography variant="body1">{r.value}</Typography>
          </Box>
        ))}
      </Box>
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

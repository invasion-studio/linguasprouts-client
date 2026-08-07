"use client";

import AppBar from "@/components/AppBar/AppBar";
import Footer from "@/components/Footer";
import FormWrapper from "@/modules/programs/components/FormWrapper";
import RegistrationBanner from "@/modules/programs/components/Banner";
import SuccessModal from "@/modules/programs/components/SuccessModal";
import EmergencyContactSection from "@/modules/programs/components/frenchImmigrationSprint/EmergencyContactSection";
import StudentSection from "@/modules/programs/components/frenchImmigrationSprint/StudentSection";
import TermsSection from "@/modules/programs/components/Terms";
import { useCreateFrenchImmigReg } from "@/modules/programs/hooks/frenchImmigrationSprint/useCreateFrenchImmigReg";
import { FrenchImmigSprintRegPayload } from "@/modules/programs/types/frenchImmigrationSprint";
import { Box } from "@mui/material";
import { useState } from "react";

type FormData = FrenchImmigSprintRegPayload;

export default function RegistrationPage() {
  const [formData, setFormData] = useState<FormData>({
    student: {
      fullName: "",
      email: "",
      phoneNo: "",
      homeAddress: "",
    },
    emergencyContact: { name: "", phoneNo: "", homeAddress: "" },
    terms: {
      acceptedTerms: false,
      truthfulness: false,
      consentPersonalInfo: false,
      consentMedia: false,
    },
  });

  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const { mutate, isPending, error, isError } = useCreateFrenchImmigReg();

  const updateStudent = (patch: Partial<FormData["student"]>) => {
    setFormData((p) => ({
      ...p,
      student: { ...p.student, ...patch },
    }));
  };

  const updateEmergency = (patch: Partial<FormData["emergencyContact"]>) => {
    setFormData((p) => ({
      ...p,
      emergencyContact: { ...p.emergencyContact, ...patch },
    }));
  };

  const toggleTerm = (key: keyof FormData["terms"], value: boolean) => {
    setFormData((p) => ({ ...p, terms: { ...p.terms, [key]: value } }));
  };

  const handleSubmit = () => {
    const payload = {
      student: formData.student,
      emergencyContact: formData.emergencyContact,
      termsAndCondition:
        (formData.terms.acceptedTerms &&
          formData.terms.truthfulness &&
          formData.terms.consentPersonalInfo) ||
        false,
      terms: formData.terms,
    };

    mutate(payload, {
      onSuccess() {
        setSuccessModalOpen(true);
      },
    });
  };

  const sections = [
    {
      title: "Student details",
      content: (
        <StudentSection formData={formData} updateStudent={updateStudent} />
      ),
    },
    {
      title: "Emergency contact",
      content: (
        <EmergencyContactSection
          formData={formData}
          updateEmergency={updateEmergency}
        />
      ),
    },
    {
      title: "Terms and conditions",
      content: <TermsSection terms={formData.terms} toggleTerm={toggleTerm} />,
    },
  ];

  return (
    <Box bgcolor={"#FAFAFA"} minHeight={"100vh"}>
      <AppBar layout="narrow" />
      <RegistrationBanner
        title="French Immigration Sprint Registration"
        textColor="#1B7109"
        mainColor="#AEFA9E"
        secondaryColor="#81EE6A"
      />
      <FormWrapper
        sections={sections}
        onSubmit={handleSubmit}
        submitting={isPending}
        isError={isError}
        errorMessage={error?.message || ""}
      />
      <SuccessModal open={successModalOpen} />
      <Footer />
    </Box>
  );
}

"use client";

import AppBar from "@/src/shared/ui/AppBar/AppBar";
import Footer from "@/src/shared/ui/Footer";
import {
  FormWrapper,
  SuccessModal,
  TermsSection,
} from "@/src/features/registrations";
import RegistrationBanner from "@/src/shared/ui/Banner";
import EmergencyContactSection from "@/src/_pages/frenchImmigrationSprint/ui/EmergencyContactSection";
import StudentSection from "@/src/_pages/frenchImmigrationSprint/ui/StudentSection";
import {
  useCreateFrenchImmigReg,
  FrenchImmigSprintRegPayload,
} from "@/src/entities/frenchImmigSprintReg";
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

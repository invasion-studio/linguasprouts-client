"use client";

import AppBar from "@/src/_app/layout/AppBar/AppBar";
import Footer from "@/src/shared/ui/Footer";
import { FormWrapper, SuccessModal } from "@/src/features/registrations";
import { TermsSection } from "@/src/features/registrations";
import RegistrationBanner from "@/src/shared/ui/Banner";
import ChildrenSection, {
  DayCampChildDraft,
} from "@/src/_pages/marketing/daycamp/ui/ChildrenSection";
import ParentSection from "@/src/_pages/marketing/daycamp/ui/ParentSection";
import EmergencyContactSection from "@/src/_pages/marketing/daycamp/ui/EmergencyContactSection";
import {
  useCreateDayCampReg,
  DayCampLanguage,
  DayCampRegPayload,
} from "@/src/entities/dayCampReg";
import { Box } from "@mui/material";
import { useState } from "react";

type FormData = Omit<DayCampRegPayload, "children"> & {
  children: DayCampChildDraft[];
};

const EMPTY_CHILD: DayCampChildDraft = { fullName: "", language: "", age: "" };

export default function RegistrationPage() {
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    children: [{ ...EMPTY_CHILD }],
    parent: {
      fullName: "",
      relationship: "",
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

  const { mutate, isPending, error, isError } = useCreateDayCampReg();

  const updateChild = (index: number, patch: Partial<DayCampChildDraft>) => {
    setFormData((p) => ({
      ...p,
      children: p.children.map((c, i) =>
        i === index ? { ...c, ...patch } : c,
      ),
    }));
  };

  const addChild = () => {
    setFormData((p) => ({
      ...p,
      children: [...p.children, { ...EMPTY_CHILD }],
    }));
  };

  const removeChild = (index: number) => {
    setFormData((p) => ({
      ...p,
      children: p.children.filter((_, i) => i !== index),
    }));
  };

  const updateParent = (patch: Partial<FormData["parent"]>) => {
    setFormData((p) => ({ ...p, parent: { ...p.parent, ...patch } }));
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
    const payload: DayCampRegPayload = {
      children: formData.children.map((c) => ({
        fullName: c.fullName,
        language: c.language as DayCampLanguage,
        age: Number(c.age) || 0,
      })),
      parent: formData.parent,
      emergencyContact: formData.emergencyContact,
      terms: formData.terms,
    };

    console.log(payload);

    mutate(payload, {
      onSuccess() {
        setSuccessModalOpen(true);
      },
    });
  };

  const sections = [
    {
      title: "Children information",
      content: (
        <ChildrenSection
          childList={formData.children}
          onUpdateChild={updateChild}
          onAddChild={addChild}
          onRemoveChild={removeChild}
        />
      ),
    },
    {
      title: "Parent/Guardian contact",
      content: (
        <ParentSection parent={formData.parent} updateParent={updateParent} />
      ),
    },
    {
      title: "Emergency contact",
      content: (
        <EmergencyContactSection
          emergencyContact={formData.emergencyContact}
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
        title="Day Camp Registration"
        textColor="#1B7109"
        mainColor="#AEFA9E"
        secondaryColor="#81EE6A"
      />
      <Box paddingBottom={"32px"}>
        <FormWrapper
          sections={sections}
          onSubmit={handleSubmit}
          submitting={isPending}
          isError={isError}
          errorMessage={error?.message || ""}
        />
      </Box>
      <SuccessModal open={successModalOpen} />
      <Footer />
    </Box>
  );
}

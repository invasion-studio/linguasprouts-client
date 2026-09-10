"use client";

import AppBar from "@/src/shared/ui/AppBar/AppBar";
import Footer from "@/src/shared/ui/Footer";
import ChildSection from "@/src/_pages/afterschool/ui/ChildSection";
import ParentSection from "@/src/_pages/afterschool/ui/ParentSection";
import ScheduleSection from "@/src/_pages/afterschool/ui/ScheduleSection";
import {
  FormWrapper,
  SuccessModal,
  TermsSection,
} from "@/src/features/registrations";
import RegistrationBanner from "@/src/shared/ui/Banner";
import {
  useCreateAfterSchoolReg,
  AfterSchoolRegPayload,
} from "@/src/entities/afterSchoolReg";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type FormData = AfterSchoolRegPayload;

export default function RegistrationPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const checkoutSuccess =
    searchParams.get("payment_success") === "true" ? true : false;

  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [sessionUrl, setSessionUrl] = useState("");
  const [formData, setFormData] = useState<FormData>({
    child: { fullName: "", language: "", ageGroup: "" },
    parent: {
      fullName: "",
      relationship: "",
      email: "",
      phoneNo: "",
      homeAddress: "",
      emergencyContact: { name: "", phoneNo: "", homeAddress: "" },
    },
    schedule: [],
    terms: {
      acceptedTerms: false,
      truthfulness: false,
      consentPersonalInfo: false,
      consentMedia: false,
    },
  });

  const { mutate, isPending, error, isError } = useCreateAfterSchoolReg();

  const updateChild = (patch: Partial<FormData["child"]>) => {
    setFormData((p) => ({ ...p, child: { ...p.child, ...patch } }));
  };

  const updateParent = (patch: Partial<FormData["parent"]>) => {
    setFormData((p) => ({ ...p, parent: { ...p.parent, ...patch } }));
  };

  const updateEmergency = (
    patch: Partial<FormData["parent"]["emergencyContact"]>,
  ) => {
    setFormData((p) => ({
      ...p,
      parent: {
        ...p.parent,
        emergencyContact: { ...p.parent.emergencyContact, ...patch },
      },
    }));
  };

  const toggleTerm = (key: keyof FormData["terms"], value: boolean) => {
    setFormData((p) => ({ ...p, terms: { ...p.terms, [key]: value } }));
  };

  const handleScheduleChange = (value: string) => {
    const resetTime = () => {
      setFormData((p) => ({
        ...p,
        schedule: p.schedule.map((s) => ({ ...s, time: "" })),
      }));
    };

    // Reset time when moving fron Weekend to Weekday
    //
    // checks form data if current schedule is weekend
    // and resets before applying new schedule
    if (formData.schedule.some((s) => s.day == "Saturday")) {
      resetTime();
    }

    if (!value) {
      setFormData((p) => ({ ...p, schedule: [] }));
      return;
    }

    // Reset time when moving from Weekday to Saturday
    // checks new schedule if weekend then resets time
    if (value == "Friday & Saturday") {
      resetTime();
    }

    const groupMap: Record<string, [string, string]> = {
      "Monday & Wednesday": ["Monday", "Wednesday"],
      "Tuesday & Thursday": ["Tuesday", "Thursday"],
      "Friday & Saturday": ["Friday", "Saturday"],
    };

    const [firstDay, secondDay] = groupMap[value] ?? [];

    // sets new schedule value
    setFormData((p) => ({
      ...p,
      schedule:
        firstDay && secondDay
          ? [
              { ...p.schedule[0], day: firstDay },
              { ...p.schedule[1], day: secondDay },
            ]
          : [],
    }));
  };

  const handleScheduleTimeChange = (value: string, saturday?: boolean) => {
    if (saturday) {
      setFormData((p) => ({
        ...p,
        schedule: p.schedule.map((s) =>
          s.day == "Saturday" ? { ...s, time: value } : s,
        ),
      }));
      return;
    }

    setFormData((p) => ({
      ...p,
      schedule: p.schedule.map((s) =>
        s.day == "Saturday" ? s : { ...s, time: value },
      ),
    }));
  };

  const handleSubmit = () => {
    const payload = {
      child: formData.child,
      parent: formData.parent,
      schedule: formData.schedule.filter(Boolean),
      termsAndCondition:
        (formData.terms.acceptedTerms &&
          formData.terms.truthfulness &&
          formData.terms.consentPersonalInfo) ||
        false,
      terms: formData.terms,
    };

    mutate(payload, {
      onSuccess(data) {
        setSuccessModalOpen(true);
        if (data.sessionUrl && typeof data.sessionUrl === "string") {
          setSessionUrl(data.sessionUrl);
        }
      },
    });
  };

  const handleToPayment = () => {
    if (sessionUrl) {
      router.push(sessionUrl);
    }
  };

  const sections = [
    {
      title: "Student information",
      content: <ChildSection formData={formData} updateChild={updateChild} />,
    },
    {
      title: "Guardian Contact",
      content: (
        <ParentSection
          formData={formData}
          updateParent={updateParent}
          updateEmergency={updateEmergency}
        />
      ),
    },
    {
      title: "Schedule Selection",
      content: (
        <ScheduleSection
          formData={formData}
          handleScheduleChange={handleScheduleChange}
          handleScheduleTimeChange={handleScheduleTimeChange}
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
        title="After School Language Registration"
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
      <SuccessModal
        variant="toPayment"
        open={successModalOpen}
        onPaymentClick={handleToPayment}
      />
      <SuccessModal open={checkoutSuccess} />
      <Footer />
    </Box>
  );
}

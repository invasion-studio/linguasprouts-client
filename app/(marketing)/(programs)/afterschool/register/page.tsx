"use client";

import AppBar from "@/components/AppBar/AppBar";
import Footer from "@/components/Footer";
import ChildSection from "@/modules/programs/components/afterschool/ChildSection";
import ParentSection from "@/modules/programs/components/afterschool/ParentSection";
import ScheduleSection from "@/modules/programs/components/afterschool/ScheduleSection";
import FormWrapper from "@/modules/programs/components/FormWrapper";
import RegistrationBanner from "@/modules/programs/components/Banner";
import SuccessModal from "@/modules/programs/components/SuccessModal";
import TermsSection from "@/modules/programs/components/Terms";
import { useCreateAfterSchoolReg } from "@/modules/programs/hooks/afterschool/useCreateAfterSchoolReg";
import { AfterSchoolRegPayload } from "@/modules/programs/types/afterschoolReg";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

type FormData = AfterSchoolRegPayload;

export default function RegistrationPage() {
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

  useEffect(() => {
    console.log(formData.schedule);
  }, [formData]);

  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const { mutateAsync, mutate, isPending, error, isError } =
    useCreateAfterSchoolReg();

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
      onSuccess() {
        setSuccessModalOpen(true);
      },
    });
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
      <SuccessModal open={successModalOpen} />
      <Footer />
    </Box>
  );
}

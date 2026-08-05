"use client";

import AppBar from "@/components/AppBar/AppBar";
import Footer from "@/components/Footer";
import FormWrapper from "@/modules/programs/components/FormWrapper";
import RegistrationBanner from "@/modules/programs/components/RegistrationBanner";
import {
  Box,
  Stack,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Dialog,
} from "@mui/material";
import { useState } from "react";

type FormData = {
  child: {
    fullName: string;
    language: string;
    ageGroup: string;
  };
  parent: {
    fullName: string;
    relationship: string;
    email: string;
    phoneNo: string;
    homeAddress: string;
    emergencyContact: {
      name: string;
      phoneNo: string;
      homeAddress: string;
    };
  };
  schedule: string[];
  terms: {
    acceptedTerms: boolean;
    truthfulness: boolean;
    consentPersonalInfo: boolean;
    consentMedia?: boolean;
  };
};

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const scheduleOptions = [
  { id: "S1", label: "09:00 - 10:00" },
  { id: "S2", label: "10:30 - 11:30" },
  { id: "S3", label: "13:00 - 14:00" },
  { id: "S4", label: "15:00 - 16:00" },
];

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

  const handleScheduleChange = (
    index: number,
    field: "day" | "time",
    value: string,
  ) => {
    setFormData((p) => {
      const nextSchedule = [...p.schedule];
      const current = nextSchedule[index] ?? "";
      const [currentDay = "", currentTime = ""] = current.split("-");

      const day = field === "day" ? value : currentDay;
      const time = field === "time" ? value : currentTime;

      if (!day || !time) {
        nextSchedule[index] = "";
        return { ...p, schedule: nextSchedule.slice(0, 2) };
      }

      nextSchedule[index] = `${day}-${time}`;
      return { ...p, schedule: nextSchedule.slice(0, 2) };
    });
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

    console.log("Registration payload:", payload);
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
        />
      ),
    },
    {
      title: "Terms and conditions",
      content: <TermsSection formData={formData} toggleTerm={toggleTerm} />,
    },
  ];

  return (
    <Box bgcolor={"#FAFAFA"} minHeight={"100vh"}>
      <AppBar layout="narrow" />
      <RegistrationBanner
        title="French Immigration Pathway Registration"
        textColor="#1B7109"
        mainColor="#AEFA9E"
        secondaryColor="#81EE6A"
      />
      {/* <FormWrapper sections={sections} onSubmit={handleSubmit} /> */}
      {/* <Footer /> */}
    </Box>
  );
}

function ChildSection({
  formData,
  updateChild,
}: {
  formData: FormData;
  updateChild: any;
}) {
  return (
    <Stack gap={3}>
      <TextField
        label="Child full name"
        value={formData.child.fullName}
        onChange={(e) => updateChild({ fullName: e.target.value })}
      />

      <FormControl>
        <InputLabel>Language</InputLabel>
        <Select
          value={formData.child.language}
          label="Language"
          onChange={(e) => updateChild({ language: e.target.value })}
        >
          <MenuItem value="French">French</MenuItem>
          <MenuItem value="Spanish">Spanish</MenuItem>
          <MenuItem value="Mandarin">Mandarin</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Age group</InputLabel>
        <Select
          value={formData.child.ageGroup}
          label="Age group"
          onChange={(e) => updateChild({ ageGroup: e.target.value })}
        >
          <MenuItem value="3-4">3 - 4</MenuItem>
          <MenuItem value="5-6">5 - 6</MenuItem>
          <MenuItem value="7-8">7 - 8</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}

function ParentSection({
  formData,
  updateParent,
  updateEmergency,
}: {
  formData: FormData;
  updateParent: any;
  updateEmergency: (
    patch: Partial<FormData["parent"]["emergencyContact"]>,
  ) => void;
}) {
  return (
    <Stack gap={3}>
      <TextField
        label="Parent full name"
        value={formData.parent.fullName}
        onChange={(e) => updateParent({ fullName: e.target.value })}
      />

      <FormControl>
        <InputLabel>Relationship</InputLabel>
        <Select
          value={formData.parent.relationship}
          label="Relationship"
          onChange={(e) => updateParent({ relationship: e.target.value })}
        >
          <MenuItem value="Parent">Parent</MenuItem>
          <MenuItem value="Guardian">Guardian</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Email"
        value={formData.parent.email}
        onChange={(e) => updateParent({ email: e.target.value })}
      />

      <TextField
        label="Phone number"
        value={formData.parent.phoneNo}
        onChange={(e) => updateParent({ phoneNo: e.target.value })}
      />

      <TextField
        label="Home address"
        value={formData.parent.homeAddress}
        onChange={(e) => updateParent({ homeAddress: e.target.value })}
        multiline
      />

      <Typography variant="subtitle2">Emergency contact</Typography>

      <TextField
        label="Emergency name"
        value={formData.parent.emergencyContact.name}
        onChange={(e) => updateEmergency({ name: e.target.value })}
      />

      <TextField
        label="Emergency phone"
        value={formData.parent.emergencyContact.phoneNo}
        onChange={(e) => updateEmergency({ phoneNo: e.target.value })}
      />

      <TextField
        label="Emergency address"
        value={formData.parent.emergencyContact.homeAddress}
        onChange={(e) => updateEmergency({ homeAddress: e.target.value })}
        multiline
      />
    </Stack>
  );
}

function ScheduleSection({
  formData,
  handleScheduleChange,
}: {
  formData: FormData;
  handleScheduleChange: (
    index: number,
    field: "day" | "time",
    value: string,
  ) => void;
}) {
  return (
    <Stack gap={3}>
      <Typography>
        Choose up to two schedules. Each row lets you pick one day and one time.
      </Typography>
      {[0, 1].map((index) => {
        const selected = formData.schedule[index] ?? "";
        const [dayValue, timeValue] = selected.split("-");

        return (
          <Stack key={index} direction={{ xs: "column", sm: "row" }} gap={2}>
            <FormControl fullWidth>
              <InputLabel>Day {index + 1}</InputLabel>
              <Select
                value={dayValue ?? ""}
                label={`Day ${index + 1}`}
                onChange={(e) =>
                  handleScheduleChange(index, "day", e.target.value as string)
                }
              >
                <MenuItem value="">None</MenuItem>
                {days.map((day) => (
                  <MenuItem key={day} value={day}>
                    {day}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Time {index + 1}</InputLabel>
              <Select
                value={timeValue ?? ""}
                label={`Time ${index + 1}`}
                onChange={(e) =>
                  handleScheduleChange(index, "time", e.target.value as string)
                }
              >
                <MenuItem value="">None</MenuItem>
                {scheduleOptions.map((opt) => (
                  <MenuItem key={opt.id} value={opt.id}>
                    {opt.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        );
      })}
    </Stack>
  );
}

function TermsSection({
  formData,
  toggleTerm,
}: {
  formData: FormData;
  toggleTerm: (key: keyof FormData["terms"], value: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <FormGroup sx={{ gap: "16px" }}>
      <FormControlLabel
        control={
          <Checkbox
            checked={formData.terms.acceptedTerms}
            onChange={(e) => toggleTerm("acceptedTerms", e.target.checked)}
          />
        }
        label={
          <Typography variant="body2" color="textSecondary">
            I confirm that I have read, understood and agree to the
            LinguaSprouts Academy Registration{" "}
            <Typography
              component={"span"}
              variant="subtitle2"
              color="info"
              onClick={() => setOpen(true)}
            >
              {" "}
              Terms & Conditions.
            </Typography>{" "}
          </Typography>
        }
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={formData.terms.truthfulness}
            onChange={(e) => toggleTerm("truthfulness", e.target.checked)}
          />
        }
        label={
          <Typography variant="body2" color="textSecondary">
            I certify that the information provided in this application is true
            and accurate.
          </Typography>
        }
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={formData.terms.consentPersonalInfo}
            onChange={(e) =>
              toggleTerm("consentPersonalInfo", e.target.checked)
            }
          />
        }
        label={
          <Typography variant="body2" color="textSecondary">
            I consent to the collection and use of my personal information for
            enrolment and administration purposes.
          </Typography>
        }
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={!!formData.terms.consentMedia}
            onChange={(e) => toggleTerm("consentMedia", e.target.checked)}
          />
        }
        label={
          <Typography variant="body2" color="textSecondary">
            I consent to LinguaSprouts Academy using photographs or videos for
            educational and promotional purposes.
          </Typography>
        }
      />

      <Dialog open={open} onClose={() => setOpen(false)}>
        <Stack padding={"24px"} gap={"16px"}>
          <Typography variant="h4">
            LinguaSprouts Academy Registration Terms & Conditions
          </Typography>

          <Typography variant="body2" color="textSecondary">
            Please read the following before submitting your registration. These
            terms are designed to be simple and easy to understand. By checking
            the acceptance box, you agree to the following:
          </Typography>

          <Box>
            <Typography variant="subtitle2">
              1. Enrolment & Class Placement
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Your place at LinguaSprouts Academy is confirmed once your
              registration has been successfully submitted and the applicable
              fees have been paid. If your preferred class reaches its planned
              capacity, the Academy may create an additional class section or
              assign an alternative instructor or classroom to accommodate your
              enrolment. You will be notified of your confirmed class details
              before your programme begins.
            </Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2">2. Fees & Refunds</Typography>
            <Typography variant="body2" color="textSecondary">
              The registration fee is non-refundable. Tuition paid before
              classes begin is refundable less the registration fee. Once
              classes have started, refunds may only be considered for unused
              lessons in exceptional circumstances and at the Academy's
              discretion.
            </Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2">
              3. Cancellation & Withdrawal
            </Typography>
            <Typography variant="body2" color="textSecondary">
              If you wish to withdraw, written notice must be provided before
              your next billing date to prevent future tuition charges. Fees
              already due remain payable.
            </Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2">4. Missed Classes</Typography>
            <Typography variant="body2" color="textSecondary">
              Tuition reserves your place in class and is not refundable due to
              absence. Where practical, LinguaSprouts Academy may offer a makeup
              lesson or an alternative learning opportunity; however, this
              cannot be guaranteed.
            </Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2">5. Health & Safety</Typography>
            <Typography variant="body2" color="textSecondary">
              Students with a contagious illness should remain at home. Parents
              or guardians must provide accurate emergency contact information
              and notify the Academy of any important medical or safety
              concerns.
            </Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2">6. Behaviour</Typography>
            <Typography variant="body2" color="textSecondary">
              Students are expected to behave respectfully toward staff and
              fellow learners. Repeated disruptive, unsafe or abusive behaviour
              may result in suspension or withdrawal from the programme.
            </Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2">
              7. Parent Responsibilities
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Parents and guardians are responsible for timely drop-off and
              pick-up, keeping contact details up to date, and communicating any
              important changes affecting the student.
            </Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2">
              8. Public Holidays & Closures
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Classes are not held on statutory holidays unless otherwise
              communicated. Where appropriate, the Academy may provide an
              alternative class, online lesson or schedule adjustment.
            </Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2">9. Media Consent</Typography>
            <Typography variant="body2" color="textSecondary">
              If you choose to give consent, LinguaSprouts Academy may use
              photographs or videos of students for educational and promotional
              purposes. Media consent is optional and may be withdrawn at any
              time by notifying the Academy in writing.
            </Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2">10. Privacy</Typography>
            <Typography variant="body2" color="textSecondary">
              Personal information is collected only for enrolment,
              administration and communication purposes and is handled in
              accordance with applicable Canadian privacy laws.
            </Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2">
              11. Limitation of Liability
            </Typography>
            <Typography variant="body2" color="textSecondary">
              LinguaSprouts Academy will take reasonable care to provide a safe
              learning environment. Except where prohibited by law, the
              Academy's liability is limited to the tuition paid for the
              affected programme.
            </Typography>
          </Box>
        </Stack>
      </Dialog>
    </FormGroup>
  );
}

"use client";

import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Dialog,
  Stack,
  Box,
} from "@mui/material";
import { useState } from "react";
import { AfterSchoolRegPayload } from "../types/afterschoolReg";

type FormData = AfterSchoolRegPayload;

export default function TermsSection({
  terms,
  toggleTerm,
}: {
  terms: FormData["terms"];
  toggleTerm: (key: keyof FormData["terms"], value: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <FormGroup sx={{ gap: "16px" }}>
      <FormControlLabel
        control={
          <Checkbox
            checked={terms.acceptedTerms}
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
            checked={terms.truthfulness}
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
            checked={terms.consentPersonalInfo}
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
            checked={!!terms.consentMedia}
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

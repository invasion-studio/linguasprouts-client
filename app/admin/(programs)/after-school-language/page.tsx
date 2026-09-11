"use client";

import {
  alpha,
  Box,
  Drawer,
  drawerClasses,
  Stack,
  Tab,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Banner from "@/src/shared/ui/Banner";
import AdminTable from "@/src/_pages/admin/ui/AdminTable";
import { useListAfterSchoolRegs } from "@/src/entities/afterSchoolReg";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { StyledTabs } from "@/src/shared/ui/StyledTabs";
import Filter, { FilterGroup, FilterValue } from "@/src/shared/ui/Filter";
import { PrimaryButton } from "@/src/shared/ui/PrimaryButton";
import FilterListIcon from "@mui/icons-material/FilterList";

const columns = [
  { key: "parentName", header: "Parent name" },
  { key: "email", header: "Email" },
  { key: "phone", header: "Phone" },
  { key: "child", header: "Child name" },
];

export default function Page() {
  const { data, isPending } = useListAfterSchoolRegs();
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState(0);

  const rows = data?.data.map((r) => ({
    id: r.id,
    parentName: r.parent.fullName,
    email: r.parent.email,
    phone: r.parent.phoneNo,
    child: r.child.fullName,
  }));

  const handleRowClick = (id?: string) => {
    if (id) router.push(`/admin/after-school-language/${id}`);
  };

  return (
    <>
      <Banner title="After School Language Program" height="180px" />

      <Box
        gap={"24px"}
        component={"div"}
        margin={"32px 0px 32px 0px"}
        className="adminLayout"
      >
        <StyledTabs
          value={selectedTab}
          onChange={(_, value) => setSelectedTab(value)}
        >
          <Tab value={0} label="Registrations" />
          <Tab value={1} label="Class list" />
        </StyledTabs>

        {selectedTab === 0 ? (
          <AdminTable
            columns={columns}
            rows={rows || []}
            isPending={isPending}
            onRowClick={handleRowClick}
          />
        ) : (
          <ClassList />
        )}
      </Box>
    </>
  );
}

const childListFilters: FilterGroup[] = [
  {
    group: "Language",
    params: ["French", "Spanish", "Mandarin", "Igbo", "Yoruba"],
  },
  {
    group: "Age Group",
    params: ["5-7", "8-11", "12-15", "16-19"],
  },
];

const childListColumns = [
  { key: "fullName", header: "Child Name" },
  { key: "ageGroup", header: "Age Group" },
  { key: "language", header: "Language" },
  { key: "schedule", header: "Schedule" },
];

const ClassList = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterValue>({});
  const { data, isPending } = useListAfterSchoolRegs();
  const children = data?.data.map((r) => ({
    id: r.id,
    ...r.child,
    schedule: r.schedule.map((s) => `${s.day} ${s.time}`).join(", "),
  }));

  const smallBreakpoint = useMediaQuery(useTheme().breakpoints.up("sm"));

  const handleFilterButtonClick = () => {
    setFilterOpen(!filterOpen);
  };

  return (
    <Box>
      <Stack
        flexDirection={"row"}
        paddingLeft={"24px"}
        alignItems={"center"}
        height={"40px"}
        marginBottom={"8px"}
        justifyContent={"space-between"}
      >
        <Typography variant="caption">
          Count:{" " + children?.length}
        </Typography>

        <PrimaryButton
          variant="text"
          color="inherit"
          onClick={handleFilterButtonClick}
          startIcon={<FilterListIcon sx={{ fontSize: "16px" }} />}
          sx={{
            color: (theme) =>
              filterOpen
                ? theme.palette.primary.dark
                : theme.palette.ibmgrey[70],
            bgcolor: (theme) =>
              filterOpen ? alpha(theme.palette.primary.main, 0.12) : undefined,
          }}
        >
          Filter
        </PrimaryButton>
      </Stack>

      <Stack flexDirection={"row"} gap={"8px"}>
        <Box flex={1}>
          <AdminTable
            columns={childListColumns}
            rows={children || []}
            isPending={isPending}
            onRowClick={() => {}}
          />
        </Box>

        {filterOpen && (
          <Box
            borderRadius={"8px"}
            height={"calc(100svh - 64px - 16px)"}
            overflow={"auto"}
            position={"sticky"}
            top={`calc(64px + 8px)`}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Filter
              filters={childListFilters}
              value={filters}
              onChange={setFilters}
            />
          </Box>
        )}
        <Drawer
          open={filterOpen && !smallBreakpoint}
          onClose={() => setFilterOpen(false)}
          anchor="right"
          sx={{
            [`& .${drawerClasses.paper}`]: {
              margin: "8px",
              borderRadius: "8px",
              height: "calc(100vh - 16px)",
              boxShadow: (theme) => theme.shadows[10],
            },
          }}
        >
          <Filter
            filters={childListFilters}
            value={filters}
            onChange={setFilters}
          />
        </Drawer>
      </Stack>
    </Box>
  );
};

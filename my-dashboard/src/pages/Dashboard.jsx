import { Container, Grid, Typography, CssBaseline, Box } from "@mui/material";
import DashboardCard from "../components/DashboardCard";
import InventoryChart from "../components/InventoryChart";
import InventoryTable from "../components/InventoryTable";
import { inventorySummary, usageData, tableData } from "../data/sampleData";

export default function Dashboard() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        {/* Sidebar */}
        <Box
          sx={{
            width: 220,
            bgcolor: "grey.900",
            color: "white",
            p: 2,
            minHeight: "100vh",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Inventory
          </Typography>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>Home</li>
            <li>Back Bar</li>
            <li>Reports</li>
            <li>Team</li>
          </ul>
        </Box>

        {/* Main Content */}
        <Container sx={{ mt: 4, mb: 6, flex: 1 }}>
          <Typography variant="h4" gutterBottom>
            Salon Inventory Dashboard
          </Typography>

          {/* KPI Cards */}
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {inventorySummary.map((item, i) => (
              <Grid item xs={12} sm={4} key={i}>
                <DashboardCard
                  label={item.label}
                  value={item.value}
                  color={item.color || "primary"}
                />
              </Grid>
            ))}
          </Grid>

          {/* Chart */}
          <Typography variant="h6" gutterBottom>
            Inventory Usage Over Time
          </Typography>
          <InventoryChart data={usageData} />

          {/* Table */}
          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            Current Stock
          </Typography>
          <InventoryTable rows={tableData} />
        </Container>
      </Box>
    </>
  );
}

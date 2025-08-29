import { Container, Grid, Typography, CssBaseline } from "@mui/material";
import DashboardCard from "../components/DashboardCard";
import InventoryChart from "../components/InventoryChart";
import InventoryTable from "../components/InventoryTable";
import { inventorySummary, usageData, tableData } from "../data/sampleData";

export default function Dashboard() {
  return (
    <>
      <CssBaseline />
      <Container sx={{ mt: 4, mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          Salon Inventory Dashboard
        </Typography>

        <Grid container spacing={2} sx={{ mb: 4 }}>
          {inventorySummary.map((item, i) => (
            <Grid item xs={12} sm={4} key={i}>
              <DashboardCard label={item.label} value={item.value} />
            </Grid>
          ))}
        </Grid>

        <Typography variant="h6" gutterBottom>
          Inventory Usage Over Time
        </Typography>
        <InventoryChart data={usageData} />

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          Current Stock
        </Typography>
        <InventoryTable rows={tableData} />
      </Container>
    </>
  );
}

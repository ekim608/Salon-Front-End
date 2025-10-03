import {
  Container,
  Grid,
  Typography,
  CssBaseline,
  Box,
  TextField,
  MenuItem,
  Stack,
} from "@mui/material";
import { useState } from "react";
import DashboardCard from "../components/DashboardCard";
import InventoryChart from "../components/InventoryChart";
import InventoryTable from "../components/InventoryTable";
import { inventorySummary, tableData } from "../data/sampleData";
import ItemUsageChart from "../components/ItemUsageChart";

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  // Filter rows by search + category
  const filteredRows = tableData.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = category ? item.category === category : true;
    return matchesSearch && matchesCategory;
  });

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
        <Container
          sx={{
            mt: 4,
            mb: 6,
            flex: 1,
            bgcolor: "grey.50",
            borderRadius: 2,
            p: 2,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Salon Inventory Dashboard
          </Typography>

          {/* Restock Section */}
          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            Restock Needed
          </Typography>
          <InventoryTable
            rows={tableData.filter(
              (item) => item.stock === 0 || item.stock < item.min
            )}
            showSource
            highlightRows
          />

          {/* KPI Cards */}
          <Grid container spacing={2} sx={{ mb: 4, mt: 4 }}>
            {inventorySummary.map((item, i) => (
              <Grid key={i} size={{ xs: 12, sm: 4 }}>
                <DashboardCard
                  label={item.label}
                  value={item.value}
                  color={item.color || "primary"}
                />
              </Grid>
            ))}
          </Grid>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            Item Usage Trends
          </Typography>
          {tableData.map((item, i) => (
            <ItemUsageChart key={i} item={item} />
          ))}

          {/* Chart */}
          <Typography variant="h6" gutterBottom>
            Inventory Usage Over Time
          </Typography>

          {/* Search + Filter Controls */}
          <Stack direction="row" spacing={2} sx={{ mt: 4, mb: 2 }}>
            <TextField
              label="Search by name or barcode"
              variant="outlined"
              size="small"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <TextField
              select
              label="Filter by category"
              variant="outlined"
              size="small"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Hair Color Developer">
                Hair Color Developer
              </MenuItem>
              <MenuItem value="Hair Color">Hair Color</MenuItem>
              <MenuItem value="Hair Treatment">Hair Treatment</MenuItem>
              <MenuItem value="Shampoo">Shampoo</MenuItem>
              <MenuItem value="Conditioner">Conditioner</MenuItem>
            </TextField>
          </Stack>

          {/* Full Stock Table */}
          <Typography variant="h6" gutterBottom>
            Current Stock
          </Typography>
          <InventoryTable rows={filteredRows} />
        </Container>
      </Box>
    </>
  );
}

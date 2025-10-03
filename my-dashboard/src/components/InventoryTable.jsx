import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";

// Helper for conditional color
const colorForStock = (stock, min) =>
  stock === 0 ? "error.main" : stock < min ? "warning.main" : "text.primary";

// Optional: category color map
const categoryColor = {
  "Creme Developer": "default",
  "Color Finish": "primary",
  Concealer: "secondary",
  Conditioner: "info",
  Shampoo: "success",
};

export default function InventoryTable({ rows }) {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Cost Price</TableCell>
            <TableCell>Retail Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Supplier</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Min</TableCell>
            <TableCell>Max</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((r, i) => (
            <TableRow key={i} hover>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{r.name}</TableCell>
              <TableCell>${r.cost.toFixed(2)}</TableCell>
              <TableCell>${r.retail.toFixed(2)}</TableCell>
              <TableCell
                sx={{ color: colorForStock(r.stock, r.min), fontWeight: 600 }}
              >
                {r.stock}
              </TableCell>
              <TableCell>{r.supplier}</TableCell>
              <TableCell>
                <Chip
                  label={r.category}
                  color={categoryColor[r.category] || "default"}
                  size="small"
                />
              </TableCell>
              <TableCell>{r.min}</TableCell>
              <TableCell>{r.max}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

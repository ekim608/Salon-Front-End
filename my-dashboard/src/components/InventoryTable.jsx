import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const colorFor = (stock) =>
  stock === 0 ? "error.main" : stock < 5 ? "warning.main" : "text.primary";

export default function InventoryTable({ rows }) {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell>Supplier</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((r, i) => (
            <TableRow key={i} hover>
              <TableCell>{r.name}</TableCell>
              <TableCell sx={{ color: colorFor(r.stock), fontWeight: 600 }}>
                {r.stock}
              </TableCell>
              <TableCell>{r.supplier}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

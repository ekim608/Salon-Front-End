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

// Helper for conditional stock color
const colorForStock = (stock, min) =>
  stock === 0 ? "error.main" : stock < min ? "warning.main" : "success.main";

// Category color map
const categoryColor = {
  "Hair Color Developer": "secondary",
  "Hair Color": "primary",
  "Hair Treatment": "success",
  Shampoo: "info",
  Conditioner: "warning",
};

export default function InventoryTable({
  rows,
  showSource = false,
  highlightRows = false,
}) {
  return (
    <TableContainer component={Paper} sx={{ bgcolor: "aliceblue" }}>
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
            {showSource && <TableCell>Source</TableCell>}
            <TableCell>Date Expected to be Out of Stock</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((r, i) => (
            <TableRow
              key={i}
              hover
              sx={{
                bgcolor: highlightRows
                  ? r.stock === 0
                    ? "error.light"
                    : r.stock < r.min
                    ? "warning.light"
                    : "inherit"
                  : "inherit",
              }}
            >
              <TableCell>{i + 1}</TableCell>
              <TableCell>{r.name}</TableCell>
              <TableCell>
                {r.cost !== undefined ? `$${r.cost.toFixed(2)}` : "N/A"}
              </TableCell>
              <TableCell>
                {r.retail !== undefined ? `$${r.retail.toFixed(2)}` : "N/A"}
              </TableCell>
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
                  variant="filled"
                />
              </TableCell>
              <TableCell>{r.min}</TableCell>
              <TableCell>{r.max}</TableCell>
              {showSource && (
                <TableCell>
                  {r.source ? (
                    r.source.startsWith("http") ? (
                      <a
                        href={r.source}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Website
                      </a>
                    ) : (
                      r.source
                    )
                  ) : (
                    "N/A"
                  )}
                </TableCell>
              )}
              <TableCell
                sx={{
                  bgcolor: "transparent", // let the row highlight color show through
                }}
              >
                {r.expectedRunOut
                  ? new Date(r.expectedRunOut).toLocaleDateString()
                  : "N/A"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

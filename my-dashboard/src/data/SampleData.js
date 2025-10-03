// src/data/sampleData.js

export const inventorySummary = [
  { label: "Total Items", value: 120, color: "primary" },
  { label: "Low Stock", value: 8, color: "warning" },
  { label: "Out of Stock", value: 3, color: "error" },
];

export const usageData = [
  { date: "2025-08-20", used: 12 },
  { date: "2025-08-21", used: 9 },
  { date: "2025-08-22", used: 15 },
  { date: "2025-08-23", used: 6 },
];

export const tableData = [
  {
    name: "Shampoo A",
    cost: 5,
    retail: 10,
    stock: 15,
    supplier: "Brand X",
    category: "Shampoo",
    min: 5,
    max: 20,
  },
  {
    name: "Conditioner B",
    cost: 6,
    retail: 12,
    stock: 3,
    supplier: "Brand Y",
    category: "Conditioner",
    min: 5,
    max: 20,
  },
  {
    name: "Hair Dye C",
    cost: 7,
    retail: 14,
    stock: 0,
    supplier: "Brand Z",
    category: "Color Finish",
    min: 5,
    max: 20,
  },
];

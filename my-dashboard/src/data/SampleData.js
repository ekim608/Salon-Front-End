// src/data/sampleData.js

export const inventorySummary = [
  { label: "Total Items", value: 120, color: "primary" },
  { label: "Low Stock", value: 8, color: "warning" },
  { label: "Out of Stock", value: 3, color: "error" },
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
    source: "https://amazon.com/shampoo-a",
    expectedRunOut: "2025-10-15",
    usageHistory: [
      { date: "2025-09-01", used: 5 },
      { date: "2025-09-08", used: 3 },
      { date: "2025-09-15", used: 4 },
      { date: "2025-09-22", used: 2 },
    ],
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
    source: "My Favorite Supply Store, LA",
    expectedRunOut: "2025-10-20",
    usageHistory: [
      { date: "2025-10-01", used: 4 },
      { date: "2025-10-08", used: 2 },
      { date: "2025-10-15", used: 4 },
      { date: "2025-10-22", used: 5 },
    ],
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
    source: "https://brandz.com/hair-dye-c",
    expectedRunOut: "2025-10-31",
    usageHistory: [
      { date: "2025-09-01", used: 2 },
      { date: "2025-09-08", used: 1 },
      { date: "2025-09-15", used: 3 },
      { date: "2025-09-22", used: 2 },
    ],
  },
];

import { Card, CardContent, Typography } from '@mui/material';

export default function DashboardCard({ label, value }) {
  return (
    <Card sx={{ minWidth: 160, textAlign: 'center' }}>
      <CardContent>
        <Typography variant="h6">{label}</Typography>
        <Typography variant="h4" color="primary">{value}</Typography>
      </CardContent>
    </Card>
  );
}

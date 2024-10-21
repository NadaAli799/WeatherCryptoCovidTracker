import * as React from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";

const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "weather",
    title: "Weather Information",
    icon: <WbSunnyIcon />,
    path: "/weather",
  },
  {
    segment: "crypto",
    title: "Cryptocurrency Prices",
    icon: <MonetizationOnIcon />,
    path: "/crypto",
  },
  {
    segment: "covid",
    title: "COVID-19 Statistics",
    icon: <BarChartIcon />,
    path: "/covid",
  },
];

export default function DashboardLayoutBasic({ children }) {
  const demoWindow = undefined;

  return (
    <AppProvider navigation={NAVIGATION} window={demoWindow}>
      <DashboardLayout>
        <PageContainer>{children}</PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}

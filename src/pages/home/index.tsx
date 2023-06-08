import React from "react";
import { subscribeTicks, unsubscribeTicks } from "../../websocket";
import { AxisOptions, Chart, ChartOptions } from "react-charts";
import useDemoConfig from "./useDemoConfig";
import "../../styles/pages/home.scss";

interface ChartData {
  label: string;
  data: { x: number; y: number }[];
}

const HomePage: React.FC = () => {
  const [chartData, setChartData] = React.useState<ChartData[]>([]);

  React.useEffect(() => {
    subscribeTicks();

    return () => {
      // Unsubscribe from WebSocket ticks on component unmount
      unsubscribeTicks();
    };
  }, []);

  const { data, randomizeData } = useDemoConfig({
    series: 10,
    dataType: "time",
  });

  const primaryAxis = React.useMemo<
    AxisOptions<(typeof data)[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) => datum.primary as unknown as Date,
    }),
    []
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<(typeof data)[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.secondary,
      },
    ],
    []
  );

  return (
    <div>
      Home
      <div className="container">
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
      </div>
    </div>
  );
};

export default HomePage;

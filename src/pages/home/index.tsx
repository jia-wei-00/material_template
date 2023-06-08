import React from "react";
import { dataStore } from "../../stores";
import { AxisOptions, Chart, ChartOptions } from "react-charts";
import useDemoConfig from "./useDemoConfig";
import { observer } from "mobx-react-lite";

type DailyStars = {
  date: Date;
  stars: number;
};

type Series = {
  label: string;
  data: any;
};

interface ChartData {
  label: string;
  data: { date: number; stars: number };
}

const HomePage: React.FC = () => {
  const [chartData, setChartData] = React.useState<any>([]);

  const data: Series[] = [
    {
      label: "React Charts",
      data: dataStore.chart_data.map((data) => ({
        date: new Date(data.epoch).getTime(),
        stars: data.quote,
      })),
    },
  ];

  console.log(dataStore.chart_data);

  React.useEffect(() => {
    dataStore.subscribeTicks();

    return () => {
      // Unsubscribe from WebSocket ticks on component unmount
      dataStore.unsubscribeTicks();
    };
  }, []);

  // const { data, randomizeData } = useDemoConfig({
  //   series: 10,
  //   dataType: "time",
  // });

  // const primaryAxis = React.useMemo<
  //   AxisOptions<(typeof data)[number]["data"][number]>
  // >(
  //   () => ({
  //     getValue: (datum) => datum.primary as unknown as Date,
  //   }),
  //   []
  // );

  // const secondaryAxes = React.useMemo<
  //   AxisOptions<(typeof data)[number]["data"][number]>[]
  // >(
  //   () => [
  //     {
  //       getValue: (datum) => datum.secondary,
  //     },
  //   ],
  //   []
  // );

  const primaryAxis = React.useMemo(
    (): AxisOptions<DailyStars> => ({
      getValue: (datum) => datum.date,
    }),
    []
  );

  const secondaryAxes = React.useMemo(
    (): AxisOptions<DailyStars>[] => [
      {
        getValue: (datum) => datum.stars,
      },
    ],
    []
  );

  return (
    <div>
      Home
      <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
        }}
      />
    </div>
  );
};

export default observer(HomePage);

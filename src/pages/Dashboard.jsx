import React from "react";
import ReactECharts from "echarts-for-react"; // or var ReactECharts = require('echarts-for-react');
import { Card, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

const option4 = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  legend: {
    data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "Email",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "Union Ads",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: "Video Ads",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: "Direct",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: "Search Engine",
      type: "line",
      stack: "Total",
      label: {
        show: true,
        position: "top",
      },
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [820, 932, 901, 934, 1290, 1330, 1320],
    },
  ],
};

const option3 = {
  series: [
    {
      type: "gauge",
      center: ["50%", "60%"],
      startAngle: 200,
      endAngle: -20,
      min: 0,
      max: 60,
      splitNumber: 12,
      itemStyle: {
        color: "#FFAB91",
      },
      progress: {
        show: true,
        width: 30,
      },
      pointer: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          width: 30,
        },
      },
      axisTick: {
        distance: -45,
        splitNumber: 5,
        lineStyle: {
          width: 2,
          color: "#999",
        },
      },
      splitLine: {
        distance: -52,
        length: 14,
        lineStyle: {
          width: 3,
          color: "#999",
        },
      },
      axisLabel: {
        distance: -20,
        color: "#999",
        fontSize: 20,
      },
      anchor: {
        show: false,
      },

      detail: {
        valueAnimation: true,
        width: "60%",
        lineHeight: 40,
        borderRadius: 8,
        offsetCenter: [0, "-15%"],
        fontSize: 60,
        fontWeight: "bolder",
        formatter: "{value} °C",
        color: "inherit",
      },
      data: [
        {
          value: 20,
        },
      ],
    },
  ],
};

const option = {
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
    top: "10%",
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "Email",
      type: "line",
      stack: "Total",
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "Union Ads",
      type: "line",
      stack: "Total",
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: "Video Ads",
      type: "line",
      stack: "Total",
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: "Direct",
      type: "line",
      stack: "Total",
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: "Search Engine",
      type: "line",
      stack: "Total",
      data: [820, 932, 901, 934, 1290, 1330, 1320],
    },
  ],
};

const option2 = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  legend: {
    data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "Direct",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [320, 332, 301, 334, 390, 330, 320],
    },
  ],
};

export default function Dashboard() {
  return (
    <Box p={2} width="100%" height="100%">
      <Typography variant="h3" fontWeight={400} color={"primary"}>
        Dashboad
      </Typography>

      <Divider sx={{ my: 1 }}></Divider>

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        height={"100%"}
        flexWrap="wrap"
      >
        <Card
          sx={{
            width: "49%",
            height: "45%",
          }}
        >
          <ReactECharts
            option={option}
            notMerge={true}
            //   lazyUpdate={true}
            theme={"theme_name"}
            //   onChartReady={this.onChartReadyCallback}
            // onEvents={EventsDict}
            style={{ height: "100%", width: "100%" }}
            // opts={}
          />
        </Card>

        <Card
          sx={{
            width: "49%",
            height: "45%",
          }}
        >
          <ReactECharts
            option={option2}
            notMerge={true}
            //   lazyUpdate={true}
            theme={"theme_name"}
            //   onChartReady={this.onChartReadyCallback}
            // onEvents={EventsDict}
            style={{ height: "100%", width: "100%" }}
            // opts={}
          />
        </Card>

        <Card
          sx={{
            width: "49%",
            height: "45%",
          }}
        >
          <ReactECharts
            option={option4}
            notMerge={true}
            //   lazyUpdate={true}
            theme={"theme_name"}
            //   onChartReady={this.onChartReadyCallback}
            // onEvents={EventsDict}
            style={{ height: "100%", width: "100%" }}
            // opts={}
          />
        </Card>

        <Card
          sx={{
            width: "49%",
            height: "45%",
          }}
        >
          <ReactECharts
            option={option3}
            notMerge={true}
            //   lazyUpdate={true}
            theme={"theme_name"}
            //   onChartReady={this.onChartReadyCallback}
            // onEvents={EventsDict}
            style={{ height: "100%", width: "100%" }}
            // opts={}
          />
        </Card>
      </Box>
    </Box>
  );
}

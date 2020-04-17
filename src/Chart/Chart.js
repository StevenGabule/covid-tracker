import React from "react";
import {HorizontalBar} from "react-chartjs-2";

const Chart = ({data}) => {
    const {positive, negative, totalTestResults} = data;
    const dataStructure = {
        positive,
        negative,
        total: totalTestResults
    };

    const chartDataConfig = {
        labels: Object.keys(dataStructure),
        datasets: [
            {
                data: Object.values(dataStructure),
                label: "Covid-19 Test Results",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255,99,132, 1)",
                borderWidth: 1,
                textTransform: "capitalize",
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
            }
        ]
    }

    return (
        <div>
            <HorizontalBar data={chartDataConfig} />
        </div>
    )
};

export default Chart

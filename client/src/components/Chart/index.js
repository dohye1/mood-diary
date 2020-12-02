import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';

const Chart = () =>{
  const [one, setOne] = useState(1);
  const [two, setTwo] = useState(1);
  const [three, setThree] = useState(1);
  const [four, setFour] = useState(2);
  const [five, setFive] = useState(2);

const state = {
    labels: ['SOOOO HAPPY', 'HAPPY', 'SOSO', 'BAD', 'CRAZY'],
    datasets: [
      {
        label: '# of Votes',
        data: [one, two, three, four, five],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        hoverBackgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

    return (
        <div className="chart-container">
             <Pie
          data={state}
          width={250}
          height={100}
          options={{
            responsive: false,
            maintainAspectRatio: false,
            legend: {
              display: false,
              position: 'bottom'
            }
          }}
        />
        


        </div>
    )
}

export default Chart;
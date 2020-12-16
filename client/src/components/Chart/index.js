import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Pie } from 'react-chartjs-2';

const Chart = ({ date, mode }) => {
  const diaries = useSelector((state) => state.diaryReducer.diaries);

  const [count, setCount] = useState([0, 0, 0, 0, 0]);

  const getCount = () => {
    let one = 0,
      two = 0,
      three = 0,
      four = 0,
      five = 0;
    const splitDate = date.split('-');
    if (mode) {
      diaries.map((diary) => {
        if (
          diary.post_year === Number(splitDate[0]) &&
          diary.post_month === Number(splitDate[1])
        ) {
          switch (Number(diary.mood)) {
            case 1:
              one++;
              break;
            case 2:
              two++;
              break;
            case 3:
              three++;
              break;
            case 4:
              four++;
              break;
            case 5:
              five++;
              break;
            default:
              break;
          }
        }
      });
    } else {
      diaries.map((diary) => {
        if (diary.post_year === Number(splitDate[0])) {
          switch (Number(diary.mood)) {
            case 1:
              one++;
              break;
            case 2:
              two++;
              break;
            case 3:
              three++;
              break;
            case 4:
              four++;
              break;
            case 5:
              five++;
              break;
            default:
              break;
          }
        }
      });
    }
    setCount([one, two, three, four, five]);
  };

  useEffect(() => {
    getCount();
  }, [date, mode, diaries]);

  const state = {
    labels: ['SOOOO HAPPY', 'HAPPY', 'SOSO', 'BAD', 'UPSET'],
    datasets: [
      {
        label: '# of Votes',
        data: count,
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
    <div className='chart-container'>
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
  );
};

export default Chart;

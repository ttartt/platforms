import React from 'react';
import { useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Result = () => {
    const location = useLocation();
    const { inputValue, startDate, endDate } = location.state || {};

    // Функция для генерации массива дат из диапазона
    const generateDates = (startDate, endDate) => {
        const dates = [];
        let currentDate = new Date(startDate);
        while (currentDate <= endDate) {
            dates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1); // Переход к следующей дате
        }
        return dates;
    };

    // Генерация тестовых данных для графика
    const data = generateDates(startDate, endDate).map((date, index) => ({
        date: date,
        price: Math.floor(Math.random() * 200) + 50 // Генерация случайной цены
    }));

    return (
        <div>
            <Typography variant="h2" gutterBottom>
                Результаты
            </Typography>
            <br />
            <Typography variant="h4" gutterBottom>
                Исходные данные:
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
                Ссылка на категорию: {inputValue}
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
                Период: {startDate?.toLocaleDateString()} по {endDate?.toLocaleDateString()}
            </Typography>
            <br />
            <Typography variant="h4" gutterBottom>
                 Анализ:
            </Typography>
            <LineChart width={600} height={300} data={data}>
                <XAxis dataKey="date" tickFormatter={(unixTime) => new Date(unixTime).toLocaleDateString()} />
                <YAxis />
                <CartesianGrid stroke="#f5f5f5" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
            <br />
            <Typography variant="h4" gutterBottom>
                Рекомендации:
            </Typography>
        </div>
    );
};

export default Result;

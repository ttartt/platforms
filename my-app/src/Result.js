import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Typography, Box, Grid, Container, Card, CardContent, CardHeader, Button } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { inputValue, startDate, endDate } = location.state || {};

  const generateDates = (startDate, endDate) => {
    const dates = [];
    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const data = generateDates(startDate, endDate).map((date, index) => ({
    date: date,
    price: Math.floor(Math.random() * 200) + 50
  }));

  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Typography variant="h3" gutterBottom align="center">
          Результаты анализа
        </Typography>
      </Box>

      <Button variant="contained" onClick={() => navigate(-1)} sx={{ mb: 2 }}>
        Назад
      </Button>

      <Grid container spacing={3} mt={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Исходные данные" />
            <CardContent>
              <Typography variant="body1" gutterBottom>
                Ссылка на категорию: {inputValue}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Период: {startDate?.toLocaleDateString()} по {endDate?.toLocaleDateString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardHeader title="Анализ" />
            <CardContent>
              <LineChart width={600} height={300} data={data}>
                <XAxis
                  dataKey="date"
                  tickFormatter={(unixTime) => new Date(unixTime).toLocaleDateString()}
                  tickMargin={10}
                />
                <YAxis />
                <CartesianGrid stroke="#f5f5f5" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardHeader title="Рекомендации" />
            <CardContent>
              <Typography variant="body1" gutterBottom>
                Здесь будут отображаться рекомендации, основанные на анализе данных.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Result;

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography, Box, Grid, Container, Card, CardContent, CardHeader, Button } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { startDate, endDate } = location.state || {};

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

  const theme = createTheme({
    palette: {
      primary: {
        main: '#2a8e9e',
      },
      secondary: {
        main: '#023247',
      },
    },
    typography: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      h3: {
        fontWeight: 700,
        fontSize: '2.5rem',
      },
      body1: {
        fontSize: '1.1rem',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="result-page" style={{ padding: '2rem', backgroundColor: '#d8eaff' }}>
        <Container maxWidth="md">
          <Box mt={4}>
            <Typography variant="h3" gutterBottom align="center" style={{ color: '#023247' }}>
              Результаты анализа
            </Typography>
          </Box>

          <Button
            variant="contained"
            onClick={() => navigate(-1)}
            sx={{ mb: 2, backgroundColor: '#2a8e9e', color: '#fcfcf8', '&:hover': { backgroundColor: '#023247' } }}
          >
            Назад
          </Button>

          <Grid container spacing={3} mt={2}>
            <Grid item xs={12}>
              <Card style={{ backgroundColor: '#fcfcf8', borderRadius: '1rem' }}>
                <CardHeader title="Исходные данные" style={{ color: '#023247' }} />
                <CardContent>
                  <Typography variant="body1" gutterBottom style={{ color: '#023247' }}>
                    Период: {startDate?.toLocaleDateString()} по {endDate?.toLocaleDateString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card style={{ backgroundColor: '#fcfcf8', borderRadius: '1rem' }}>
                <CardHeader title="Анализ" style={{ color: '#023247' }} />
                <CardContent>
                  <LineChart width={600} height={300} data={data}>
                    <XAxis
                      dataKey="date"
                      tickFormatter={(unixTime) => new Date(unixTime).toLocaleDateString()}
                      tickMargin={10}
                      stroke="#023247"
                    />
                    <YAxis stroke="#023247" />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#2a8e9e" activeDot={{ r: 8 }} />
                  </LineChart>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card style={{ backgroundColor: '#fcfcf8', borderRadius: '1rem' }}>
                <CardHeader title="Рекомендации" style={{ color: '#023247' }} />

                <CardContent>
                  <Typography variant="body1" gutterBottom style={{ color: '#023247' }}>
                    Здесь будут отображаться рекомендации, основанные на анализе данных.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Result;

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function HomePage() {
    const [inputValue, setInputValue] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        console.log('Отправлено:', inputValue, startDate, endDate);
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: '#007bff',
            },
            secondary: {
                main: '#f44336',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <div className="homepage">
                <div className="container">
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12}>
                            <Typography variant="h3" className="title" gutterBottom>
                                Price Pulse
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <img src="main.png" alt="" className="main-image" />
                            <div className="description">
                                <Typography variant="body1" gutterBottom>
                                    <span style={{ fontWeight: 'bold' }}>
                                        Платформа предназначена для сбора, анализа и рекомендаций,
                                        <br></br>
                                        исходя из собранных данных с общедоступных маркетплейсов.
                                    </span>
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Вставьте ссылку на интересующую категорию товара из маркетплейсов,
                                    например: Ozon, Wildberries, Яндекс.Маркет.
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Выберите период для сбора данных
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Нажмите на кнопку "Получить", чтобы перейти на страницу с результатами
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="body1" gutterBottom>
                                Введите ссылку на категорию товаров:
                            </Typography>
                            <TextField
                                value={inputValue}
                                onChange={handleInputChange}
                                fullWidth
                                className="input-field"
                                variant="outlined"
                                margin="normal"
                            />
                            <Typography variant="body1" gutterBottom>
                                Введите период для сбора данных:
                            </Typography>
                            <div className="date-pickers">
                                <span className="date-separator">C </span>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    className="date-picker"
                                    dateFormat="dd.MM.yyyy"
                                    popperPlacement="bottom"
                                    showMonthDropdown
                                    showYearDropdown
                                    scrollableYearDropdown
                                />
                                <span className="date-separator"> по </span>
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    className="date-picker"
                                    dateFormat="dd.MM.yyyy"
                                    popperPlacement="bottom"
                                    showMonthDropdown
                                    showYearDropdown
                                    scrollableYearDropdown
                                />
                            </div>
                            <Button variant="contained" color="primary" onClick={handleSubmit} className="get-button" fullWidth>
                                Получить
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default HomePage;

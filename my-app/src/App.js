import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleSubmit = () => {
        console.log('Отправлено:', startDate, endDate);
        navigate('/result', {
            state: { startDate, endDate }
        });
    };

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
            <div className="homepage" style={{ padding: '2rem', backgroundColor: '#d8eaff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Grid container spacing={4} style={{ flexGrow: 1 }}>
                    <Grid item xs={12} md={6}>
                        <div
                            style={{
                                backgroundColor: '#fcfcf8',
                                borderRadius: '1rem',
                                padding: '2rem',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography variant="h3" gutterBottom style={{ color: '#023247', marginBottom: '1.5rem' }}>
                                Price Pulse
                            </Typography>
                            <div className="description" style={{ color: '#023247' }}>
                                <Typography variant="body1" gutterBottom>
                                    <span style={{ fontWeight: 'bold' }}>
                                        Платформа предназначена для сбора, анализа и рекомендаций,
                                        <br></br>
                                        исходя из собранных данных с общедоступных маркетплейсов.
                                    </span>
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Выберите маркетплейсы, которые вас интересуют:
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className="marketplace-button"
                                            style={{
                                                backgroundColor: '#fcfcf8',
                                                color: '#023247',
                                                borderRadius: '0.5rem',
                                                padding: '1rem',
                                                display: 'flex',
                                                flexDirection: 'column',

                                                alignItems: 'center',
                                                minWidth: '100px',
                                            }}
                                        >
                                            <img src="https://pngimg.com/d/ozon_PNG3.png" alt="Ozon" style={{ width: '40px', height: '40px', marginBottom: '0.5rem' }} />
                                            Ozon
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className="marketplace-button"
                                            style={{
                                                backgroundColor: '#fcfcf8',
                                                color: '#023247',
                                                borderRadius: '0.5rem',
                                                padding: '1rem',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                minWidth: '100px',
                                            }}
                                        >
                                            <img src="https://png.klev.club/uploads/posts/2024-04/png-klev-club-hibx-p-wildberries-png-17.png" alt="Wildberries" style={{ width: '40px', height: '40px', marginBottom: '0.5rem' }} />
                                            Wildberries
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className="marketplace-button"
                                            style={{
                                                backgroundColor: '#fcfcf8',
                                                color: '#023247',
                                                borderRadius: '0.5rem',
                                                padding: '1rem',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                minWidth: '100px',
                                            }}
                                        >
                                            <img src="https://avatars.mds.yandex.net/get-marketcms/475644/img-0ec60a9f-2803-4ab0-8408-ed0dd2cbec79.png/optimize" alt="Yandex.Market" style={{ width: '40px', height: '40px', marginBottom: '0.5rem' }} />
                                            Yandex.Market
                                        </Button>
                                    </Grid>
                                </Grid>
                                <Typography variant="body1" gutterBottom>
                                    Введите период для сбора данных:
                                </Typography>
                                <div className="date-pickers" style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
                                    <span className="date-separator" style={{ marginRight: '0.5rem', color: '#2a8e9e' }}>C </span>
                                    <DatePicker

                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        className="date-picker"
                                        dateFormat="dd.MM.yyyy"
                                        popperPlacement="bottom"
                                        showMonthDropdown
                                        style={{ borderRadius: '0.5rem', padding: '0.5rem', backgroundColor: '#ffffff' }}
                                    />
                                    <span className="date-separator" style={{ margin: '0 0.5rem', color: '#2a8e9e' }}> - </span>
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        className="date-picker"
                                        dateFormat="dd.MM.yyyy"
                                        popperPlacement="bottom"
                                        showMonthDropdown
                                        style={{ borderRadius: '0.5rem', padding: '0.5rem', backgroundColor: '#ffffff' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div
                            style={{
                                backgroundColor: '#fcfcf8',
                                borderRadius: '1rem',
                                padding: '2rem',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <img
                                src="https://cdn.prod.website-files.com/61ebe5f773be1acd620f8208/61fb879dfccdca6a20c66d4a_e-commerce-marketplace.gif"
                                alt=""
                                className="main-image"
                                style={{ borderRadius: '0.5rem', maxWidth: '350px', height: 'auto', marginBottom: '2rem' }}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                className="submit-button"
                                onClick={handleSubmit}
                                style={{
                                    borderRadius: '0.5rem',
                                    padding: '0.75rem 1.5rem',
                                    backgroundColor: '#2a8e9e',
                                    marginTop: '1.5rem',
                                }}
                            >
                                Получить
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );
}

export default HomePage;

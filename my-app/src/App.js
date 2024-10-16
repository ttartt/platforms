import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import './App.css';

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

    const initialColor = '#fcfcf8'; // Исходный цвет
        const activeColor = '#90aff1'; // Цвет бирюзовый
        const [bgColor, setBgColor] = useState(initialColor); // Состояние для цвета кнопки
        const textColor = bgColor === initialColor ? '#16305e' : '#fcfcf8'; // Цвет текста
        const handleButtonClick = () => {
            // Меняем цвет на противоположный
            setBgColor(prevColor => (prevColor === initialColor ? activeColor : initialColor));
        };

        const initialColorOzon = '#fcfcf8'; // Исходный цвет
        const activeColorOzon = '#90aff1'; // Цвет бирюзовый
        const [bgColorOzon, setBgColorOzon] = useState(initialColorOzon); // Состояние для цвета кнопки
        const textColorOzon = bgColorOzon === initialColorOzon ? '#16305e' : '#fcfcf8'; // Цвет текста
        const handleButtonClickOzon = () => {
                    // Меняем цвет на противоположный
        setBgColorOzon(prevColor => (prevColor === initialColorOzon ? activeColorOzon : initialColorOzon));
        };

        // Состояние для выбора из комбобокса
            const [selectedMarketplace, setSelectedMarketplace] = useState('');

            const handleMarketplaceChange = (event) => {
                setSelectedMarketplace(event.target.value);
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
            <div className="homepage" style={{ padding: '2rem', backgroundColor: '#d8eaff', height: '95vh', display: 'flex', flexDirection: 'column' }}>
                <Grid container spacing={4} style={{ flexGrow: 1 }}>
                    <Grid item xs={12} md={6}>
                        <div
                            style={{
                                backgroundColor: '#fcfcf8',
                                borderRadius: '1rem',
                                padding: '2rem',
                                height: '90%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography variant="h1" gutterBottom style={{ color: '#132a52', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                                Price   Pulse
                            </Typography>
                            <div className="description" style={{ color: '#16305e' }}>
                                <Typography variant="h3" gutterBottom>
                                    <span style={{ fontWeight: 'bold' }}>
                                        Платформа предназначена для сбора, анализа и рекомендаций,
                                        <br></br>
                                        исходя из собранных данных с общедоступных маркетплейсов.
                                    </span>
                                </Typography>
                                <br></br>
                                <Typography variant="h4" gutterBottom>
                                    Выберите маркетплейсы, которые вас интересуют:
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className="marketplace-button"
                                            style={{
                                                backgroundColor: bgColorOzon,
                                                color: textColorOzon,
                                                borderRadius: '0.5rem',
                                                padding: '1rem',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                maxHeight: '150px',
                                                alignItems: 'center',
                                                minWidth: '400px',
                                            }}
                                           onClick={handleButtonClickOzon}
                                        >
                                            <img src="https://pngimg.com/d/ozon_PNG3.png" alt="Ozon" style={{ width: '60px', height: '60px', marginBottom: '0.5rem' }} />
                                            <Typography variant="h5" gutterBottom style={{ color: textColorOzon, marginBottom: '0rem' }}>
                                                Ozon
                                            </Typography>
                                        </Button>
                                    </Grid>

                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className="marketplace-button"
                                            style={{
                                                backgroundColor: bgColor,
                                                color: textColor,
                                                borderRadius: '0.5rem',
                                                padding: '1rem',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                minWidth: '400px',
                                                maxHeight: '150px'
                                            }}
                                            onClick={handleButtonClick}
                                        >
                                            <img src="https://png.klev.club/uploads/posts/2024-04/png-klev-club-hibx-p-wildberries-png-17.png" alt="Wildberries" style={{ width: '60px', height: '60px', marginBottom: '0.5rem' }} />
                                            <Typography variant="h5" gutterBottom style={{ color: textColor, marginBottom: '0rem' }}>
                                                Wildberries
                                            </Typography>
                                        </Button>
                                    </Grid>

                                </Grid>
                                <br></br>
                                {/* Комбобокс */}
                                <Typography variant="h4" gutterBottom>
                                    Выберите категорию:
                                </Typography>
                                            <FormControl variant="outlined" style={{ minWidth: '97%' }}>

                                                <Select
                                                    labelId="marketplace-select-label"
                                                                        value={selectedMarketplace}
                                                                        onChange={handleMarketplaceChange}
                                                                        style={{
                                                                            color: '#023247',
                                                                            borderColor: '#4875b2',
                                                                            borderRadius: '0.5rem'// Цвет текста выпадающего списка
                                                                        }}
                                                                        inputProps={{
                                                                            style: {
                                                                                borderColor: '#4875b2', // Цвет рамки
                                                                            },
                                                                        }}
                                                                        MenuProps={{
                                                                            PaperProps: {
                                                                                style: {
                                                                                    color: '#023247', // Цвет текста выпадающего меню
                                                                                },
                                                                            },
                                                                        }}
                                                >
                                                    <MenuItem value={1}>Ноутбуки</MenuItem>
                                                    <MenuItem value={2}>Одежда</MenuItem>
                                                    <MenuItem value={3}>Обувь</MenuItem>
                                                    <MenuItem value={4}>Игрушки</MenuItem>
                                                </Select>
                                                <br></br>
                                            </FormControl>
                                            <br></br>
                                <Typography variant="h4" gutterBottom>
                                    Введите период для сбора данных:
                                </Typography>
                                <div className="date-pickers" style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem'}}>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        className="datePickerInput"
                                        wrapperClassName="datePicker"
                                        dateFormat="dd.MM.yyyy"
                                        popperPlacement="bottom"
                                        showMonthDropdown
                                    />
                                    <span className="date-separator" style={{ margin: '0 0.5rem', color: '#2a8e9e', fontSize: '30px' }}> - </span>
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        className="datePickerInput"
                                        wrapperClassName="datePicker"
                                        dateFormat="dd.MM.yyyy"
                                        popperPlacement="bottom"
                                        showMonthDropdown
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
                                height: '90%',
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
                                style={{ borderRadius: '0.5rem', maxWidth: '80%', height: 'auto', marginBottom: '2rem' }}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                className="submit-button"
                                onClick={handleSubmit}
                                style={{
                                    borderRadius: '0.5rem',
                                    padding: '0.75rem 1.5rem',
                                    backgroundColor: '#4875b2',
                                    marginTop: '1.5rem',
                                    minWidth: '80%'
                                }}
                            >
                            <Typography variant="h5" gutterBottom style={{ color: '#fcfcfb', marginBottom: '0rem' }}>
                                Получить рекомендации
                            </Typography>
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );
}

export default HomePage;

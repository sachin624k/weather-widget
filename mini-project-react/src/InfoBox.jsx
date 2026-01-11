import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1677105700661-dbfad22793ca?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL = "https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.jpg?s=612x612&w=0&k=20&c=rXSudGCCelYGe1O4y8Ix3txjVC-UdBlCLa8DIgRr4mg=";
    const COLD_URL = "https://www.livemint.com/lm-img/img/2025/01/03/optimize/FILES-URUGUAY-CLIMATE-WEATHER-1_1735879554857_1735879557006.jpg";
    const RAIN_URL = "https://images.news18.com/ibnlive/uploads/2025/12/1766743496_1766712690_Weather-Update-3-2025-05-6ce53f2d17ad6e4e469cf071487d9326.jpg";

    return (
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? COLD_URL : HOT_URL }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <AcUnitIcon /> : <SunnyIcon /> }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <div>Temperature = {info.temp}&deg;C</div>
                        <div>Humidity = {info.humidity}</div>
                        <div>Min Temp = {info.tempMin}</div>
                        <div>Max Temp = {info.tempMax}</div>
                        <div>The weather can be described as <i>{info.weather}</i> & feels like {info.feelslike}&deg;C</div>
                        
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    );
}
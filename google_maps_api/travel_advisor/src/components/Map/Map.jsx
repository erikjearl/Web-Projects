
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';


const Map = ( { setCoordinates, setBounds, coordinates, places, setChildClicked }) => {
    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width:600px)');
     
    

    const options = {
        mapTypeId: "satellite",
        tilt:0,
    }
    return(
        <div className={classes.mapContainer}>

        <GoogleMapReact
            bootstrapURLKeys={{ key:import.meta.env.VITE_PUBLIC_GOOGLE_MAPS_API_KEY }}
            defaultCenter={{lat:41.5103132,lng:-81.6040477}}
            center = {coordinates}
            defaultZoom={16}
            margin={[50, 50, 50, 50]}
            options={options}
            onChange={(e) => {
                setCoordinates({ lat:e.center.lat, lng:e.center.lng });
                setBounds({ne:e.marginBounds.ne, sw:e.marginBounds.sw })
            }}
            onChildClick={ (child) => {setChildClicked(child)} }
        >
            {places?.map((place, i)=>(
                <div
                    className={classes.markerContainer}
                    lat={Number(place.latitude)}
                    lng={Number(place.longitude)}
                    key={i}
                >
                    {
                        !isDesktop ? (
                            <LocationOutlinedIcon color="primary" fontSize="large"/>
                        ) : (
                            <Paper elevation={3} className={classes.paper}>
                                <Typography className={classes.typography} variant='subtitle2' gutterBottom> 
                                    {place.name}
                                </Typography>
                                <img
                                    className={classes.pointer}
                                    src={place.photo ? place.photo.images.large.url : 'https://www.latercera.com/resizer/2o2G9aKQcfqilK1qK8FDRjTMP_I=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/IDDJYHU2MBDELHNCXGZ4AC42GY.jpg'}
                                    alt={place.name}
                                />
                                <Rating size="small" value={Number(place.rating)} readOnly />
                            </Paper>
                        )
                    }
                </div>
            ))}
        </GoogleMapReact>

        </div>
    );
}

export default Map;
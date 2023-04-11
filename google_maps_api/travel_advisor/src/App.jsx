import { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData, getPlacesLocal } from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';

function App() {
  const [places, setPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const [rating, setRating] = useState('');
  const [type, setType] = useState('all');

   // get the geolocation of user from the browser
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude} }) => { 
      setCoordinates({ lat:latitude, lng: longitude });
    });
  },[]);

  // get places data
  useEffect( () => {
    setIsLoading(true)
   getPlacesLocal(bounds.sw, bounds.ne)
      .then((data) => {
        setPlaces(data)
        setIsLoading(false)
      });
  }, [coordinates, bounds]);

  // filter places by rating
  const [filteredPlaces, setFilteredPlaces] = useState([])
  useEffect( () =>{   
    const filtered = places.filter( (place) => place.rating >= rating &&
                                     (type==='all' ? true : place.type === type) ) 
    setFilteredPlaces(filtered)
  }, [rating, type]);

  return (
    <div className="App">
      <CssBaseline />
      <Header 
        setCoordinates={setCoordinates}
      />
      <Grid container spacing={3} style={{width:'100%'}}>
        <Grid item xs={12} md={4}>
          <List 
            places={rating!==''||type!=='all'?filteredPlaces:places}
            childClicked={childClicked}
            isLoading={isLoading}
            rating={rating}
            setRating={setRating}
            type={type}
            setType={setType}
          />
        </Grid>
        <Grid item xs={8} >
          <Map 
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={rating!==''||type!=='all'?filteredPlaces:places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
      
    </div>
  )
}

export default App

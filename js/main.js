const getLocation = () => {
  //get the user location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;

      console.log(lat, long);
    });
  }
};

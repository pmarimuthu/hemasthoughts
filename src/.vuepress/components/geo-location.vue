<template>
  <div>
    <button @click="getGeoLocation">Get GeoLocation</button>

    <p style="text-align: center">
      {{ geolocation }}
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "GeoLocation",

  beforeMount() {},
  mounted() {},
  data() {
    return {
      geolocation: "",
    };
  },

  methods: {
    getGeoLocation(options) {
      if ("geolocation" in navigator) {
        console.log("geolocation in navigator is available.");
        navigator.geolocation.getCurrentPosition((position) => {
          this.geolocation =
            position.coords.latitude + "," + position.coords.longitude;

          const options = {
            method: "GET",
            url:
              "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
              this.geolocation +
              "&key=AIzaSyBzQtScnlh1kuR_RbtxmOU_Ofuc6OS2xxo",
          };
          axios(options)
            .then((response) => {
              const address = response.data.results[0];
              console.log(address.address_components[5]);
              console.log(address.address_components[6]);
              console.log(address.address_components[7]);
              console.log(address.address_components[8]);
              this.geolocation = 
                  address.address_components[5].long_name + ', ' + 
                  address.address_components[6].long_name + ', ' +
                  address.address_components[7].long_name + ', ' +
                  address.address_components[8].long_name;
            })
            .catch((error) => {})
            .then(() => {});
        });
      }
    },
  },
};
</script>

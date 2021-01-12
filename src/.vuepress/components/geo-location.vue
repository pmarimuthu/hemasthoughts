<template>
  <div>
    <button @click="getGeoLocation" class="action-button">
      Get GeoLocation
    </button>

    <p style="text-align: center">
      {{ geolocation }}
    </p>
  </div>
</template>

<style>
.action-button {
  display: inline-block;
  color: #fff;
  background-color: #3eaf7c;
  border-radius: 1px;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  border-bottom: 1px solid #389d70;
}
</style>

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
                address.address_components[5].long_name +
                ", " +
                address.address_components[6].long_name +
                ", " +
                address.address_components[7].long_name +
                ", " +
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

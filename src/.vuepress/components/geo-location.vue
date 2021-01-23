<template>
  <div>
    <table border="1">
      <tr>
        <td>
          <button @click="getGeoLocation" class="action-button">
            Get GeoLocation
          </button>
          {{ geolocation }}
        </td>
      </tr>
    </table>
  </div>
</template>

<style>
.action-button {
  display: inline-block;
  font-size: 1.2rem;
  color: #fff;
  background-color: #3eaf7c;
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  border-bottom: 1px solid #389d70;
}
.no-border {
  border: none;
}
</style>

<script>
import axios from "axios";

export default {
  name: "GeoLocation",

  beforeMount() {},
  mounted() {
    this.getGeoLocation();
  },
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
              "&key=YOUR-API-KEY",
          };
          axios(options)
            .then((response) => {
              const address = response.data.results[0];
              this.geolocation = address.formatted_address;
              console.log(address);
            })
            .catch((error) => {})
            .then(() => {});
        });
      }
    },
  },
};
</script>

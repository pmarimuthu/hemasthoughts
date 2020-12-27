<template>
  <div>
    <p style="text-align: center">
      {{ this.userInfo.length }}
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ClientInfo",

  beforeMount() {
  },
  mounted() {
    axios
      .get(this.ipGeoURL, { params: this.ipGeoParams })
      .then( (response) => { this.getIpGeo(response); })
      .catch( (error) => {})
      .then( () => {});
  },
  data() {
    return {
      ipGeoURL: "https://ipgeolocation.abstractapi.com/v1/",
      ipGeoParams: {
          api_key: "*********************************",
          ip_address: "***************",
      },
      userInfo: [],
    };
  },

  methods: {
    getIpGeo(response) {
        if(response.status == 200) {
          this.userInfo.push( 
            { ip: response.data.ip_address},
            { sys: response.data.connection.autonomous_system_number },
            { city: response.data.city },
            { region: response.data.region },
            { country: response.data.country },
            { postal: response.data.postal_code },
            { lat: response.data.latitude },
            { long: response.data.longitude }
          );

        }
        else {
        }
        this.postJsonB();
    },

    postJsonB() {
      const options = {
        method: 'POST',
        headers: { 'secret-key': '******************************' },
        data: this.userInfo,
        url: 'https://api.jsonbin.io/b'
      };
      axios(options)
      .then( (response) => {} )
      .catch( (error) => {} )
      .then( () => {} );
    }
  }
};
</script>

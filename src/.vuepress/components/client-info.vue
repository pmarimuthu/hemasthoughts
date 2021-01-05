<template>
  <div>
    <p style="text-align: center">
      {{ city }}
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
      city: "",
    };
  },

  methods: {
    getIpGeo(response) {
        if(response.status == 200) {
          this.city = response.data.city;

          this.userInfo.push( 
            { ip: response.data.ip_address},
            { city: response.data.city },
            { country: response.data.country }
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

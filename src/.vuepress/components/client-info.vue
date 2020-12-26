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
    console.log("beforeMount >>_");
  },
  mounted() {
    console.log("mounted >>_");
    axios
      .get(this.ipGeoURL, { params: this.ipGeoParams })
      .then( (response) => { this.getIpGeo(response); })
      .catch( (error) => { console.log(error); })
      .then( () => {});
  },
  data() {
    return {
      ipGeoURL: "https://ipgeolocation.abstractapi.com/v1/",
      ipGeoParams: {
          api_key: "ebe306cfc7554a9ab36c1be97387b55a",
          ip_address: "103.5.135.186",
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
          //console.log(response.status);
        }
        //console.log(this.userInfo);
        this.postJsonB();
    },

    postJsonB() {
      console.log("\n------------ postJsonBin ------------");
      const options = {
        method: 'POST',
        headers: { 'secret-key': '$2b$10$RD3Jt3tVN.uBGS2W9ohrtu/3I76qvsekmMJFK/rCq2KG7pTr1ynt6' },
        data: this.userInfo,
        url: 'https://api.jsonbin.io/b'
      };
      axios(options)
      .then( (response) => { console.log(response); })
      .catch( (error) => { console.log(error); })
      .then( () => { console.log("done"); });
    }
  }
};
</script>

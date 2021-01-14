---
sidebar: false
author: Hema Thiruchelvam
title: Dynamic Contents using Vue 3 in VuePress
description: Dynamic Contents using Vue 3 in VuePress
canonicalUrl: https://hemasthoughts.com/dynamic/
---
## Dynamic Contents using Vue 3 in VuePress :writing_hand:


### 1. How to get user's location using Google Geolocation API
<br/>

```
    getGeoLocation(options) {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
            this.geolocation = position.coords.latitude + "," + position.coords.longitude;

            const options = {
                method: "GET",
                url:
                "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + this.geolocation + "&key=YOUR-API-KEY",
            };
            axios(options)
                .then((response) => {
                const address = response.data.results[0];
                this.geolocation =
                    "[ " + address.address_components[5].long_name + // City
                    ", " + address.address_components[6].long_name + // State
                    ", " + address.address_components[7].long_name + // Country
                    ", " + address.address_components[8].long_name + // PIN Code
                    " ]";
                })
                .catch((error) => {})
                .then(() => {});
            });
        }
    },
```

<br/>
<geo-location></geo-location>


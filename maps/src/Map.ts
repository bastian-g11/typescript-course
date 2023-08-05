// We are creating this CustomMap class to restrict the
// access to some methods to different developers. We want to hide the existence of the map from other engineers

// Instructions to every other class
// on how they can be an argument to addMarker
export interface Mappable {
  location: {
    lat: number,
    lng: number
  };
  markerContent(): string;
  color: string;
}

export class Map {
  private googleMap: google.maps.Map;

  constructor(mapParentId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(mapParentId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({  
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    const infoWindow = new google.maps.InfoWindow({
      content: mappable.markerContent()
    }); 

    marker.addListener('click', () => { 
      infoWindow.open(this.googleMap, marker);
     })
  }
}

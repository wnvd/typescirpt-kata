
// intruction of every other classes 
// on how they can dispay an argument to "addMarker"

export interface Mappable {
    location: {
        lat: number,
        lng: number,
    };
    markerContent(): string;
    color: string;
};

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            }
        });
    }
    // mappable will only use property that exist on both
    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            },
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent(),
            })

            infoWindow.open(this.googleMap, marker);
        })
    }
};

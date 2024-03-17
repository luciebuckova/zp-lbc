import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";

function GoogleMap() {
  const apiKey: string = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapId: string = import.meta.env.VITE_GOOGLE_MAPS_ID;
  const position = { lat: 50.76778402662154, lng: 15.054663411045173 };

  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infowindowShown, setInfowindowShown] = useState(false);

  const toggleInfoWindow = () =>
    setInfowindowShown((previousState) => !previousState);

  const closeInfoWindow = () => setInfowindowShown(false);

  return (
    <APIProvider apiKey={apiKey}>
      <Map
        defaultCenter={position}
        defaultZoom={17}
        mapId={mapId}
        className="h-64 w-full rounded-xl md:h-96"
      >
        <AdvancedMarker
          ref={markerRef}
          position={position}
          onClick={toggleInfoWindow}
        />
        {infowindowShown && (
          <InfoWindow anchor={marker} onCloseClick={closeInfoWindow}>
            <p className="mb-2 font-medium">
              Zdravotnické potřeby Ludmila Bučková
            </p>
            <p className="mb-4">Široká 27/3, 460 07 Liberec</p>
            <a
              href="https://maps.google.com/maps?ll=50.767784,15.054767&z=20&t=m&hl=cs&gl=US&mapclient=apiv3&cid=6115937332757798580"
              className="text-blue-700"
            >
              Zobrazit v Mapách Google
            </a>
          </InfoWindow>
        )}
      </Map>
    </APIProvider>
  );
}
export default GoogleMap;

interface IOutpost {
  name: string;
  id: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  titan: string;
  markerOffset: number;
}

export default IOutpost;

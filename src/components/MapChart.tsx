import { useEffect, useState } from 'react';
import WorldMap from 'react-svg-worldmap';

type CountryData = {
  country: string;
  value: number;
}

export default function MapChart() {
  const [data, setData] = useState<CountryData[]>([]);

  useEffect(() => {
    const initialData = [
      { country: "cn", value: 1389618778 }, // china
      { country: "in", value: 1311559204 }, // india
      { country: "us", value: 331883986 }, // united states
      { country: "id", value: 264935824 }, // indonesia
      { country: "pk", value: 210797836 }, // pakistan
      { country: "br", value: 210301591 }, // brazil
      { country: "ng", value: 208679114 }, // nigeria
      { country: "bd", value: 161062905 }, // bangladesh
      { country: "ru", value: 141944641 }, // russia
      { country: "mx", value: 127318112 }, // mexico
    ];
    setData(initialData);
  }, []);

  return (
    <div>
      <WorldMap
        color="rgb(11, 245, 182)"
        title="Global Sales by Top Locations"
        size="responsive"
        value-suffix="sales"
        data={data}
      />
    </div>
  );
}

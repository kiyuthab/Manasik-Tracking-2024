import { Component } from "react";
import Layout from "../components/LayoutComponent";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Button, Input } from "@material-tailwind/react";

export default class DashboardPage extends Component {
  render() {
    return (
      <div>
        <Layout>
          <div className="m-3 flex flex-col gap-3">
            <div className="flex gap-3 w-1/2">
              <Input label="Cari" />
              <Button className="bg-black">Cari</Button>
            </div>
            <MapContainer
              center={[51.505, -0.09]}
              zoom={13}
              scrollWheelZoom={true}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </Layout>
      </div>
    );
  }
}

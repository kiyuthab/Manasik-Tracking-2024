import { Component } from "react";
import Layout from "../components/LayoutComponent";
import { Button } from "@material-tailwind/react";
import UpdatePassword from "../components/Modals/UpdatePassword";
import EditProfile from "../components/Modals/EditProfile";

export default class ProfilePage extends Component {

  constructor() {
    super();
    this.state = {
      show: false,
      modalType: null,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleOpen(modalType) {
    this.setState({ show: true, modalType: modalType });
  }

  handleClose() {
    this.setState({ show: false, UpdatePassword: false , EditProfile: false});
  }

  render() {
    return (
      <div>
        <Layout>
          <div className="m-5 flex flex-col md:flex-row md:gap-10">
            <div className="h-32 w-32 bg-black rounded-full "></div>
            <div className="flex flex-col gap-3 md:order-1">
              <div>
                <label className="text-xs">Nama Pengguna:</label>
                <h3 className="font-bold">Asep Tour and Travel</h3>
              </div>
              <div>
                <label className="text-xs">Email Pengguna:</label>
                <h3 className="font-bold">Asep Tour and Travel</h3>
              </div>
              <div>
                <label className="text-xs">Alamat:</label>
                <h3 className="font-bold">Asep Tour and Travel</h3>
              </div>
            </div>
            <div className="flex flex-col gap-3 md:order-3">
              <div>
                <label className="text-xs">Nomor Telepon:</label>
                <h3 className="font-bold">Asep Tour and Travel</h3>
              </div>
              <div>
                <label className="text-xs">Asal Instansi:</label>
                <h3 className="font-bold">Asep Tour and Travel</h3>
              </div>
            </div>
          </div>
          <div className="m-5 flex gap-10">
            <div className="w-32 hidden md:block"></div>
            <div className="flex flex-col md:flex-row md:gap-2">
              <Button 
                className="bg-gr text-black rounded-full" size="sm"
                onClick={() => this.handleOpen('EditProfile')}
              >
                Edit
              </Button>
              <Button 
                className="bg-black rounded-full mt-2 md:mt-0" size="sm"
                onClick={() => this.handleOpen('UpdatePassword')}
              >
                Ubah Password
              </Button>
            </div>
          </div>
          {this.state.modalType === 'UpdatePassword' && (
            <UpdatePassword
              isOpen={this.state.show}
              onClose={() => this.handleClose()}              
            />
          )}
          {this.state.modalType === 'EditProfile' && (
            <EditProfile
              isOpen={this.state.show}
              onClose={() => this.handleClose()}              
            />
          )}
        </Layout>
      </div>
    );
  }
}

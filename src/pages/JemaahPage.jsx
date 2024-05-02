import { Component } from "react";
import Layout from "../components/LayoutComponent";
import { Button, Input } from "@material-tailwind/react";
import { AiFillPlusCircle } from "react-icons/ai";
import TableJemaah from "../components/Tables/TableJemaah";
import TambahDataJamaah from "../components/Modals/TambahDataJamaah";

export default class JemaahPage extends Component {

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
          <div className="m-3">
            <div className="flex gap-3">
              <Input label="Cari" />
              <Button className="bg-black w-[150px] rounded-full">Cari</Button>
              <Button className="bg-black w-[300px] flex rounded-full" onClick={() => this.handleOpen('TambahDataJamaah')}>
                <AiFillPlusCircle />
                Tambah Data Jemaah
              </Button>
            </div>
            <TableJemaah />
          </div>
          {this.state.modalType === 'TambahDataJamaah' && (
            <TambahDataJamaah
              isOpen={this.state.show}
              onClose={() => this.handleClose()}              
            />
          )}
        </Layout>
      </div>
    );
  }
}

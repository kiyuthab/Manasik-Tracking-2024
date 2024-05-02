import { Component } from "react";
import { Oval } from "react-loader-spinner";

export default class LoadingComponent extends Component {
  render() {
    return (
      <div className="flex justify-center items-center relative z-[999999] min-h-screen">
        <Oval
          color="#365486"
          height="100"
          width="100"
          wrapperStyle={{ justifyContent: "center" }}
          secondaryColor="#365486"
        />
      </div>
    );
  }
}
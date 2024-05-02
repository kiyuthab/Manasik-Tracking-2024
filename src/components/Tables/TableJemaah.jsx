import { Button } from "@material-tailwind/react";

const TableJemaah = () => {
  return (
    <div className="my-3 border rounded-md p-3 overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead>
          <tr>
            <th className="p-5">No.</th>
            <th className="p-5">Nama Jemaah</th>
            <th className="p-5">Jenis Kelamin</th>
            <th className="p-5">Riwayat</th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-[#DFDFDF]">
            <td className="p-5">1</td>
            <td className="p-5">Asep Trisna Setiawan</td>
            <td className="p-5">Laki-laki</td>
            <td className="p-5">
              <Button size="sm">Lihat</Button>
            </td>
          </tr>
          <tr className="odd:bg-[#DFDFDF]">
            <td className="p-5">2</td>
            <td className="p-5">Muhammad Rizki Fahreza</td>
            <td className="p-5">Laki-laki</td>
            <td className="p-5">
              <Button size="sm">Lihat</Button>
            </td>
          </tr>
          <tr className="odd:bg-[#DFDFDF]">
            <td className="p-5">3</td>
            <td className="p-5">Agung Yusuf Wibowo</td>
            <td className="p-5">Laki-laki</td>
            <td className="p-5">
              <Button size="sm">Lihat</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableJemaah;

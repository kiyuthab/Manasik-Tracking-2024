import { jwtDecode } from "jwt-decode";

/* eslint-disable react-refresh/only-export-components */
export function AuthHeaders() {
  const token = localStorage.getItem("token");
  if (token !== null) {
    return { Authorization: "Bearer " + token };
  } else {
    return {};
  }
}

export function GetGuid() {
  const token = localStorage.getItem("token");

  if (token !== null) {
    const decoded = jwtDecode(token);
    return decoded.guid;
  } else {
    return null;
  }
}

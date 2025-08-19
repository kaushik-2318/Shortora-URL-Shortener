import axios from "axios";
import React from "react";
import { useEffect } from "react";

export default function Navigate() {
  const url = window.location.pathname;
  const pathSegment = url.split("/")[1];
  console.log(pathSegment);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/getLink/${pathSegment}`)
      .then((response) => {
        const { url } = response.data;
        window.location.href = url;
      })
      .catch((error) => {
        console.error("Error fetching link:", error);
      });
  }, [pathSegment]);

  return null;
}

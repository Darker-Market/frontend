import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Home() {
  const [testData, setUsers] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/test")
      .then((res) => setUsers(res.data))
      .catch((err) => {
        console.error(err);
        setError("Failed to load data");
      });
  }, []);

  return <h1>{testData}</h1>;
}

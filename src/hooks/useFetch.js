import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null); // 에러 상태 추가

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok"); // 에러 발생
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error.message); // 에러 메시지 설정
        setData([]); // 데이터 초기화 (필요시)
      });
  }, [url]);

  if (error) {
    console.error("Fetch error:", error);
  }

  return data;
}

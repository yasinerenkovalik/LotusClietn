import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import { fetchGetByIdConcept } from "../../api";


function Table() {
  const [itemss, setItemss] = useState([]);
  const { id } = useParams(); 

  const fetchDataa = async () => {
    try {
      // URL'den aldığımız conceptId'yi kullanıyoruz
      const concept = await fetchGetByIdConcept(id);
      console.log("API Verisi:", id);
      setItemss(concept);
      console.log(id)
    } catch (error) {
      console.error("Veri getirme hatası:", error);

    }
  };

  useEffect(() => {
    fetchDataa();
  }, [id]); // conceptId bağımlılığını ekliyoruz

  return (
    <div>
      <table className="table container">
        <thead></thead>
        <tbody>
          <tr>
            <th scope="row">Adı</th>
            <td>{itemss.data ? itemss.data.name : ""}</td>
          </tr>
          <tr>
            <th scope="row">İçindekiler</th>
            <td>Jacob</td>
          </tr>
          {/* Diğer tablo satırları buraya eklenir */}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

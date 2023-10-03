import axios from "axios";

const token = localStorage.getItem("token");
const headers = { Authorization: `Bearer ${token}` };
const request="https://localhost:7203/api/";

export const fetchGetAllConcept = async () => {
  const { data } = await axios.get(
   "https://localhost:7203/api/Concept/getall",{timeout: 10000}
    
  );
  return data;
};
export const fetchGetByIdConcept = async (id) => {
  try {
    const { data } = await axios.get(
      `https://localhost:7203/api/Concept/get?id=${id}`, // API'ye ID'yi ekledik
      { timeout: 10000 }
    );
    return data;
  } catch (error) {
    // Hata yönetimi burada yapılabilir
    console.error("Veri getirme hatası:", error);
    throw error; // Hata durumunda isteğin dışarıya fırlatılması
  }
};
export const fetchConseptAdd = async (input) => {
  try {
    const { data } = await axios.post(
      `https://localhost:7203/api/Concept/add`,input // API'ye ID'yi ekledik
   
    );
    return data;
  } catch (error) {
    // Hata yönetimi burada yapılabilir
    console.error("Veri getirme hatası:", error);
    throw error; // Hata durumunda isteğin dışarıya fırlatılması
  }
};
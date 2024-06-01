import axios from "axios";
import { BASE_API_URL } from "../constants/api";

const downloadExcel = async (token: string) => {
    try {
        const response = await axios.get(`${BASE_API_URL}/excel/rates`, {
            responseType: "blob",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "test.xlsx");
        document.body.appendChild(link);
        link.click();
        link.remove();
    } catch (error) {
        console.error("Error downloading the Excel file", error);
    }
};

export default downloadExcel;

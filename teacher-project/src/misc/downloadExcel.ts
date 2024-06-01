import axios from "axios";

const downloadExcel = async () => {
    try {
        const response = await axios.get(
            "https://your-api-url/api/excel/generate",
            {
                responseType: "blob",
            }
        );

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

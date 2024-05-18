import React, { useState } from "react";

export function TaskCreator({ onSubmit }) {
    const [text, setText] = useState("");
    const [images, setImages] = useState([]);
    const [files, setFiles] = useState([]);

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleImageChange = (event) => {
        const files = event.target.files;
        convertFilesToBase64(files).then((base64Images) => {
            setImages([...images, ...base64Images]);
        });
    };

    const handleFileChange = (event) => {
        const files = event.target.files;
        convertFilesToBase64(files).then((base64Files) => {
            setFiles([...base64Files]);
        });
    };

    const handleSubmit = () => {
        const taskData = {
            text,
            images,
            files,
        };
        onSubmit(taskData);
    };

    const convertFilesToBase64 = (files) => {
        const promises = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            promises.push(
                new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = (error) => reject(error);
                    reader.readAsDataURL(file);
                })
            );
        }
        return Promise.all(promises);
    };

    return (
        <div>
            <textarea
                value={text}
                onChange={handleTextChange}
                placeholder="Введіть текст завдання..."
                rows={5}
                cols={50}
            />
            <input
                type="file"
                onChange={handleImageChange}
                multiple
                accept="image/*"
            />
            <input
                type="file"
                onChange={handleFileChange}
                multiple
                accept=".doc,.docx,.xls,.xlsx"
            />
            <button onClick={handleSubmit}>Створити завдання</button>
        </div>
    );
}

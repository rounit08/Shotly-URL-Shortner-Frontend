import React from 'react';
import "./FileInfo.css";

function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export default function FileInfo({ data, progress }) {
    return (
        <div className="fileinfo">
            <p>{ data.name }</p>
            <p>{ formatBytes(data.size) }</p>
        </div>
    )
}

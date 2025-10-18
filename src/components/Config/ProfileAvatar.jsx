import React from "react";

const colors = ["#007bff", "#6f42c1", "#20c997", "#fd7e14", "#dc3545"];

const ProfileAvatar = ({ name = "Usuario", size = 60 }) => {
    const initial = name.charAt(0).toUpperCase();
    const color = colors[initial.charCodeAt(0) % colors.length];

    const style = {
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: color,
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size / 2.5,
        fontWeight: "bold",
        cursor: "pointer",
        userSelect: "none",
    };

    return <div style={style}>{initial}</div>;
};

export default ProfileAvatar;
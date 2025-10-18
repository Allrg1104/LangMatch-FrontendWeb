import React from "react";

const HeaderBar = ({ title, subtitle }) => {
    return (
        <div className="mb-4 border-bottom pb-2">
            <h2 className="fw-bold mb-0">{title}</h2>
            {subtitle && <p className="text-muted">{subtitle}</p>}
        </div>
    );
};

export default HeaderBar;
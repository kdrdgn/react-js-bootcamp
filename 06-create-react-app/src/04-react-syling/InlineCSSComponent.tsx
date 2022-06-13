import React, { useState } from "react"

export const InlineCSSComponent = () => {
    const [page, setPage] = useState(1);

    const lastPage = 10;

    const buttonStyle: React.CSSProperties = {
        padding: "4px",
        lineHeight: "16px",
        background: "#5e79bd",
        border: "1px solid #333",
        margin: "0 4px"
    }

    const pageInfoStyle: React.CSSProperties = {
        color: "#333",
        padding: "4px"
    }

    return (
        <div style={{ "background": "#FFDC00", "padding": "8px", "color": "#333", "fontWeight": "bold", "textAlign": "center" }}>
            <p style={pageInfoStyle}>Inline CSS Example:</p>
            <p style={{...pageInfoStyle, background: page % 2 ? 'firebrick' : 'forestgreen', color: '#FFF'}}>{page % 2 ? '😳' : '😌'} Your are at page: {page}</p>
            <button disabled={page <= 1} style={{...buttonStyle, background: page <= 1 ? 'darkgrey' : '#5e79bd'}} onClick={() => setPage(1)}>First</button>
            <button disabled={page <= 1} style={{...buttonStyle, background: page <= 1 ? 'darkgrey' : '#5e79bd'}} onClick={() => setPage(page - 1)}>👈</button>
            <button disabled={page >= lastPage} style={buttonStyle} onClick={() => setPage(page + 1)}>👉</button>
            <button disabled={page >= lastPage} style={buttonStyle} onClick={() => setPage(10)}>Last</button>
        </div>
    )
}
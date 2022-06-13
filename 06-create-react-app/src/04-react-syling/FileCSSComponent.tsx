import React, {useState} from "react";
import "./FileCSSComponent.css";

export const FileCSSComponent = () => {
    const [page, setPage] = useState(1);

    const lastPage = 10;
    return (
        <div className="container">
            <p>CSS File Example:</p>
            <p className={`page-info ${page % 2 ? 'odd' : 'even'}`}>{page % 2 ? '😳' : '😌'} Your are at page: {page}</p>
            <button disabled={page <= 1} className="button" onClick={() => setPage(1)}>First</button>
            <button disabled={page <= 1} className="button" onClick={() => setPage(page - 1)}>👈</button>
            <button disabled={page >= lastPage} className="button" onClick={() => setPage(page + 1)}>👉</button>
            <button disabled={page >= lastPage} className="button" onClick={() => setPage(lastPage)}>Last</button>
        </div>
    )
}
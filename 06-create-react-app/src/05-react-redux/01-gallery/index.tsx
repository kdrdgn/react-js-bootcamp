import React, { useState } from "react";
import { Container } from "../../04-react-syling/StyledCSSComponent";
import { Images } from "./Images";
import { Pagination } from "./Pagination";

export const Gallery: React.FC = () => {

    const [page, setPage] = useState(1);

    return (
        <Container>
            <Images page={page}></Images>
            <Pagination page={page} onPageChange={(page) => setPage(page)} />
        </Container>
    )
}
import { number } from "prop-types";
import React from "react";
import { Button } from "../../04-react-syling/StyledCSSComponent";

interface IPaginationProps {
    page: number,
    onPageChange: (page: number) => void
}

export const Pagination: React.FC<IPaginationProps> = ({page, onPageChange}: IPaginationProps) => {
    return (<>
        <Button disabled={page <= 1} onClick={() => onPageChange(page - 1)}>👈</Button>
        {page}
        <Button disabled={page >= 10} onClick={() => onPageChange(page + 1)}>👉</Button>
    </>)
}
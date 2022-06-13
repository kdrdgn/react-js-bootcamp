import React, {useState} from "react"
import styled from 'styled-components';

export const StyledCSSComponent = () => {
    const [page, setPage] = useState(1);
    const lastPage = 10;
    return (
        <Container>
            <p>Styled Component Example:</p>
            <PageInfo isOdd={page % 2 === 0}>{page % 2 ? '😳' : '😌'} Your are at page: {page}</PageInfo>
            <Button disabled={page <= 1} onClick={() => setPage(1)}>First</Button>
            <Button disabled={page <= 1} onClick={() => setPage(page - 1)}>👈</Button>
            <Button disabled={page >= lastPage} onClick={() => setPage(page + 1)}>👉</Button>
            <Button disabled={page >= lastPage} onClick={() => setPage(lastPage)}>Last</Button>
        </Container>
    )
}

export const Container = styled.div`
    background: #FFDC00;
    padding: 8px;
    color: #333;
    font-weight: bold;
    text-align: center;
`

interface IButtonProps {
    disabled: boolean
}

export const Button = styled.button<IButtonProps>`
    padding: 4px;
    line-height: 16px;
    background-color: ${({disabled}) => disabled ? 'grey' :  '#5e79bd'};
    border: 1px solid #333;
    margin: 0 4px;
`

interface IPageInfoProps {
    isOdd: boolean
}

const PageInfo = styled.p<IPageInfoProps>`
    color: #FFF;
    padding: 4px;
    background-color: ${({isOdd}) => isOdd ? 'firebrick' : 'forestgreen'}
`
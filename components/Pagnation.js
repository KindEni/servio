import styled from "styled-components";
import Link from "next/link";

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
`
const PaginationLink = styled.a`
    padding: 1%;
    margin: 1%;
    background: orange;
    cursor: pointer;
    color: white;
    text-decorstion: none;
    border-radius: 5px;
`

function Pagination({ currentPage, hasMore }) {
    return(
        <PaginationContainer>
            <Link href={`?page=${parseInt(currentPage) - 1}`}>
                <PaginationLink>Previous</PaginationLink>
            </Link>
            <Link href={`?page=${parseInt(currentPage) + 1}`}>
                <PaginationLink>Next</PaginationLink>
            </Link>
        </PaginationContainer>
    )
}

export default Pagination;
import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  padding: 0.5rem;
  padding-bottom: 10rem;
  border-radius: 8px;

  @media (max-width: 600px) {
    gap: 1rem;
  }
`;

export const PageButton = styled.button<{ active?: boolean }>`
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  border-radius: 5px;
  background: transparent;
  color: ${({ active }) => (active ? "#C9D636" : "#666")};
  cursor: pointer;
  transition: color 0.3s;
  border: none;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  font-size: 1rem;

  &:hover {
    color: #fff;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const NavButton = styled.button`
  padding: 0.5rem 1rem;
  background: transparent;
  color: #666;
  border: none;
  cursor: pointer;
  transition: color 0.3s;
  font-size: 1rem;

  &:hover {
    color: #fff;
  }

  &:disabled {
    color: #333;
    cursor: not-allowed;
  }
`;

export const CurrentPage = styled.span`
  color: #c9d636;
  font-size: 1rem;
  font-weight: bold;

  @media (min-width: 601px) {
    display: none;
  }
`;

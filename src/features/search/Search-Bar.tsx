import { styled } from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const SearchInput = styled.div`
  background-color: ${({ theme }) => theme.background};
  border-radius: 4px;
  box-shadow: 0 0 4px 0 #00000050;
  display: flex;
  align-items: center;
  padding: 16px 28px;
  gap: 24px;
  width: 480px;
`;

const Input = styled.input`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color}
  letter-spacing: 0.02rem;
  border: none;
  width: 100%;
  padding: 0;

  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled(AiOutlineSearch)`
  font-size: 24px;
  color: ${({ theme }) => theme.text};
`;

export function SearchBar() {
  return (
    <SearchInput>
      <SearchIcon />
      <Input placeholder="Search for a country..."></Input>
    </SearchInput>
  );
}

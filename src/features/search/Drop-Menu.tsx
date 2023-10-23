import { styled } from "styled-components";

const DownMenu = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 4px;
`;

export function DropMenu() {
  return (
    <DownMenu>
      <span>Africa</span>
      <span>America</span>
      <span>Asia</span>
      <span>Europe</span>
      <span>Oceania</span>
    </DownMenu>
  );
}

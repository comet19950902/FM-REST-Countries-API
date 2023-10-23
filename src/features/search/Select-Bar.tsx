import { useState } from "react";
import { styled } from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import { retionList } from "utilities";

interface DownMenuProps {
  open?: boolean;
}

const SelectRegion = styled.div`
  position: relative;

  title {
    padding: 18px 48px 18px 24px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    display: block;

    span {
      width: 128px;
      display: block;
      letter-spacing: -0.05rem;
      user-select: none;
    }
  }
`;

const BiChevronDownIcon = styled(BiChevronDown)`
  position: absolute;
  font-size: 24px;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
  cursor: pointer;
`;

const DownMenu = styled.div<DownMenuProps>`
  position: absolute;
  top: 62px;
  right: 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 12px 0;
  overflow: hidden;
  transition-duration: 500ms;
  transition-property: max-height, padding;
  max-height: ${(props) => (props.open ? "100vh" : "0")};
  padding: ${(props) => (props.open ? "12px 0" : "0")};

  span {
    padding: 3px 124px 3px 24px;
    font-size: 16px;
    letter-spacing: -0.05rem;
    cursor: pointer;

    &:hover {
      background-color: blue;
    }
  }
`;

export function SelectBar() {
  const [region, setRegion] = useState<string>("Filter by Region");
  const [openDown, setOpenDown] = useState<boolean>(false);

  const setRegionHandler = (id: string) => {
    setRegion(id);
    setOpenDown(false);
  };

  return (
    <>
      <SelectRegion>
        <title>
          <span>{region}</span>
        </title>
        <BiChevronDownIcon onClick={() => setOpenDown(!openDown)} />
      </SelectRegion>
      <DownMenu open={openDown}>
        {retionList.map((list) => (
          <span key={list.id} onClick={() => setRegionHandler(list.id)}>
            {list.title}
          </span>
        ))}
      </DownMenu>
    </>
  );
}

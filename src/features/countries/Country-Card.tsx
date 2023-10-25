import { styled } from "styled-components";
import { countryType } from "utilities";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 #00000040;
  overflow: hidden;
`;

const FlagCard = styled.img`
  width: 200px;
`;

export function CountryCard({ data }: { data: countryType }) {
  console.log("data----->", data);
  return (
    <Card>
      <FlagCard src={data.flags.svg} />
    </Card>
  );
}

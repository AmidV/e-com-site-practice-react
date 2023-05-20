import { useNavigate } from "react-router-dom";

import {
  DirectoryContainer,
  BackgroundImage,
  DirectoryBodyContainer,
  Title,
  ShopNowLink,
} from "./directory-item.styles";

const DirectoryItem = ({ directory }) => {
  const { title, imageUrl, route } = directory;
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(route);
  };

  return (
    <DirectoryContainer onClick={navigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryBodyContainer>
        <Title>{title}</Title>
        <ShopNowLink>Shop Now</ShopNowLink>
      </DirectoryBodyContainer>
    </DirectoryContainer>
  );
};

export default DirectoryItem;

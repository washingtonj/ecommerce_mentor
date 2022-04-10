import { Box, HStack, Container, Avatar, Button, Text } from "@chakra-ui/react";
import { Logo, Menu, Cart as CartIcon } from "assets/icons";
import { useCart } from "hooks";
import { PublicImageLoader } from "utils";
import * as Styles from "./TheHeader.styles";
import TheHeaderCart from "./TheHeaderCart";

const TheHeader = () => {
  const Cart = useCart();

  return (
    <Box data-testid="the-header" {...Styles.Bar}>
      <Container {...Styles.Container}>
        <HStack {...Styles.LeftStack}>
          <Menu width="20" height="15" />
          <Logo width="100%" height="24" />
        </HStack>
        <HStack {...Styles.RightStack}>
          <Button {...Styles.Button} onClick={Cart.toggleCart}>
            <CartIcon {...Styles.Icon} />
            {Cart.total >= 1 && (
              <Text {...Styles.ButtonCount}>{Cart.total}</Text>
            )}
          </Button>
          {Cart.isOpen && (
            <TheHeaderCart
              data={Cart.items}
              onClose={Cart.toggleCart}
              onRemove={Cart.removeItem}
            />
          )}
          <Avatar
            {...Styles.Avatar}
            src={PublicImageLoader("/images/image-avatar.png")}
          />
        </HStack>
      </Container>
    </Box>
  );
};

export default TheHeader;

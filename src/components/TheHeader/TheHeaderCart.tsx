import { useRef } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  useOutsideClick,
  Image,
} from "@chakra-ui/react";
import { Cart as CartIcon } from "assets/icons";
import * as Styles from "./TheHeaderCart.styles";
import { PublicImageLoader, ToCurrency } from "utils";
import { useCart } from "hooks";

const TheHeaderCart = () => {
  const ref = useRef(null);

  const Cart = useCart();

  useOutsideClick({
    ref: ref,
    handler: () => Cart.toggleCart(),
    enabled: false,
  });

  return (
    <>
      <Button {...Styles.CartButton} onClick={() => Cart.toggleCart()}>
        <CartIcon {...Styles.Icon} />
      </Button>

      {Cart.isOpen && (
        <Box {...Styles.Container} ref={ref}>
          <Flex {...Styles.Header}>
            <Text {...Styles.HeaderText}>Cart</Text>
          </Flex>
          <Flex {...Styles.Body}>
            {Cart.hasItem ? (
              Cart.items.map((item) => (
                <Flex key={item.id} {...Styles.ItemContainer}>
                  <Image
                    {...Styles.ItemImagem}
                    src={PublicImageLoader(item.imgUrl)}
                  />
                  <Flex {...Styles.ItemTextContainer}>
                    <Text {...Styles.ItemTextTitle}>{item.name}</Text>
                    <Flex {...Styles.ItemPriceContainer}>
                      <Text {...Styles.ItemTextQty}>
                        {ToCurrency(item.price, "USD")} x {item.quantity}
                      </Text>
                      <Text {...Styles.ItemTextTotal}>
                        {ToCurrency(item.price * item.quantity, "USD")}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              ))
            ) : (
              <Text {...Styles.BodyEmptyText}>Your cart is empty.</Text>
            )}
          </Flex>
        </Box>
      )}
    </>
  );
};

export default TheHeaderCart;

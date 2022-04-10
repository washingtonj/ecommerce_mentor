import { useRef } from "react";
import {
  Box,
  Flex,
  Text,
  useOutsideClick,
  Image,
  Button,
} from "@chakra-ui/react";
import { Delete as DeleteIcon } from "assets/icons";
import * as Styles from "./TheHeaderCart.styles";
import { PublicImageLoader, ToCurrency } from "utils";
import { ICartItem } from "contexts";
import { ButtonStyle } from "styles/components";

interface TheHeaderCartProps {
  onClose: () => void;
  onRemove: (id: string) => void;
  data: ICartItem[];
}

const TheHeaderCart = (props: TheHeaderCartProps) => {
  const ref = useRef(null);

  const hasItem = props.data.length > 0;

  useOutsideClick({
    ref: ref,
    handler: props.onClose,
    enabled: true,
  });

  return (
    <Box {...Styles.Container} ref={ref}>
      <Flex {...Styles.Header}>
        <Text {...Styles.HeaderText}>Cart</Text>
      </Flex>
      <Flex {...Styles.Body}>
        {hasItem && (
          <>
            {props.data.map((item) => (
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
                <DeleteIcon
                  {...Styles.ItemTrashIcon}
                  onClick={() => props.onRemove(String(item.id))}
                />
              </Flex>
            ))}
            <Button {...ButtonStyle}>Checkout</Button>
          </>
        )}
        {!hasItem && <Text {...Styles.BodyEmptyText}>Your cart is empty.</Text>}
      </Flex>
    </Box>
  );
};

export default TheHeaderCart;

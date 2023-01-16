import {
  Button as CButton,
  ButtonProps as CButtonProps,
  Text,
} from "@chakra-ui/react";
import { PACIFICO } from "styles/fonts";

const PRIMARY_VARIANT: CButtonProps = {
  variant: "solid",
  colorScheme: "blackAlpha",
  textColor: "white",
  bgColor: "black",
  _hover: { bgColor: "none" },
};

const SECONDARY_VARIANT: CButtonProps = {
  variant: "outline",
  colorScheme: "blackAlpha",
  color: "black",
};

type ButtonProps = {
  variant?: "primary" | "secondary";
  children: CButtonProps['children'];
};

export function Button(props: ButtonProps) {
  const variant = props.variant || "primary";

  return (
    <CButton
      {...(variant === "primary"
        ? { ...PRIMARY_VARIANT }
        : { ...SECONDARY_VARIANT })}
      rounded="2xl"
    >
      {props.children}
    </CButton>
  );
}

import { AvatarProps, BoxProps, ContainerProps, StackProps } from "@chakra-ui/react";

export const Bar: BoxProps = {
  height: 14
}

export const Container: ContainerProps = {
  height: "full", 
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"

}

export const LeftStack: StackProps = {
  width: "max",
  spacing: 5
}

export const RightStack: StackProps = {
  width: "max",
  spacing: 6
} 

export const Avatar: AvatarProps = {
  width: 6,
  height: 6,
  marginLeft: 0
}
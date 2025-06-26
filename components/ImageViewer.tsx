import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet } from "react-native";

type Props = {
  imgSource: ImageSourcePropType;
  selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
  const image = selectedImage ? { uri: selectedImage } : imgSource;
  return <Image source={image} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    borderRadius: 18,
    aspectRatio: 320 / 440,
    resizeMode: "contain",
  },
});

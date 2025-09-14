// Coffee product card component
import { Image, Text, View } from 'react-native';

export default function ProductCard({ name, price, image }: { name: string; price: number; image: string }) {
    return (
        <View>
            <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
            <Text>{name}</Text>
            <Text>${price}</Text>
        </View>
    );
}

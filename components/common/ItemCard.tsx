// Card for displaying items
import { Image, StyleSheet, Text, View } from 'react-native';

export default function ItemCard({ name, image, price }: { name: string; image: string; price: number }) {
    return (
        <View style={styles.card}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>${price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        marginBottom: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 8,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    price: {
        fontSize: 14,
        color: '#6F4E37',
    },
});

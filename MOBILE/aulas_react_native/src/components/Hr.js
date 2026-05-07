import { LinearGradient } from 'expo-linear-gradient';

const Hr = () => {
    return (
        <LinearGradient colors={['transparent', 'black', 'transparent']}
            style={{ height: 2, margin: 2 }} />
    )
};

export default Hr;
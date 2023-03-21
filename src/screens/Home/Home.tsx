import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import { StackParamList } from '../../navigation/NavigationContainer';

type Props = {
    navigation: NativeStackNavigationProp<StackParamList, 'Exercises'>
}

export function HomeScreen({ navigation }: Props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Text>Hello Screen</Text>
        </View>
    );
}
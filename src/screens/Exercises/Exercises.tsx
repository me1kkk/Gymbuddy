import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, View, Button } from 'react-native';
import { ExercisesStackParamList } from '../../navigation/TabNavigator';

type Props = {
    navigation: NativeStackNavigationProp<ExercisesStackParamList, 'Exercises'>;
}

export function ExercisesScreen({ navigation }: Props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Exercises Screen</Text>
            <Button title='Go to Create' onPress={() => navigation.navigate('Create')} />
        </View>
    );
}
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import { OverviewScreen } from '../screens/OverviewScreen/OverviewScreen';
import { ExercisesScreen } from '../screens/Exercises/Exercises';
import { HomeScreen } from '../screens/Home/Home';
import { CreateScreen } from '../screens/Create/Create';

export type OverviewStackParamList = {
    Overview: undefined;
}

const OverviewStack = createNativeStackNavigator<OverviewStackParamList>();

function OverviewStackNavigator() {
    return (
        <OverviewStack.Navigator>
            <OverviewStack.Screen name="Overview" component={OverviewScreen} />
        </OverviewStack.Navigator>
    )
}

export type ExercisesStackParamList = {
    Exercises: undefined;
    Create: undefined
}

const ExercisesStack = createNativeStackNavigator<ExercisesStackParamList>();

function ExercisesStackNavigator() {
    return (
        <ExercisesStack.Navigator>
            <ExercisesStack.Screen name="Exercises" component={ExercisesScreen} />
            <ExercisesStack.Screen name="Create" component={CreateScreen} />
        </ExercisesStack.Navigator>
    )
}

type TabParamList = {
    HomeStack: undefined;
    ExercisesStack: undefined;
}

const Tab = createBottomTabNavigator<TabParamList>();

export function TabNavigator() {
    return (
        <Tab.Navigator >
            <Tab.Screen name="HomeStack" options={{ headerShown: false }} component={OverviewStackNavigator} />
            <Tab.Screen name="ExercisesStack" options={{ headerShown: false }} component={ExercisesStackNavigator} />
        </Tab.Navigator>
    );
}


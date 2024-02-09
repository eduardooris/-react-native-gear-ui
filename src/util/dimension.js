import {  Dimensions,Platform } from 'react-native'

const correctDimensionWidth = () => {
    const width = Dimensions.get('window').width

    if(Platform.OS == 'ios'){
        if(parseInt(Platform.Version) >= 15){
            return width > 0 ? width: Dimensions.get('screen').width
        }else{
            return width 
        }
    }
    return width 
} 


const correctDimensionHeight = () => {
    const height = Dimensions.get('window').height

        if(Platform.OS == 'ios'){
            if(parseInt(Platform.Version) >= 15){
                return height > 0 ? height: Dimensions.get('screen').height
            }else{
                return height 
            }
        }
        return height 
    } 



export { correctDimensionWidth,correctDimensionHeight }
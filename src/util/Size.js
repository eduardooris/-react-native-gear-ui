import {  Dimensions } from 'react-native'
import {correctDimensionWidth} from  './dimension'
export function correctSize(size){
    const result =  (size * 100) / 414 // 414 valor de referencia extraido do adobe xd 
    //return (result / 100) * Dimensions.get('window').width 
    return (result / 100) * correctDimensionWidth() 
    

} 
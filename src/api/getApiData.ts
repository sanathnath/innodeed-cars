import { car } from '../interfaces';
import cars from './cars.json'

export const getData = () => {
    return new Promise((resolve,reject)=>{
        let data:car[] = cars;
        resolve(data);
    })
}
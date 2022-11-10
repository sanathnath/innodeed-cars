export interface car{
    id: string,
    modelName: string, 
    bodyType: string,
    modelType: string,
    imageUrl: string
}
export interface carInfoProp{
    info:car
}
export interface handlePage{
    handlePage:(value:number)=>void
}
export interface headerProp{
    handleFilterQuery:(item:string)=>void
}
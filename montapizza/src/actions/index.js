export function initData(data){
    return {
        type:'INIT_PIZZA',
        data
    }
}
export function AlterPg(pg){
    return {
        type:'ALTER_PAGE',
        data:pg
    }
}

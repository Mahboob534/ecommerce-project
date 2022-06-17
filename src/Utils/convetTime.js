export const convertTimeStampToDate=(timestamp)=>{
    const date=new Date(timestamp).toLocaleDateString("fa-IR")
    return date
}
export const getBaseUrl = ():string => {
    
    return process.env.NEXT_PUBLIC_API_BASE_URL || "https://traverse-v2-tamsam12202.vercel.app/api/v1"
}
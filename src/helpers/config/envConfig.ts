export const getBaseUrl = ():string => {
    
    return process.env.NEXT_PUBLIC_API_BASE_URL || "https://traverse-v2.vercel.app/api/v1"
}

//  https://traverse-v2.vercel.app/api/v1

// http://localhost:3030/api/v1
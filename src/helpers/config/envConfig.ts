export const getBaseUrl = ():string => {
    
    return process.env.NEXT_PUBLIC_API_BASE_URL || " https://traverse-v2.vercel.app"
}

//  https://traverse-v2.vercel.app

// http://localhost:3030/api/v1
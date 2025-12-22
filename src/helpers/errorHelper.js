export function handleError(error) {
        const errorCodes = {
                401: error.response.data.message,
                400: error.response.data.message,
                500: error.response.data.message,
                442: error.response.data.errors,
            };
            
            return errorCodes[error.response?.status] || 'Something went wrong. Please try again later.';
            
        // if(error.response && error.response.status === 422) {
        //     return error.response.data.errors
        // } else if(error.response && error.response.status === 401) {
        //     return error.response.data.message
        // }else if(error.response && error.response.status === 400) {
        //     return error.response.data.message
        // } else if(error.response && error.response.status === 500) {
        //     return error.response.data.message
        // } else {
        //     return 'Something went wrong. Please try again later.'
        // }
 }
export function handleError(error) {
    const errorCodes = {
        401: error.response.data.message,
        400: error.response.data.message,
        500: error.response.data.message,
        442: error.response.data.errors,
    };

    return errorCodes[error.response?.status] || 'Something went wrong. Please try again later.';
}
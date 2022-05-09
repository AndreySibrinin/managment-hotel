export const getAvatar = (object, search) => {
    for (const objectKey in object) {
        if(object[objectKey].email === search){
            return object[objectKey].image;
        }
    }
    return null;
}
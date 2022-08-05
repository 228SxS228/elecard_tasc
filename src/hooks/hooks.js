export const useToUpper = (str) => {
    return str.toLowerCase().split('/').map(function (img) {
        return img[0].toUpperCase() + img.slice(1);
    }).join(' ');
}


export const useParserImage = (img) => {
    let arr = img.split('/');
    let image = arr[1].match(/[a-z]+/g);
    image.pop();
    return image.map(image[0].toUpperCase() + image.slice(1)).join(' ');
}


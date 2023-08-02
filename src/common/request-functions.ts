export const getResponse = async(url:string) => {
    const response = await fetch(url);
    if(!response.ok){
        throw new Error(`Error from address ${url}
        error status ${response}`);
    }
    return await response.json();
}
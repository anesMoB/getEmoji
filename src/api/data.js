const randomEmojisUrl = "https://emojihub.yurace.pro/api/random"
const emojisGroupsUrl = "https://emojihub.yurace.pro/api/groups"
const emojisWithinGroupUrl = "https://emojihub.yurace.pro/api/search?q="

// Random emoji
export const getRandomEmoji = async () => {
    try {
        const response = await fetch(randomEmojisUrl)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data =await response.json()
       // console.log(data)
        return data;
    } catch (e) {
        // throw new Error("error while getting random emojis");
        console.error("error while getting random emojis: ",error.message);
    }
    
}
// Random emojis
export const getEmojisGroups = async () => {
    try {
        const response = await fetch(emojisGroupsUrl)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data =await response.json()
       // console.log(data)
        return data;
    } catch (e) {
        // throw new Error("error while getting random emojis");
        console.error("error while getting emojis groups: ",error.message);
    }
    
}

// get Emojis within goupe name
export const getEmojisWithinGroupe = async (groupeName) => {
    try {
        const response = await fetch(`${emojisWithinGroupUrl}${groupeName}`)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data =await response.json()
       // console.log(data)
        return data;
    } catch (e) {
        // throw new Error("error while getting random emojis");
        console.error("error while getting emojis groups: ",error.message);
    }
    
}
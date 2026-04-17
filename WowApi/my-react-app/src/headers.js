const wowApiHeader = new Headers();
wowApiHeader.append('Authorization' ,  'Bearer US5AMd2g9bPWoi3uF1R3BxhGiABID1PPRk');
export const wowApiInit = {headers: wowApiHeader}; // <--- default header to do with api fetch for all wow apis
export const mountIndexUrl = 'https://us.api.blizzard.com/data/wow/mount/index?namespace=static-us&locale=en_US';
export const AchievementIndexUrl = 'https://us.api.blizzard.com/data/wow/achievement/index?namespace=static-us&locale=en_US';
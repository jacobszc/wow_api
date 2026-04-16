const wowApiHeader = new Headers();
wowApiHeader.append('Authorization' ,  'Bearer US5AMd2g9bPWoi3uF1R3BxhGiABID1PPRk');
const wowApiInit = {headers: wowApiHeader};
export const mountIndexRequest = new Request('https://us.api.blizzard.com/data/wow/mount/index?namespace=static-us&locale=en_US', wowApiInit )


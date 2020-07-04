export const TILE_SIZE = 40;
export const GAME_SIZE = 40*20; //960px
export const WIDTH = 18;
export const HEIGHT = 16;


export const random = (limit) => {
    var min = Math.ceil(1);
    var max = Math.floor(limit);
    var rand = Math.floor(Math.random() * (max - min)) + min;
    
    return rand
} 
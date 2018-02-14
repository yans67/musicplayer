const utils = {
    //生成从minNum到maxNum的随机数
    randomNum: (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};
export default utils;
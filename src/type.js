class Enum{
    makeEnum(arr) {
        let obj = {};
        for (let val of arr) {
            obj[val] = Symbol(val);
        }
        return Object.freeze(obj);
    }
}
export default Enum;
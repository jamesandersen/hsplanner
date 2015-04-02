export default {
    ceiling: function (num, increment) {
        return Math.ceil(num / increment) * increment;
    },
    floor: function (num, increment) {
        return Math.floor(num / increment) * increment;
    }
};

"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var values = [
            'Mr. Nice',
            'Narco',
            'Bombasto',
            'Celeritas',
            'Magneta',
            'RubberMan',
            'Dynama',
            'Dr IQ',
            'Magma',
            'Tornado',
        ];
        return { values: values };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.js.map
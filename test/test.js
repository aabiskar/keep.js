//
// test suite for keep.js
//

var should = require('should');

// load in keep.js
require('./../src/keep')

it('should filter out basic fields', function () {
    var obj = {
        stringRemove: '123',
        stringKeep: 'abc',
        booleanKeep: false
    };

    var res = obj.keep({
        stringKeep: true,
        booleanKeep: true
    });

    res.should.eql({
        stringKeep: 'abc',
        booleanKeep: false
    });
});

it('should filter out nested field', function () {
    var obj = {
        name: {
            first: 'andrew',
            last: 'last'
        }
    };

    var res = obj.keep({
    });

    res.should.eql({});
});

it('should keep nested results if parent is true', function () {
    var obj = {
        name: {
            first: 'andrew',
            last: 'last'
        }
    };

    var res = obj.keep({
        name: true
    });

    res.should.eql({
        name: {
            first: 'andrew',
            last: 'last'
        }
    });
});

it('should filter out specific nested properties', function () {
    var obj = {
        name: {
            first: 'andrew',
            last: 'last'
        }
    };

    var res = obj.keep({
        name: {
            first: true
        }
    });

    res.should.eql({
        name: {
            first: 'andrew'
        }
    });
});

it('should not remove parent even if empty', function () {
    var obj = {
        name: {
            first: 'andrew',
            last: 'last'
        }
    };

    var res = obj.keep({
        name: {

        }
    });

    res.should.eql({name: {}})
});

it('should filter array objects', function () {
    var obj = {
        name: 'andrew mead',
        arr: [{
            one: 1,
            two: 2
        },{
            one: 1,
            two: 4,
            three: 3
        }]
    };

    var res = obj.keep({
        arr: [{
            two: true
        }]
    });

    res.should.eql({
        arr: [{
            two: 2
        },{
            two: 4
        }]
    });
});

it('should filter nest arrays with arrays', function () {
    var obj = {
        name: 'name',
        something: {
            arr: [{
                test: 'test',
                arr: [{
                    one: 1,
                    two: 2
                },{
                    one: 1,
                    two: 4,
                    three: 3
                }]
            },{
                arr: [{
                    one: 1,
                    two: 2
                },{
                    one: 1,
                    two: 4,
                    three: 3
                }]
            }]
        }
    };

    var res = obj.keep({
       something: {
           arr: [{
               arr: [{
                   one: true
               }]
           }]
       }
    });


    res.should.eql({
        something: {
            arr: [{
                arr:[{
                    one: 1
                }, {
                    one: 1
                }]
            }, {
                arr:[{
                    one: 1
                }, {
                    one: 1
                }]
            }]
        }
    });
});

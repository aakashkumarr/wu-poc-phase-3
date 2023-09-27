describe('myService',function(){
var myService

    beforeEach(module('myApp'))
    beforeEach(inject(function(_myService_){
myService=_myService_
    }))
    describe('checkValue',function(){
        it('it should have value a',function(){
            console.log(myService)
            expect(myService.a).toBe('aakash')
        })
    })
})
describe("A suite is jsut a function", function(){
    var a;
    it("and so is a spec", function(){
        a=false;
        expect(a).toBe(false);
        expect(4).toBe(4);
    })
    it("1 to 5", function(){
        expect(1).toBe(5);
    })
})

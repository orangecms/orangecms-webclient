describe('Service: OrangeCMS.Posts', function () {

    // load the service's module
    beforeEach(module('OrangeCMS'));

    // instantiate service
    var service;

    //update the injection
    beforeEach(inject(function (Posts) {
        service = Posts;
    }));

    /**
     * @description
     * Sample test case to check if the service is injected properly
     * */
    it('should be injected and defined', function () {
        expect(service).toBeDefined();
    });
});

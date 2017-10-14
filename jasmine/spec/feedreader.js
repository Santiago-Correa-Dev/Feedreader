/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() { // Checks that theAllFeeds Array has been defined.
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0); // Checks that the AllFeeds Array length is greater than 0
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('loops through URL and ensures URL is not empty.', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined(); //Checks that all URL's are defined.
                expect(feed.url).not.toBe(''); // Checks that it is not an empty string.
            });

        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('loops through names and ensures name is defined and not empty.', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined(); //Checks that all names are defined.
                expect(feed.name).not.toBe(''); // Checks that it is not an empty string.
            });
        });
    });


    describe('The menu', function() {
        var body = $('body');
        /* Test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('Menu is hidden by default', function() {
            expect((body).hasClass('menu-hidden')).toBe(true); //Checks that body is hidden by default.
        });

        /* Test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('Menu toggles hide and show', function() {
            $('.menu-icon-link').click(); //This is to check if user clicks 
            expect(body.hasClass('menu-hidden')).toBe(false); //If user clicks want to check if menu-hidden will show

            $('.menu-icon-link').click();
            expect(body.hasClass('menu-hidden')).toBe(true); // If user clicks again want to check if it will hide.
        });
    });


    //Checks to see if there is at least one single entry element.
    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        it('Contains a single entry element', function() {
            expect($('.feed .entry-link').length > 0).toBe(true);
        });
    });

    // Checks to see if there is at least one entry element within the feed.container 
    describe('New Feed Selection', function() {

        beforeEach(function(done) {
            loadFeed(1, function() {
                done();
            });
        });

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        it('Contains a single entry element', function() {
                expect($('.feed .entry-link').length > 0).toBe(true);
        });
    });
}());
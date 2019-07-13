$(function() {
   /*
    * @Description - Identify the feeds array
    */
    describe('RSS Feeds', () => {
        it('are defined',  () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

     /*
      * @Description - Loop through the feeds and ensure it has a url key
      */
        it('should include a url', () => {
            for (let feeds of allFeeds) {
                expect(feeds.url).toBeDefined();
                expect(feeds.url.length).not.toBe(0);
            }
        });

       /*
        * @Description - Loop through the feeds and ensure it has a name key
        */
        it('should should include a name', () => {
            for (let feeds of allFeeds) {
                expect(feeds.name).toBeDefined();
                expect(feeds.name.length).not.toBe(0);
            }
        });
    });

    /*
    * @Description - Identify the hidden menu class and ensure it behaves properly
    */
    describe('The menu', () => {
       const body = document.querySelector('body');

    /*
     * @Description - Ensure the body has a css class of 'menu-hidden' and that it is active
     */
        it('should ensure the menu is hidden', () => {
           expect(body.classList.contains('menu-hidden')).toBe(true);
        });

     /*
      * @Description - Ensure that the menu icon link reacts on a click event and either activates or
      * deactivates it's state or behavior to false or true
      */
         it('should ensure the menu changes', () => {
            menuIcon = document.querySelector('.menu-icon-link');
            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);

            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
         });
    });

    /*
     * @Description - Identify the feed based on it's ID and check if it contains a entry
     */
    describe('Initial Entries', () => {
    /*
     * @Description - Call the loadFeed function asynchronously
     */
        beforeEach((done) => {
           loadFeed(0, done);
        });
     /*
      * @Description - Identify the 'feed' and it's child, the 'entry' class and ensure it returns
      * at least a single entry
      */
        it('should ensure the loadFeed function returns a single entry element', () => {
            const entry = document.querySelectorAll('.feed .entry');
            expect(entry).not.toBe(0);
        });
    });
    /*
     * @Description - Confirm that feeds have been loaded
     */
    describe('New Feed Selection', () => {
      let firstFeed;
    /*
     * @Description - Call the loadFeed function asynchronously and store a new feed inside it
     */
       beforeEach((done) => {
          loadFeed(1, () => {
             firstFeed = document.querySelector('.feed');
            done();
          });
          loadFeed(0, () => {
            done();
          })
       });
    /*
     * @Description - Confirm that the Feed is not empty
     */
        it('should ensure that the content changes on a new feed', () => {
           let emptyFeed = [];
           expect(firstFeed).not.toBe(emptyFeed);
        });
    })
}());

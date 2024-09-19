const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require('./db/connection.js');

describe('Social Sequelzie Test', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the test suite is run
        await sequelize.sync({ force: true });
    })

    // Write your tests here
    test('A User can have one Profile', async () => {
        const user = await User.create({ username: 'testuser', email: 'test@example.com' });
        const profile = await Profile.create({ bio: 'This is a test bio', UserId: user.id });
    
        const foundUser = await User.findOne({ where: { id: user.id }, include: Profile });
        expect(foundUser.Profile.bio).toBe('This is a test bio');
      });
    test("replace with your test", function() {
        expect(true).toBe(true);
    })




})
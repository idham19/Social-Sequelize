const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require("./db/connection.js");

describe("Social Sequelzie Test", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the test suite is run
    await db.sync({ force: true });
  });

  // Write your tests here
  test("A User can have one Profile", async () => {
    const user = await User.create({
      username: "testuser",
      email: "test@example.com",
    });
    const profile = await Profile.create({
      bio: "This is a test bio",
      UserId: user.id,
    });

    const foundUser = await User.findOne({
      where: { id: user.id },
      include: Profile,
    });
    expect(foundUser.Profile.bio).toBe("This is a test bio");
  });

  test("A User can have many Posts", async () => {
    const user = await User.create({
      username: "testuser2",
      email: "test2@example.com",
    });
    // Create posts associated with the user
    const post1 = await Post.create({
      title: "First Post",
      body: "Content of the first post",
      UserId: user.id,
    });
    const post2 = await Post.create({
      title: "Second Post",
      body: "Content of the second post",
      UserId: user.id,
    });

    // Find the user and include the associated posts
    const foundUser = await User.findOne({
      where: { id: user.id },
      include: Post,
    });

    // Assertions
    expect(foundUser.Posts.length).toBe(2);
    expect(foundUser.Posts[0].title).toBe("First Post");
    expect(foundUser.Posts[1].title).toBe("Second Post");
  });

  test("Post can Have many comments", async () => {
    const post = await Post.create({
      title: "Hiking in Yosemite",
      body: "I had an amazing time hiking in Yosemite National Park!",
      createdAt: "2022-03-15T10:30:00.000Z",
    });
    const comment1 = await Comment.create({
      body: "This is a great post!",
      createdAt: "2022-01-01T12:00:00Z",
      PostId: post.id,
    });
    const comment2 = await Comment.create({
      body: "I completely agree with you.",
      createdAt: "2022-01-02T08:30:00Z",
      PostId: post.id,
    });
    const foundPost = await Post.findOne({
      where: { id: post.id },
      include: Comment,
    });
    expect(foundPost.Comments.length).toBe(2);
    expect(foundPost.Comments[0].body).toBe("This is a great post!");
    expect(foundPost.Comments[1].body).toBe("I completely agree with you.");
  });
});

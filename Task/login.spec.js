const fs = require('fs');
const path = require('path');
const { authenticate } = require('./login');

describe("Login Authentication", () => {
  let username, password;

  beforeAll((done) => {
    const filePath = path.join(__dirname, 'data.txt');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) throw err;
      const [user, pass] = data.trim().split(',');
      username = user;
      password = pass;
      done();
    });
  });

  it("should authenticate with correct credentials from file", () => {
    const result = authenticate(username, password);
    expect(result).toBeTrue();
  });

  it("should fail with incorrect credentials", () => {
    const result = authenticate("wrongUser", "wrongPass");
    expect(result).toBeFalse();
  });

  it("should authenticate with correct credentials from file", function () {
    const result = authenticate(credentials.username, credentials.password);
    expect(result).toBeTrue();
  });

  it("should not authenticate with incorrect username", function () {
    const result = authenticate("wrongUser", credentials.password);
    expect(result).toBeFalse();
  });

  it("should not authenticate with incorrect password", function () {
    const result = authenticate(credentials.username, "wrongPass");
    expect(result).toBeFalse();
  });

  it("should not authenticate with both incorrect username and password", function () {
    const result = authenticate("wrong", "wrong");
    expect(result).toBeFalse();
  });

  it("should not authenticate with empty username", function () {
    const result = authenticate("", credentials.password);
    expect(result).toBeFalse();
  });

  it("should not authenticate with empty password", function () {
    const result = authenticate(credentials.username, "");
    expect(result).toBeFalse();
  });

  it("should not authenticate with both fields empty", function () {
    const result = authenticate("", "");
    expect(result).toBeFalse();
  });

  it("should be case-sensitive for username and password", function () {
    const result = authenticate("Admin", "1234"); // 'Admin' vs 'admin'
    expect(result).toBeFalse();
  });

});

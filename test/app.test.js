const test = require('node:test');
const assert = require('node:assert');
const app = require('../app');

test('GET / returns the hello page', async () => {
  const server = app.listen(0);
  const { port } = server.address();

  const res = await fetch(`http://localhost:${port}/`);
  const body = await res.text();

  assert.strictEqual(res.status, 200);
  assert.ok(body.includes('Hello'));
  server.close();
});
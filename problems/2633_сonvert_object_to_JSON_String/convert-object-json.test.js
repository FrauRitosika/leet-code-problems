import { jsonStringify as jsonStringify} from './convert-object-json.js';

test('Return the JSON representation.', () => {
    const obj = { "y": 1, "x": { "y": 1, "x": 2 } }; 
    expect(jsonStringify(obj)).toBe(JSON.stringify(obj));
});

test('Return the JSON representation. The primitives of JSON are strings, numbers, booleans, and null.'
, () => {
    const obj = { "key": { "a": 1, "b": [{}, null, "Hello"] } }; 
    expect(jsonStringify(obj)).toBe(JSON.stringify(obj));
});


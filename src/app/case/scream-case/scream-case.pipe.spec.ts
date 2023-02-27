import { ScreamCasePipe } from './scream-case.pipe';

describe('ScreamCasePipe', () => {
  const pipe = new ScreamCasePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform text to ScreamCase format', () => {
    const value = 'Test string';
    const result = pipe.transform(value);
    expect(result).toEqual('TEST_STRING');
  });

  it('should throw error if value is not a string', () => {
    const value: any = 1234;
    expect(() => {
      pipe.transform(value);
    }).toThrow('Value is not a string.');
  });
});

import { PascalCasePipe } from './pascal-case.pipe';

describe('PascalCasePipe', () => {
  const pipe = new PascalCasePipe();

  it('create an instance', () => {
    const pipe = new PascalCasePipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const value = 'pascal Case test';
    const result = pipe.transform(value);
    expect(result).toEqual('PascalCaseTest');
  })
});

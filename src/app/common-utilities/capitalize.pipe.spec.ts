import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
    let pipe : CapitalizePipe;
  beforeEach(()=>{
    pipe = new CapitalizePipe();
  });

  it('It returns Capitalized data for an import with 1 Character', () => {
    const actual = pipe.transform('m');
    // const pipe = new CapitalizePipe();
    expect(actual).toBe('M');
  });

  it('It returns Capitalized data for an import with more than 1 Character', () => {
    const actual = pipe.transform('maa');
    // const pipe = new CapitalizePipe();
    expect(actual).toBe('Maa');
  });

  it('It returns Capitalized data for an import with 0 Character', () => {
    const actual = pipe.transform('');
    // const pipe = new CapitalizePipe();
    expect(actual).toBe('');
  });

});

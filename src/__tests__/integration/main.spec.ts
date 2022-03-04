import { runCLI } from '../helpers';

describe('mmg', () => {
  it('should display the help contents', () => {
    const { stdout } = runCLI(process.cwd(), ['--help']);

    expect(stdout).toContain('Usage: mmg [options]');
  });
});
